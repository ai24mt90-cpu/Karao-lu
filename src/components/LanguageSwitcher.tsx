"use client";

import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-[42px] h-[36px]"></div>; // Placeholder
    }

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    const currentLng = i18n.resolvedLanguage || i18n.language || "tr";

    return (
        <div className="relative group ml-4 cursor-pointer z-[100]">
            {/* Current Language */}
            <div className="flex items-center justify-center w-[42px] h-[36px] bg-gray-50 text-secondary font-bold text-sm rounded-md shadow-sm border border-gray-100 hover:bg-gray-100 transition-colors">
                {currentLng.toUpperCase()}
            </div>

            {/* Dropdown Menu */}
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-md shadow-lg border border-gray-100 py-1 min-w-[100px] flex flex-col items-center">
                    <button
                        onClick={() => changeLanguage("tr")}
                        className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${currentLng === 'tr' ? 'font-bold text-primary' : 'text-gray-700'}`}
                    >
                        Türkçe
                    </button>
                    <button
                        onClick={() => changeLanguage("en")}
                        className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-50 transition-colors ${currentLng === 'en' ? 'font-bold text-primary' : 'text-gray-700'}`}
                    >
                        English
                    </button>
                </div>
            </div>
        </div>
    );
}
