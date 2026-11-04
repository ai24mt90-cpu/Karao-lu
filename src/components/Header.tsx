"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown, MapPin, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import LanguageSwitcher from "./LanguageSwitcher";

type NavLink = { href: string; label: string; submenu?: { href: string; label: string }[] };

const getNavLinks = (t: TFunction): NavLink[] => [
    {
        href: "/hakkimizda",
        label: t("nav.about"),
        submenu: [
            { href: "/hakkimizda", label: t("nav.aboutUsCorp") },
            { href: "/hakkimizda#baskanin-mesaji", label: t("nav.aboutUsPresident") },
            { href: "/hakkimizda#yonetim", label: t("nav.aboutUsBoard") },
        ],
    },
    {
        href: "/sektorler",
        label: t("nav.sectors"),
        submenu: [
            { href: "/sektorler#kamu", label: t("nav.sectorPublic") },
            { href: "/sektorler#saglik", label: t("nav.sectorHealth") },
            { href: "/sektorler#egitim", label: t("nav.sectorEdu") },
            { href: "/sektorler#konut", label: t("nav.sectorHousing") },
            { href: "/sektorler#altyapi", label: t("nav.sectorInfra") },
        ],
    },
    {
        href: "/projeler/kategori/tum-projeler",
        label: t("nav.projects"),
        submenu: [
            { href: "/projeler/kategori/tum-projeler", label: t("nav.projectsAll") },
            { href: "/projeler/kategori/tamamlanan-kamu-projeleri", label: t("nav.projectsCompleted") },
            { href: "/projeler/kategori/devam-eden-altyapi-isleri", label: t("nav.projectsOngoing") },
        ],
    },
    { href: "/sosyal-sorumluluk", label: t("nav.socialResp") },
    {
        href: "/blog",
        label: t("nav.blog"),
        submenu: [
            { href: "/haberler", label: t("nav.blogNews") },
            { href: "/blog", label: t("nav.blogPosts") },
        ],
    },
    { href: "/iletisim", label: t("nav.contact") },
];

export default function Header() {
    const { t } = useTranslation();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const navLinks = getNavLinks(t);
    const isActive = (link: NavLink) =>
        pathname === link.href || link.submenu?.some((s) => pathname === s.href.split("#")[0]) || false;

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Üst bilgi şeridi */}
            <div className="hidden md:block bg-navy-950 text-white/75">
                <div className="layout-container flex items-center justify-between h-10 text-[13px]">
                    <div className="flex items-center gap-6">
                        <a href="tel:+905326736556" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={13} className="text-gold" />
                            <span>0532 673 65 56</span>
                        </a>
                        <a href="mailto:karaogluuniversal@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={13} className="text-gold" />
                            <span>karaogluuniversal@gmail.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin size={13} className="text-gold" />
                        <span>{t("header.offices", "Antalya Merkez · Ankara Şube")}</span>
                    </div>
                </div>
            </div>

            {/* Ana menü */}
            <div
                className={`bg-white/95 backdrop-blur border-b transition-shadow ${scrolled ? "border-transparent shadow-[0_6px_24px_-12px_rgba(10,20,36,0.25)]" : "border-gray-100"}`}
            >
                <div className="layout-container flex h-20 items-center gap-6">
                    <Link href="/" className="flex items-center shrink-0" aria-label="Karaoğlu Universal Mühendislik ana sayfa">
                        <Image
                            src="/logo-yatay.svg"
                            alt="Karaoğlu Universal Mühendislik"
                            width={982}
                            height={300}
                            className="h-12 lg:h-14 w-auto"
                            priority
                            unoptimized
                        />
                    </Link>

                    <nav className="hidden lg:flex items-center ml-auto" aria-label="Ana menü">
                        {navLinks.map((link) => (
                            <div
                                key={link.href + link.label}
                                className="relative"
                                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.submenu ? (
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                                        aria-expanded={activeDropdown === link.label}
                                        className={`relative flex items-center gap-1 px-3.5 py-7 text-[14px] font-medium transition-colors ${isActive(link) ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                                    >
                                        {link.label}
                                        <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                                        {isActive(link) && <span className="absolute left-3.5 right-3.5 bottom-5 h-0.5 bg-gold" />}
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`relative flex items-center px-3.5 py-7 text-[14px] font-medium transition-colors ${isActive(link) ? "text-primary" : "text-gray-700 hover:text-primary"}`}
                                    >
                                        {link.label}
                                        {isActive(link) && <span className="absolute left-3.5 right-3.5 bottom-5 h-0.5 bg-gold" />}
                                    </Link>
                                )}

                                <AnimatePresence>
                                    {link.submenu && activeDropdown === link.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 6 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute top-full left-0 min-w-[230px] bg-white shadow-xl ring-1 ring-black/5 border-t-2 border-gold py-2 z-50"
                                        >
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-surface-secondary hover:text-primary transition-colors"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <LanguageSwitcher />
                        <Link
                            href="/iletisim"
                            className="ml-4 inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-3 transition-colors"
                        >
                            {t("header.cta", "Teklif İsteyin")} <ArrowRight size={16} />
                        </Link>
                    </nav>

                    <button
                        className="lg:hidden ml-auto p-2 -mr-2 text-primary"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label={isOpen ? t("nav.menuClose") : t("nav.menuOpen")}
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobil menü */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-white overflow-y-auto"
                    >
                        <nav
                            className="layout-container py-4 flex flex-col"
                            aria-label="Mobil menü"
                            onClick={(e) => {
                                // Bir linke dokununca menüyü kapat
                                if ((e.target as HTMLElement).closest("a")) setIsOpen(false);
                            }}
                        >
                            <Link href="/" className="py-4 text-base font-semibold text-primary border-b border-gray-100">
                                {t("nav.home")}
                            </Link>
                            {navLinks.map((link) =>
                                link.submenu ? (
                                    <div key={link.label} className="border-b border-gray-100">
                                        <button
                                            onClick={() => setOpenMobileSection(openMobileSection === link.label ? null : link.label)}
                                            aria-expanded={openMobileSection === link.label}
                                            className="w-full flex items-center justify-between py-4 text-base font-medium text-foreground"
                                        >
                                            {link.label}
                                            <ChevronDown size={18} className={`transition-transform ${openMobileSection === link.label ? "rotate-180" : ""}`} />
                                        </button>
                                        {openMobileSection === link.label && (
                                            <div className="pb-3 pl-4 flex flex-col border-l-2 border-gold ml-1">
                                                {link.submenu.map((sub) => (
                                                    <Link key={sub.href} href={sub.href} className="py-2 text-sm text-text-secondary hover:text-primary">
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <Link key={link.label} href={link.href} className="py-4 text-base font-medium text-foreground border-b border-gray-100">
                                        {link.label}
                                    </Link>
                                )
                            )}

                            <div className="mt-6 grid grid-cols-2 gap-3">
                                <a href="tel:+905326736556" className="flex items-center justify-center gap-2 bg-primary text-white py-3.5 text-sm font-semibold">
                                    <Phone size={16} /> {t("home.ctaV2.call", "Hemen Arayın")}
                                </a>
                                <a
                                    href="https://wa.me/905326736556"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 border border-primary text-primary py-3.5 text-sm font-semibold"
                                >
                                    {t("home.ctaV2.whatsapp", "WhatsApp")}
                                </a>
                            </div>
                            <div className="mt-6 flex items-center justify-between text-sm text-text-secondary">
                                <span>{t("header.offices", "Antalya Merkez · Ankara Şube")}</span>
                                <LanguageSwitcher />
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
