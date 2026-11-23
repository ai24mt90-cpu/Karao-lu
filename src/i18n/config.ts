"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "./locales/tr.json";
import en from "./locales/en.json";

export const LANG_STORAGE_KEY = "i18nextLng";

// Sunucu ve ilk istemci render'ı her zaman Türkçe: Google sayfayı Türkçe indeksler.
// Ziyaretçinin seçtiği dil (localStorage) I18nProvider'da mount sonrası uygulanır.
i18n
    .use(initReactI18next)
    .init({
        lng: "tr",
        resources: {
            tr: { translation: tr },
            en: { translation: en },
        },
        fallbackLng: "tr",
        interpolation: {
            escapeValue: false, // React already escaping
        },
    });

export default i18n;
