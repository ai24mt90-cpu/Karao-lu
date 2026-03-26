"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function GizlilikPage() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[300px] bg-primary flex items-center justify-center">
                <div className="layout-container text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        {t("privacyPage.heroTitle")}
                    </motion.h1>
                    <p className="mt-4 text-white/80">{t("privacyPage.heroSubtitle")}</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="layout-container max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-foreground mb-6">{t("privacyPage.introTitle")}</h2>
                        <p className="text-text-secondary mb-6">
                            {t("privacyPage.introText")}
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">{t("privacyPage.collectedDataTitle")}</h2>
                        <p className="text-text-secondary mb-4">{t("privacyPage.collectedDataIntro")}</p>
                        <ul className="list-disc pl-6 text-text-secondary mb-6">
                            <li>{t("privacyPage.collectedDataList.i1")}</li>
                            <li>{t("privacyPage.collectedDataList.i2")}</li>
                            <li>{t("privacyPage.collectedDataList.i3")}</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">{t("privacyPage.dataUsageTitle")}</h2>
                        <p className="text-text-secondary mb-4">{t("privacyPage.dataUsageIntro")}</p>
                        <ul className="list-disc pl-6 text-text-secondary mb-6">
                            <li>{t("privacyPage.dataUsageList.i1")}</li>
                            <li>{t("privacyPage.dataUsageList.i2")}</li>
                            <li>{t("privacyPage.dataUsageList.i3")}</li>
                            <li>{t("privacyPage.dataUsageList.i4")}</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">{t("privacyPage.cookiesTitle")}</h2>
                        <p className="text-text-secondary mb-6">
                            {t("privacyPage.cookiesText")}
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">{t("privacyPage.securityTitle")}</h2>
                        <p className="text-text-secondary mb-6">
                            {t("privacyPage.securityText")}
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">{t("privacyPage.sharingTitle")}</h2>
                        <p className="text-text-secondary mb-6">
                            {t("privacyPage.sharingText")}
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">{t("privacyPage.contactTitle")}</h2>
                        <p className="text-text-secondary mb-6">
                            {t("privacyPage.contactText")}<br /><br />
                            <strong>{t("privacyPage.email")}</strong> karaogluuniversal@gmail.com<br />
                            <strong>{t("privacyPage.phone")}</strong> 0532 673 65 56
                        </p>

                        <div className="mt-10 p-6 bg-surface-secondary rounded-lg">
                            <p className="text-sm text-text-secondary">
                                <strong>{t("privacyPage.lastUpdateLabel")}</strong> {t("privacyPage.lastUpdateDate")}<br />
                                {t("privacyPage.updateNote")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
