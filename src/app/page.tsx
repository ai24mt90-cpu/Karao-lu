"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, School, BookOpen, ArrowRight, HardHat, ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Work {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description?: string;
}

interface FeaturedProject {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  status: string;
  image_url?: string;
  description?: string;
}

// Hero Slider Data - Kurumsal / Kamu Odaklı
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000",
    title: "Kamu Kurumları İçin Mühendislik Çözümleri",
    subtitle: "4734 sayılı Kamu İhale Kanunu'na uygun altyapı, üstyapı ve teknik taahhüt hizmetleri",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    title: "64+ Tamamlanan Kamu Projesi",
    subtitle: "Valilik, belediye, hastane ve eğitim kurumları için referanslarımız",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
    title: "Teknik Yeterlilik ve Deneyim",
    subtitle: "2014'ten bu yana Van ve çevresinde ihaleden teslime kadar tam yetkinlik",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [recentWorks, setRecentWorks] = useState<Work[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);
  const [heroImages, setHeroImages] = useState<{ image: string, title: string, subtitle: string }[]>(heroSlides);
  const [projectCount, setProjectCount] = useState(64);

  // Fetch featured projects from Supabase
  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .not("image_url", "is", null)
        .order("created_at", { ascending: false })
        .limit(5);

      if (!error && data && data.length > 0) {
        setFeaturedProjects(data);
        // Create dynamic hero slides from projects with images
        const dynamicSlides = data.map((project, index) => ({
          image: project.image_url!,
          title: index === 0 ? "Van'ın Güvenilir Mühendislik Ortağı" : project.title,
          subtitle: index === 0
            ? "2014'ten bu yana Van ve çevresinde altyapı, üstyapı ve kamu projelerinde kaliteli hizmet"
            : project.description || `${project.location} - ${project.year}`,
        }));
        setHeroImages(dynamicSlides);
      }
    };
    fetchFeaturedProjects();
  }, []);

  // Fetch works from Supabase
  useEffect(() => {
    const fetchWorks = async () => {
      const { data, error } = await supabase
        .from("works")
        .select("*")
        .order("order_index", { ascending: true })
        .limit(6);

      if (!error && data) {
        setRecentWorks(data);
      }
    };
    fetchWorks();
  }, []);

  // Fetch total project count
  useEffect(() => {
    const fetchProjectCount = async () => {
      const { count } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });

      if (count) {
        setProjectCount(count);
      }
    };
    fetchProjectCount();
  }, []);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);


  return (
    <div className="flex flex-col bg-background">
      {/* Hero Slider - Turkerler Style */}
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
              src={heroImages[currentSlide]?.image || heroSlides[0].image}
              alt={heroImages[currentSlide]?.title || heroSlides[0].title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40" />
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
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                  {heroImages[currentSlide]?.title || heroSlides[0].title}
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  {heroImages[currentSlide]?.subtitle || heroSlides[0].subtitle}
                </p>
                <Link
                  href="/projeler"
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
          <button onClick={prevSlide} className="p-2 bg-white/20 hover:bg-white/40 text-white transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {heroImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? "bg-white" : "bg-white/40"
                  }`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 bg-white/20 hover:bg-white/40 text-white transition-colors">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Project Names on Right Side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-2">
          {heroImages.map((slide, idx) => (
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

      {/* Kurumsal Yetkinlik Section */}
      <section className="py-20 bg-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Neden Biz?</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">KAMU İHALELERİNDE<br />GÜVENİLİR ÇÖZÜM ORTAĞI</h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                <strong>2014</strong> yılından bu yana kamu kurumlarına altyapı, üstyapı ve mühendislik hizmeti sunuyoruz.
                4734 sayılı Kamu İhale Kanunu&apos;na uygun iş yapış biçimimiz ve teknik yeterliliklerimiz ile
                Valilik, belediye, hastane ve eğitim kurumları için <strong>64+ proje</strong> tamamladık.
              </p>

              {/* Yetkinlik Badges */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">64+</p>
                  <p className="text-sm text-text-secondary">Tamamlanan Kamu Projesi</p>
                </div>
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm text-text-secondary">Yıllık Sektör Deneyimi</p>
                </div>
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">6+</p>
                  <p className="text-sm text-text-secondary">İl Genelinde Proje</p>
                </div>
                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                  <p className="text-2xl font-bold text-primary">%100</p>
                  <p className="text-sm text-text-secondary">Zamanında Teslim</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projeler"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
                >
                  Tamamlanan Projeler <ArrowRight size={18} />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 font-semibold hover:bg-primary hover:text-white transition-colors"
                >
                  Teknik Yeterlilikler
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              {/* Hizmet Alanları */}
              <div className="bg-primary text-white p-6">
                <h4 className="font-bold text-lg mb-4">HİZMET ALANLARIMIZ</h4>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Kamu Binaları (Hastane, Okul, İdari Bina)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Altyapı (Kanalizasyon, Yol, Köprü)
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    TOKİ ve Toplu Konut Projeleri
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Elektrik ve Enerji Hatları
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full" />
                    Çevre Düzenleme ve Peyzaj
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Kurumsal Slogan */}
      <section className="py-16 bg-primary">
        <div className="layout-container text-center">
          <p className="text-xl md:text-3xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
            &quot;Kamu projelerinde güvenilirlik, teknik yeterlilik ve zamanında teslim garantisi.&quot;
          </p>
          <p className="text-white/70 mt-4">— Karaoğlu Universal Mühendislik</p>
        </div>
      </section>


      {/* Projects Section - Kurumsal Referans Kartları */}
      <section className="py-20 bg-white">
        <div className="layout-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Kamu Referansları</h2>
              <h3 className="text-4xl font-bold text-foreground">TAMAMLANAN PROJELER</h3>
            </div>
            <div className="hidden md:flex gap-4">
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
              >
                Tüm Projeler <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Kurumsal Proje Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.slice(0, 6).map((project) => (
              <div key={project.id} className="bg-surface-secondary border-l-4 border-primary p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <span className={`text-xs font-bold px-3 py-1 rounded ${project.status === 'Tamamlandı'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                    }`}>
                    {project.status}
                  </span>
                  <span className="text-sm font-bold text-primary">{project.year}</span>
                </div>
                <h4 className="font-bold text-foreground text-lg mb-2 line-clamp-2">{project.title}</h4>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Fallback - DB'de proje yoksa */}
          {featuredProjects.length === 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { kurum: "VAN YATIRIM İZLEME VE KOORDİNASYON BAŞKANLIĞI", is: "VAN BEDESTEN ÇARŞISI VE ÇEVRE DÜZENLEME", yil: "2024", durum: "Tamamlandı", lokasyon: "VAN" },
                { kurum: "T.C. ÇEVRE VE ŞEHİRCİLİK BAKANLIĞI TOKİ", is: "ÇATAK 89 ADET KONUT İNŞAATI VE ALTYAPI", yil: "2022", durum: "Tamamlandı", lokasyon: "VAN" },
                { kurum: "İPEKYOLU BELEDİYESİ", is: "SAHİL BANDI 1. ETAP YAPIM", yil: "2022", durum: "Tamamlandı", lokasyon: "VAN" },
              ].map((project, idx) => (
                <div key={idx} className="bg-surface-secondary border-l-4 border-primary p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded ${project.durum === 'Tamamlandı'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                      }`}>
                      {project.durum}
                    </span>
                    <span className="text-sm font-bold text-primary">{project.yil}</span>
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-2 line-clamp-2">{project.kurum}</h4>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">{project.is}</p>
                  <div className="flex items-center gap-2 text-xs text-text-secondary">
                    <MapPin size={14} />
                    <span>{project.lokasyon}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-8 md:hidden">
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold"
            >
              Tüm Projeleri Gör <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="layout-container text-center">
          <h2 className="text-4xl font-bold text-white mb-6">İLETİŞİM</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Projeleriniz için bizimle iletişime geçin. Uzman kadromuz size yardımcı olmaktan memnuniyet duyar.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
          >
            Bize Ulaşın <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
