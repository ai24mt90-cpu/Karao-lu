"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { GOOGLE_PROFILE } from "@/lib/offices";

export default function Footer() {
    const { t } = useTranslation();

    const columns = [
        {
            title: t("footer.quickLinks"),
            links: [
                { href: "/hakkimizda", label: t("nav.about") },
                { href: "/karaoglu", label: t("brandPage.title", "Karaoğlu Kimdir?") },
                { href: "/sektorler", label: t("nav.sectors") },
                { href: "/sosyal-sorumluluk", label: t("nav.socialResp") },
                { href: "/ankara-teknik-koordinasyon", label: t("nav.ankara", "Ankara Koordinasyon") },
            ],
        },
        {
            title: t("footer.projectsTitle", "Projeler"),
            links: [
                { href: "/projeler/kategori/tum-projeler", label: t("nav.projectsAll") },
                { href: "/projeler/kategori/tamamlanan-kamu-projeleri", label: t("nav.projectsCompleted") },
                { href: "/projeler/kategori/devam-eden-altyapi-isleri", label: t("nav.projectsOngoing") },
                { href: "/blog", label: t("nav.blogPosts") },
                { href: "/haberler", label: t("nav.blogNews") },
                { href: "/sss", label: t("home.quickLinks.faq.title") },
            ],
        },
    ];

    const offices = [
        {
            label: t("footer.vanBranch"),
            address: "Güzeloba Mah. Çağlayangil Caddesi 3 B, Muratpaşa/Antalya",
            map: GOOGLE_PROFILE.antalya,
        },
        {
            label: t("footer.ankaraHQ"),
            address: "Next Level, Kızılırmak Mah. Dumlupınar Bulvarı No: 3C1/160, Kat: 29, 06530 Çankaya/Ankara",
            map: GOOGLE_PROFILE.ankara,
        },
    ];

    return (
        <footer className="w-full bg-navy-950 text-white">
            <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />
            <div className="layout-container pt-16 pb-10">
                <div className="grid gap-12 lg:grid-cols-12 mb-14">
                    {/* Marka */}
                    <div className="lg:col-span-4">
                        <Link href="/" className="inline-flex" aria-label="Karaoğlu Universal Mühendislik ana sayfa">
                            <Image src="/logo-yatay-beyaz.svg" alt="Karaoğlu Universal Mühendislik" width={982} height={300} className="h-14 w-auto" unoptimized />
                        </Link>
                        <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">{t("footer.aboutText")}</p>
                        <div className="mt-6 flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/karaogluuniversalmuhendislik/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-white/15 hover:border-gold hover:text-gold-light flex items-center justify-center transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram size={17} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/karaoglu-muhendislik"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-white/15 hover:border-gold hover:text-gold-light flex items-center justify-center transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={17} />
                            </a>
                        </div>
                    </div>

                    {/* Link sütunları */}
                    {columns.map((col) => (
                        <nav key={col.title} className="lg:col-span-2" aria-label={col.title}>
                            <p className="font-display text-sm font-bold uppercase tracking-wider mb-5">{col.title}</p>
                            <ul className="space-y-3">
                                {col.links.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    ))}

                    {/* İletişim ve ofisler */}
                    <div className="lg:col-span-4">
                        <p className="font-display text-sm font-bold uppercase tracking-wider mb-5">{t("footer.officesTitle", "Ofislerimiz")}</p>
                        <div className="space-y-5">
                            {offices.map((o) => (
                                <div key={o.label} className="flex gap-3">
                                    <MapPin size={17} className="text-gold mt-0.5 shrink-0" />
                                    <div className="text-sm">
                                        <p className="font-semibold">{o.label}</p>
                                        <p className="text-white/60 mt-0.5">{o.address}</p>
                                        <a
                                            href={o.map}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-1.5 inline-flex items-center gap-1 text-gold-light hover:text-white text-[13px] transition-colors"
                                        >
                                            {t("contactPage.mapsLink", "Haritada gör ve yorum yap")} <ArrowUpRight size={13} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                            <a href="tel:+905326736556" className="flex items-center gap-3 text-sm hover:text-gold-light transition-colors">
                                <Phone size={17} className="text-gold" /> 0532 673 65 56
                            </a>
                            <a href="mailto:karaogluuniversal@gmail.com" className="flex items-center gap-3 text-sm hover:text-gold-light transition-colors">
                                <Mail size={17} className="text-gold" /> karaogluuniversal@gmail.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 md:items-center justify-between text-[13px] text-white/50">
                    <p>
                        © {new Date().getFullYear()} Karaoğlu Universal Mühendislik Ltd. Şti. {t("footer.rights")}
                    </p>
                    <div className="flex flex-wrap gap-6">
                        <Link href="/kvkk" className="hover:text-white transition-colors">{t("footer.kvkkLabel")}</Link>
                        <Link href="/gizlilik" className="hover:text-white transition-colors">{t("footer.privacy")}</Link>
                        <Link href="/iletisim" className="hover:text-white transition-colors">{t("nav.contact")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
