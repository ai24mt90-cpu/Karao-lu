import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight, ArrowLeft } from "lucide-react";

// ... (keep heroSlides array same) ...

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

    // ... (keep useEffects same) ...

    return (
        <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
            <LazyMotion features={domAnimation}>
                <AnimatePresence mode="wait">
                    <m.div
                        key={currentSlide}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={slides[currentSlide]?.image || heroSlides[0].image}
                            alt={slides[currentSlide]?.title || heroSlides[0].title}
                            fill
                            className="object-cover"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-black/60" />
                    </m.div>
                </AnimatePresence>

                {/* Slider Content */}
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <AnimatePresence mode="wait">
                            <m.div
                                key={currentSlide}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-2xl"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-md">
                                    {slides[currentSlide]?.title || heroSlides[0].title}
                                </h1>
                                <p className="text-xl text-white/95 mb-8 drop-shadow-sm font-medium">
                                    {slides[currentSlide]?.subtitle || heroSlides[0].subtitle}
                                </p>
                                <Link
                                    href="/projeler/kategori/tum-projeler"
                                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark px-8 py-4 text-white font-semibold transition-colors rounded-sm"
                                >
                                    Projelerimiz <ChevronRight size={20} />
                                </Link>
                            </m.div>
                        </AnimatePresence>
                    </div>
                </div>
            </LazyMotion>

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <button onClick={prevSlide} aria-label="Önceki Slayt" className="p-2 bg-white/20 hover:bg-white/40 text-white transition-colors rounded-full">
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Slayt ${idx + 1}`}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? "bg-white" : "bg-white/40"}`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} aria-label="Sonraki Slayt" className="p-2 bg-white/20 hover:bg-white/40 text-white transition-colors rounded-full">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* ... (rest optional) ... */}
        </section>
    );
}

// Hero Slider Data
const heroSlides = [
    {
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop",
        title: "Devlet Ciddiyetiyle İnşa Ediyoruz",
        subtitle: "Bölgenin Güçlü Altyapı ve Üstyapı Çözüm Ortağı",
    },
    {
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop",
        title: "64+ Tamamlanan Kamu Projesi",
        subtitle: "Van'dan Türkiye'ye; 10+ yıllık deneyim, güçlü makine parkı ve finansal yeterlilik",
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
        <section className="relative w-full h-[80vh] min-h-[500px] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[currentSlide]?.image || heroSlides[0].image}
                        alt={slides[currentSlide]?.title || heroSlides[0].title}
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-black/60" /> {/* Darkened for contrast */}
                </motion.div>
            </AnimatePresence>

            {/* Slider Content */}
            <div className="absolute inset-0 flex items-center">
                <div className="layout-container">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                            className="max-w-2xl"
                        >
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-md">
                                {slides[currentSlide]?.title || heroSlides[0].title}
                            </h1>
                            <p className="text-xl text-white/95 mb-8 drop-shadow-sm font-medium">
                                {slides[currentSlide]?.subtitle || heroSlides[0].subtitle}
                            </p>
                            <Link
                                href="/projeler/kategori/tum-projeler"
                                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark px-8 py-4 text-white font-semibold transition-colors"
                            >
                                Projelerimiz <ChevronRight size={20} />
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slider Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
                <button onClick={prevSlide} aria-label="Önceki Slayt" className="p-2 bg-white/20 hover:bg-white/40 text-white transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <div className="flex gap-2">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentSlide(idx)}
                            aria-label={`Slayt ${idx + 1}`}
                            className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? "bg-white" : "bg-white/40"
                                }`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide} aria-label="Sonraki Slayt" className="p-2 bg-white/20 hover:bg-white/40 text-white transition-colors">
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Project Names on Right Side */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
                {slides.map((slide, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`text-right px-4 py-2 text-sm transition-all ${idx === currentSlide
                            ? "text-white bg-primary font-semibold"
                            : "text-white/60 hover:text-white"
                            }`}
                    >
                        {slide.title}
                    </button>
                ))}
            </div>
        </section>
    );
}
