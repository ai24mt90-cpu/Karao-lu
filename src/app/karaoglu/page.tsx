"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function KaraogluBrandPage() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col bg-background">
            <section className="relative h-[400px] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1541888086925-920a0bba0ec9?auto=format&fit=crop&q=80&w=2000"
                    alt={t("brandPage.title")}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="relative z-10 layout-container text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4"
                    >
                        {t("brandPage.title")}
                    </motion.h1>
                </div>
            </section>

            <section className="py-20 bg-white min-h-[50vh]">
                <div className="layout-container max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-primary mb-8">Karaoğlu Universal Mühendislik</h2>
                    <div className="prose prose-lg mx-auto text-text-secondary leading-relaxed space-y-6">
                        <p>{t("brandPage.p1")}</p>
                        <p>{t("brandPage.p2")}</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
