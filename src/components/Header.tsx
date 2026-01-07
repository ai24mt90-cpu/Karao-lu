"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    {
        href: "/hakkimizda",
        label: "Hakkımızda",
        submenu: [
            { href: "/hakkimizda", label: "Kurumsal" },
            { href: "/hakkimizda#baskanin-mesaji", label: "Başkanın Mesajı" },
            { href: "/hakkimizda#yonetim", label: "Yönetim Kurulu" },
        ]
    },
    {
        href: "/projeler",
        label: "Sektörler",
        submenu: [
            { href: "/projeler?category=kamu", label: "Kamu Projeleri" },
            { href: "/projeler?category=konut", label: "Konut" },
            { href: "/projeler?category=altyapi", label: "Altyapı" },
        ]
    },
    { href: "/projeler", label: "Projeler" },
    { href: "/hayirseverlik", label: "Sosyal Sorumluluk" },
    {
        href: "/haberler",
        label: "Basın Odası",
        submenu: [
            { href: "/haberler", label: "Haberler" },
            { href: "/blog", label: "Blog" },
        ]
    },
    { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Top Bar */}
            <div className="bg-primary text-white">
                <div className="layout-container flex items-center justify-between h-10 text-sm">
                    <div className="flex items-center gap-6">
                        <a href="tel:+904322165636" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                            <Phone size={14} />
                            <span>0432 216 56 36</span>
                        </a>
                        <a href="mailto:karaogluuniversal@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                            <Mail size={14} />
                            <span>karaogluuniversal@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="bg-white border-b border-gray-200">
                <div className="layout-container flex h-20 items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <Logo size={60} className="text-primary" />
                        <div className="flex flex-col">
                            <span className="text-xl font-bold tracking-tight text-foreground">KARAOĞLU</span>
                            <span className="text-[9px] font-medium uppercase tracking-[0.15em] text-text-secondary">Universal Mühendislik</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center">
                        {navLinks.map((link) => (
                            <div
                                key={link.href + link.label}
                                className="relative"
                                onMouseEnter={() => link.submenu && setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-1 px-4 py-6 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    {link.label}
                                    {link.submenu && <ChevronDown size={14} />}
                                </Link>

                                {/* Dropdown Menu */}
                                {link.submenu && activeDropdown === link.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute top-full left-0 bg-white shadow-lg border border-gray-100 min-w-[200px]"
                                    >
                                        {link.submenu.map((sub) => (
                                            <Link
                                                key={sub.href}
                                                href={sub.href}
                                                className="block px-5 py-3 text-sm text-foreground hover:bg-primary hover:text-white transition-colors"
                                            >
                                                {sub.label}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
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
