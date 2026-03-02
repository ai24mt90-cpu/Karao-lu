"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

// Hero Slider Data Keys
const heroSlidesKeys = [
    {
        image: "/tusba-kaymakamligi.svg",
        titleKey: "home.slider.title",
        subtitleKey: "home.slider.subtitle",
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop",
        titleKey: "home.slider.slide2_title",
        subtitleKey: "home.slider.slide2_subtitle",
    },
    {
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop",
        titleKey: "home.slider.slide3_title",
        subtitleKey: "home.slider.slide3_subtitle",
    },
];

interface HomeSliderProps {
    featuredProjects?: {
        image: string;
        title: string;
        subtitle: string;
    }[];
}

export default function HomeSlider({ featuredProjects = [] }: HomeSliderProps) {
    const { t } = useTranslation();
    const [currentSlide, setCurrentSlide] = useState(0);

    const translatedSlides = heroSlidesKeys.map(slide => ({
        image: slide.image,
        title: t(slide.titleKey, { defaultValue: slide.titleKey }),
        subtitle: t(slide.subtitleKey, { defaultValue: slide.subtitleKey })
    }));

    const [slides, setSlides] = useState(translatedSlides);

    // Update slides when translation changes or fetched projects arrive
    useEffect(() => {
        if (featuredProjects.length > 0) {
            const dynamicSlides = featuredProjects.map((project, index) => ({
                image: project.image,
                title: translatedSlides[index]?.title || project.title,
                subtitle: translatedSlides[index]?.subtitle || project.subtitle,
            }));
            setSlides(dynamicSlides);
        } else {
            setSlides(translatedSlides);
        }
    }, [featuredProjects, t]);

    // Auto-slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden bg-gray-900 group">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 ${index === currentSlide ? "block z-10" : "hidden z-0"}`}
                >
                    <div className="absolute inset-0">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className="object-cover"
                            priority={index === 0}
                            fetchPriority={index === 0 ? "high" : "auto"}
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/60" /> {/* Darkened for contrast */}
                    </div>

                    <div className="absolute inset-0 flex items-center">
                        <div className="layout-container">
                            <div className="max-w-2xl">
                                {index === 0 ? (
                                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-md">
                                        {slide.title}
                                    </h1>
                                ) : (
                                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-md">
                                        {slide.title}
                                    </h2>
                                )}
                                <p className="text-xl text-white/95 mb-8 drop-shadow-sm font-medium">
                                    {slide.subtitle}
                                </p>
                                <Link
                                    href="/projeler/kategori/tum-projeler"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark px-8 py-4 text-white font-semibold rounded-sm transition-colors"
                                >
                                    {t("home.slider.explore")} <ChevronRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <button
                    onClick={prevSlide}
                    aria-label={t("home.slider.prev_slide", "Önceki Slayt")}
                    className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={t("home.slider.slide_num", "Slayt {{num}}", { num: idx + 1 })}
                            className={`w-4 h-4 rounded-full transition-all flex items-center justify-center ${idx === currentSlide ? "bg-white ring-4 ring-white/30 scale-110" : "bg-white/40 hover:bg-white/60"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextSlide}
                    aria-label={t("home.slider.next_slide", "Sonraki Slayt")}
                    className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Project Names on Right Side (Desktop) */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2 z-20">
                {slides.map((slide, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`text-right px-4 py-2 text-sm transition-all rounded ${idx === currentSlide
                            ? "text-white bg-primary/90 font-semibold shadow-sm"
                            : "text-white/60 hover:text-white hover:bg-white/10"
                            }`}
                    >
                        {slide.title}
                    </button>
                ))}
            </div>
        </section>
    );
}
