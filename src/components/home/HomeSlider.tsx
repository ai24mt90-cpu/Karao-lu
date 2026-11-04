"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

type Slide = { image: string; title: string; subtitle: string; href?: string };

// Öne çıkan proje yoksa kullanılan yedek görseller
const fallbackSlides: Slide[] = [
    { image: "/tusba-kaymakamligi.svg", title: "", subtitle: "" },
    { image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop", title: "", subtitle: "" },
    { image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop", title: "", subtitle: "" },
];

interface HomeSliderProps {
    featuredProjects?: Slide[];
}

export default function HomeSlider({ featuredProjects = [] }: HomeSliderProps) {
    const { t } = useTranslation();
    const [current, setCurrent] = useState(0);

    const slides = featuredProjects.length > 0 ? featuredProjects.slice(0, 6) : fallbackSlides;
    const active = slides[current % slides.length];

    useEffect(() => {
        if (slides.length < 2) return;
        const timer = setInterval(() => setCurrent((prev) => (prev + 1) % slides.length), 6500);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative isolate w-full min-h-[640px] h-[calc(100svh-7.5rem)] max-h-[860px] overflow-hidden bg-navy-950 text-white">
            {/* Arka plan görselleri */}
            {slides.map((slide, index) => (
                <div
                    key={slide.image + index}
                    className={`absolute inset-0 transition-opacity duration-[1200ms] ${index === current ? "opacity-100" : "opacity-0"}`}
                    aria-hidden={index !== current}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title || t("home.hero.h1")}
                        fill
                        className={`object-cover ${index === current ? "hero-zoom" : ""}`}
                        priority={index === 0}
                        fetchPriority={index === 0 ? "high" : "auto"}
                        sizes="100vw"
                    />
                </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/20" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950/80 to-transparent" />

            <div className="relative h-full layout-container flex flex-col justify-center pb-36">
                <div className="max-w-3xl">
                    <p className="eyebrow eyebrow-light mb-6">{t("home.hero2.eyebrow")}</p>
                    <h1 className="font-display text-4xl sm:text-5xl lg:text-[64px] font-extrabold leading-[1.05] mb-6">
                        {t("home.hero2.title")}
                    </h1>
                    <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-10">
                        {t("home.hero2.desc")}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="/projeler/kategori/tum-projeler"
                            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-navy-950 px-7 py-4 font-semibold transition-colors"
                        >
                            {t("home.hero2.ctaProjects")} <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/iletisim"
                            className="inline-flex items-center gap-2 border border-white/40 hover:border-white hover:bg-white/10 px-7 py-4 font-semibold transition-colors"
                        >
                            {t("home.hero2.ctaContact")}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Öne çıkan proje etiketi + ilerleme çubukları */}
            {active.title && (
                <div className="hidden sm:block absolute inset-x-0 bottom-0">
                    <div className="layout-container pb-24 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                        <Link href={active.href || "/projeler/kategori/tum-projeler"} className="group max-w-xl">
                            <span className="text-[11px] uppercase tracking-[0.2em] text-gold-light">{t("home.hero2.featured")}</span>
                            <span className="mt-1 block font-display font-semibold text-white group-hover:text-gold-light transition-colors line-clamp-1">
                                {active.title}
                            </span>
                            <span className="mt-1 flex items-center gap-1.5 text-sm text-white/60">
                                <MapPin size={13} /> {active.subtitle}
                            </span>
                        </Link>
                        {slides.length > 1 && (
                            <div className="flex gap-2" role="tablist">
                                {slides.map((slide, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrent(idx)}
                                        role="tab"
                                        aria-selected={idx === current}
                                        aria-label={t("home.slider.slide_num", "Slayt {{num}}", { num: idx + 1 })}
                                        className="h-8 w-10 flex items-center"
                                    >
                                        <span className={`block h-[3px] w-full transition-colors ${idx === current ? "bg-gold" : "bg-white/30 hover:bg-white/60"}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}
