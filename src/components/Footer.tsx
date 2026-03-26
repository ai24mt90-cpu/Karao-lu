"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="w-full bg-primary pt-16 pb-8 text-white">
            <div className="layout-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 text-white">
                            <div className="bg-white rounded-xl p-2">
                                <Image
                                    src="/footer-logo.png"
                                    alt="Karaoğlu Logo"
                                    width={100}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col text-left gap-1">
                                <span className="text-[16px] font-bold tracking-tight leading-tight">{t("footer.brandInfo.name", "Karaoğlu Universal Mühendislik Ltd. Şti.")}</span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.1EM] text-white/70">{t("footer.brandInfo.desc", "Engineering & Infrastructure Projects")}</span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.1EM] text-white/70">{t("footer.brandInfo.country", "Turkey")}</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            {t("footer.aboutText")}
                        </p>
                        {/* Social Media Links */}
                        <div className="flex items-center gap-4">
                            <a href="https://www.instagram.com/karaogluuniversalmuhendislik/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <p className="text-sm font-bold text-white mb-2">{t("footer.quickLinks")}</p>
                        <nav className="flex flex-col gap-3">
                            <Link href="/hakkimizda" className="text-sm text-gray-100 hover:text-white transition-colors">{t("nav.about")}</Link>
                            <Link href="/sektorler" className="text-sm text-gray-100 hover:text-white transition-colors">{t("nav.services")}</Link>
                            <Link href="/iletisim" className="text-sm text-gray-100 hover:text-white transition-colors">{t("nav.contact")}</Link>
                            <Link href="/ankara-teknik-koordinasyon" className="text-sm text-gray-100 hover:text-white transition-colors">{t("nav.ankara", "Ankara Koordinasyon")}</Link>
                        </nav>
                    </div>

                    {/* Projects */}
                    <div className="flex flex-col gap-4">
                        <p className="text-sm font-bold text-white mb-2">{t("footer.contentLabel")}</p>
                        <nav className="flex flex-col gap-3">
                            <Link href="/blog" className="text-sm text-gray-100 hover:text-white transition-colors">{t("nav.blogPosts")}</Link>
                            <Link href="/haberler" className="text-sm text-gray-100 hover:text-white transition-colors">{t("nav.blogNews")}</Link>
                            <Link href="/sss" className="text-sm text-gray-100 hover:text-white transition-colors">{t("home.quickLinks.faq.title")}</Link>
                            <Link href="/sosyal-sorumluluk" className="text-sm text-gray-100 hover:text-white transition-colors">{t("nav.socialResp")}</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <p className="text-sm font-bold text-white mb-2">{t("footer.contact")}</p>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:karaogluuniversal@gmail.com" className="flex items-center gap-3 text-sm text-gray-100 hover:text-white transition-colors">
                                <Mail size={16} /> karaogluuniversal@gmail.com
                            </a>
                            <a href="tel:+905326736556" className="flex items-center gap-3 text-sm text-gray-100 hover:text-white transition-colors">
                                <Phone size={16} /> 0532 673 65 56
                            </a>
                            <div className="flex items-start gap-3 text-sm text-gray-100">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white mb-0.5">{t("footer.vanBranch")}</span>
                                    <span>Güzeloba Mah. Çağlayangil Caddesi 3 B Muratpaşa/Antalya</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-gray-100">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white mb-0.5">{t("footer.ankaraHQ")}</span>
                                    <span>Next Level, Kızılırmak Mah. Dumlupınar Bulvarı No: 3C1/160, Kat: 29, 06530 Çankaya/Ankara</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-wrap justify-center gap-6 mb-4">
                        <Link href="/kvkk" className="text-sm text-white/60 hover:text-white transition-colors">{t("footer.kvkkLabel")}</Link>
                        <Link href="/gizlilik" className="text-sm text-white/60 hover:text-white transition-colors">{t("footer.privacy")}</Link>
                        <Link href="/iletisim" className="text-sm text-white/60 hover:text-white transition-colors">{t("nav.contact")}</Link>
                    </div>
                    <p className="text-white/70 text-sm text-center mb-2">
                        <strong>{t("footer.engineeringFirm")}</strong> – Next Level, Kızılırmak Mah. Dumlupınar Bulvarı No: 3C1/160, Kat: 29, 06530 Çankaya/Ankara
                    </p>
                    <p className="text-white/50 text-sm text-center">
                        © {new Date().getFullYear()} Karaoğlu Universal Mühendislik Ltd. Şti. {t("footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
