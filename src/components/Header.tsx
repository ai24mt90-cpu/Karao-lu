"use client";

import Link from "next/link";
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { href: "/projeler", label: "Projeler" },
    { href: "/hakkimizda", label: "Hakkımızda" },
    { href: "/hayirseverlik", label: "Sosyal Sorumluluk" },
    { href: "/sss", label: "SSS" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-border-brand shadow-sm">
            <div className="layout-container flex h-24 items-center justify-between">
                <Link href="/" className="flex items-center gap-4 text-primary group">
                    <div className="transition-transform group-hover:scale-105">
                        <Logo size={80} className="text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold tracking-tight leading-none text-foreground">Karaoğlu</span>
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-text-secondary">Universal Mühendislik</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                    <Link
                        href="/iletisim"
                        className="flex h-11 items-center justify-center bg-primary px-6 text-sm font-semibold text-white transition-all hover:bg-primary-dark"
                    >
                        Bize Ulaşın
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border-brand bg-white"
                    >
                        <div className="flex flex-col gap-4 p-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link
                                href="/iletisim"
                                onClick={() => setIsOpen(false)}
                                className="flex h-11 items-center justify-center bg-primary text-sm font-semibold text-white mt-2"
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
