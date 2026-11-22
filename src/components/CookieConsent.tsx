"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";
import { useTranslation } from "react-i18next";

const GA_ID = "G-EW7GQW0R23";
const STORAGE_KEY = "cookie-consent";
export const OPEN_CONSENT_EVENT = "open-cookie-consent";
const CHANGE_EVENT = "cookie-consent-change";

type Consent = "granted" | "denied" | null;

function readConsent(): Consent {
    try {
        const v = localStorage.getItem(STORAGE_KEY);
        return v === "granted" || v === "denied" ? v : null;
    } catch {
        return null;
    }
}

function writeConsent(v: Exclude<Consent, null>) {
    try {
        localStorage.setItem(STORAGE_KEY, v);
    } catch {
        /* depolama kapalıysa tercih kaydedilemez */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribe(cb: () => void) {
    window.addEventListener(CHANGE_EVENT, cb);
    window.addEventListener("storage", cb);
    return () => {
        window.removeEventListener(CHANGE_EVENT, cb);
        window.removeEventListener("storage", cb);
    };
}

/**
 * Google Analytics yalnızca ziyaretçi analitik çerezlerini kabul ettiğinde yüklenir.
 * Onaydan önce Google sunucularına hiçbir istek gitmez.
 */
export default function CookieConsent() {
    const { t } = useTranslation();
    // Sunucuda "unknown": bant ve GA, tarayıcı tercihi okunana kadar render edilmez
    const consent = useSyncExternalStore<Consent | "unknown">(subscribe, readConsent, () => "unknown");
    const [reopened, setReopened] = useState(false);
    const open = consent === null || reopened;

    useEffect(() => {
        const reopen = () => setReopened(true);
        window.addEventListener(OPEN_CONSENT_EVENT, reopen);
        return () => window.removeEventListener(OPEN_CONSENT_EVENT, reopen);
    }, []);

    const decide = (v: Exclude<Consent, null>) => {
        const wasGranted = consent === "granted";
        writeConsent(v);
        setReopened(false);
        // İzin geri çekildiyse yüklenmiş GA'yı temizlemek için sayfayı yenile
        if (wasGranted && v === "denied") window.location.reload();
    };

    return (
        <>
            {consent === "granted" && (
                <>
                    <Script
                        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        strategy="afterInteractive"
                    />
                    <Script id="ga-init" strategy="afterInteractive">
                        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
                    </Script>
                </>
            )}

            {open && (
                <div
                    role="dialog"
                    aria-live="polite"
                    aria-label={t("cookie.title")}
                    className="fixed inset-x-0 bottom-0 z-[60] p-4"
                >
                    <div className="mx-auto max-w-3xl bg-white shadow-2xl border border-gray-200 p-5 flex flex-col md:flex-row md:items-center gap-4">
                        <p className="text-sm text-gray-700 flex-1">
                            {t("cookie.text")}{" "}
                            <Link href="/gizlilik" className="text-primary font-medium underline">
                                {t("cookie.policyLink")}
                            </Link>
                        </p>
                        <div className="flex gap-2 shrink-0">
                            <button
                                type="button"
                                onClick={() => decide("denied")}
                                className="h-10 px-4 border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50"
                            >
                                {t("cookie.reject")}
                            </button>
                            <button
                                type="button"
                                onClick={() => decide("granted")}
                                className="h-10 px-4 bg-primary text-white text-sm font-semibold hover:bg-primary-dark"
                            >
                                {t("cookie.accept")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
