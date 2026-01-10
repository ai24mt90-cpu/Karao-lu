"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Home, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function FloatingHomeButton() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Don't show on homepage
    if (pathname === "/") return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
                >
                    {/* Scroll to Top */}
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="w-12 h-12 bg-white text-primary rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
                        aria-label="Yukarı Git"
                    >
                        <ArrowUp size={20} />
                    </button>

                    {/* Go to Home */}
                    <Link
                        href="/"
                        className="w-12 h-12 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-dark transition-colors"
                        aria-label="Ana Sayfa"
                    >
                        <Home size={20} />
                    </Link>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
