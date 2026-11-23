"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { LANG_STORAGE_KEY } from "../i18n/config";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const sync = (lng: string) => {
            document.documentElement.lang = lng;
            try {
                localStorage.setItem(LANG_STORAGE_KEY, lng);
            } catch {
                /* depolama kapalı */
            }
        };
        let saved: string | null = null;
        try {
            saved = localStorage.getItem(LANG_STORAGE_KEY);
        } catch {
            /* depolama kapalı */
        }
        i18n.on("languageChanged", sync);
        if (saved === "en" && i18n.language !== "en") i18n.changeLanguage("en");
        return () => i18n.off("languageChanged", sync);
    }, []);

    return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
