"use client";

import Link from "next/link";
import Image from "next/image";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const getNavLinks = (t: any) => [
    {
        href: "/hakkimizda",
        label: t("nav.about"),
        submenu: [
            { href: "/hakkimizda", label: t("nav.aboutUsCorp") },
            { href: "/hakkimizda#baskanin-mesaji", label: t("nav.aboutUsPresident") },
            { href: "/hakkimizda#yonetim", label: t("nav.aboutUsBoard") },
        ]
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
        ]
    },
    {
        href: "/projeler",
        label: t("nav.projects"),
        submenu: [
            { href: "/projeler", label: t("nav.projectsAll") },
            { href: "/projeler?category=tamamlandi", label: t("nav.projectsCompleted") },
            { href: "/projeler?category=devam", label: t("nav.projectsOngoing") },
        ]
    },
    { href: "/sosyal-sorumluluk", label: t("nav.socialResp") },
    {
        href: "/blog",
        label: t("nav.blog"),
        submenu: [
            { href: "/haberler", label: t("nav.blogNews") },
            { href: "/blog", label: t("nav.blogPosts") },
        ]
    },
    { href: "/iletisim", label: t("nav.contact") },
];

export default function Header() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const navLinks = getNavLinks(t);

    if (!mounted) {
        return <header className="sticky top-0 z-50 w-full h-24 bg-white border-b border-gray-100"></header>;
    }

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Bar */}
            <div className="bg-white text-foreground border-b border-gray-200">
                <div className="layout-container flex items-center justify-between h-10 text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:+905326736556" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                            <Phone size={14} />
                            <span>0532 673 65 56</span>
                        </a>
                        <a href="mailto:karaogluuniversal@gmail.com" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                            <Mail size={14} />
                            <span>karaogluuniversal@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-100">
                <div className="flex h-24 items-center">
                    {/* Logo Section */}
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center h-full px-8 gap-4 group">
                        <Image
                            src="/logo-header.png"
                            alt="Karaoğlu Mühendislik Logo"
                            width={160}
                            height={160}
                            className="object-contain"
                            priority
                        />
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-2xl uppercase leading-none text-primary tracking-tight">KARAOĞLU</span>
                            <span className="font-medium text-[10px] text-gray-500 uppercase tracking-[0.2em] leading-tight mt-0.5">UNIVERSAL MÜHENDİSLİK</span>
                        </div>
                    </Link>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Right section with container padding */}
                    <div className="layout-container !pl-0 flex items-center justify-end">

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center">
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
                                            className="flex items-center gap-1 px-4 py-8 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                            <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="flex items-center gap-1 px-4 py-8 text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu */}
                                    {link.submenu && activeDropdown === link.label && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 min-w-[200px] z-50"
                                        >
                                            {link.submenu.map((sub) => (
                                                <Link
                                                    key={sub.href}
                                                    href={sub.href}
                                                    className="block px-5 py-3 text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                            <LanguageSwitcher />
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 text-foreground"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? t("nav.menuClose") : t("nav.menuOpen")}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-b border-gray-200 bg-white"
                    >
                        <div className="flex flex-col p-4">
                            {/* Ana Sayfa - Mobil */}
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="py-3 text-sm font-bold text-primary border-b border-gray-100"
                            >
                                {t("nav.home")}
                            </Link>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href + link.label}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="py-3 text-sm font-medium text-foreground hover:text-primary border-b border-gray-100 last:border-0"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
