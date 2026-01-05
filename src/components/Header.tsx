"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navLinks = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/projeler", label: "Projeler" },
    { href: "/hayirseverlik", label: "Hayırseverlik" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
            <div className="layout-container flex h-32 items-center justify-between">
                <Link href="/" className="flex items-center gap-6 text-white group">
                    <div className="transition-transform group-hover:scale-105">
                        <Logo size={120} className="text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black uppercase tracking-tighter leading-none">Karaoğlu</span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-text-secondary">Universal Mühendislik</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12">
                    <div className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-text-secondary hover:text-white transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/iletisim"
                        className="flex h-12 items-center justify-center bg-white px-8 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-all hover:bg-white/90 active:scale-95"
                    >
                        Bize Ulaşın
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex md:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-white/10 bg-black"
                    >
                        <div className="flex flex-col gap-6 p-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-xs font-black uppercase tracking-[0.3em] text-text-secondary hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/iletisim"
                                onClick={() => setIsOpen(false)}
                                className="flex h-16 items-center justify-center bg-white text-xs font-black uppercase tracking-[0.3em] text-black transition-all"
                            >
                                Bize Ulaşın
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
