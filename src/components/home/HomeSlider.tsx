"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";

// Hero Slider Data
const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop",
        title: "Devlet yatırımlarını ciddiyetle inşa ediyoruz",
        subtitle: "Bölgenin Güçlü Altyapı ve Üstyapı Çözüm Ortağı",
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop",
        title: "64+ Tamamlanan Kamu Projesi",
        subtitle: "Ankara'dan Türkiye'ye; 10+ yıllık deneyim, güçlü makine parkı ve finansal yeterlilik",
    },
    {
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop",
        title: "Resmi Kurumların Çözüm Ortağı",
        subtitle: "İpekyolu Sahil Bandı'ndan TOKİ Konutlarına kadar imzamız var",
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
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState(heroSlides);

    useEffect(() => {
        if (featuredProjects.length > 0) {
            const dynamicSlides = featuredProjects.map((project, index) => ({
                image: project.image,
                title: heroSlides[index]?.title || project.title,
                subtitle: heroSlides[index]?.subtitle || project.subtitle,
            }));
            setSlides(dynamicSlides);
        }
    }, [featuredProjects]);

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
        <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden bg-black group">
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
                                    Projelerimiz <ChevronRight size={20} />
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
                    aria-label="Önceki Slayt"
                    className="p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-colors backdrop-blur-sm"
                >
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Slayt ${idx + 1}`}
                            className={`w-4 h-4 rounded-full transition-all flex items-center justify-center ${idx === currentSlide ? "bg-white ring-4 ring-white/30 scale-110" : "bg-white/40 hover:bg-white/60"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={nextSlide}
                    aria-label="Sonraki Slayt"
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
