"use client";

import { useEffect } from "react";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

// Telefon, WhatsApp ve e-posta tıklamalarını GA4'e olay olarak gönderir.
// GA4 > Yönetici > Etkinlikler'de bu olayları "Önemli etkinlik" olarak işaretleyin.
function eventNameFor(href: string): string | null {
    if (href.startsWith("tel:")) return "phone_click";
    if (href.startsWith("mailto:")) return "email_click";
    if (/^https?:\/\/(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//.test(href)) return "whatsapp_click";
    return null;
}

export default function ContactClickTracker() {
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
            if (!link) return;

            const href = link.getAttribute("href") || "";
            const name = eventNameFor(href);
            if (!name || typeof window.gtag !== "function") return;

            window.gtag("event", name, {
                link_url: href,
                page_path: window.location.pathname,
                transport_type: "beacon",
            });
        };

        document.addEventListener("click", onClick, { capture: true });
        return () => document.removeEventListener("click", onClick, { capture: true });
    }, []);

    return null;
}
