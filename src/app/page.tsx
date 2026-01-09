"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, School, BookOpen, ArrowRight, HardHat, ChevronRight, ChevronLeft } from "lucide-react";
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

// Hero Slider Data
const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000",
    title: "Kamu Projeleri",
    subtitle: "Altyapı ve üstyapı projelerimizle şehirleri dönüştürüyoruz",
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
    title: "Konut Projeleri",
    subtitle: "Modern ve güvenli yaşam alanları inşa ediyoruz",
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000",
    title: "Altyapı Yatırımları",
    subtitle: "Sürdürülebilir altyapı çözümleri sunuyoruz",
  },
];

const stats = [
  { label: "Tamamlanan Proje", value: "150+" },
  { label: "Yıllık Deneyim", value: "10+" },
  { label: "Çalışan Sayısı", value: "2500+" },
  { label: "İl Genelinde Proje", value: "15+" },
];

const sectors = [
  {
    title: "Kamu Projeleri",
    description: "Hastaneler, okullar ve kamu binaları",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600",
    link: "/projeler?category=kamu",
  },
  {
    title: "Konut",
    description: "Modern konut projeleri",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
    link: "/projeler?category=konut",
  },
  {
    title: "Altyapı",
    description: "Yol, köprü ve altyapı işleri",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600",
    link: "/projeler?category=altyapi",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [recentWorks, setRecentWorks] = useState<Work[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<FeaturedProject[]>([]);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
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

  // Fetch featured projects from Supabase
  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("is_featured", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (!error && data) {
        setFeaturedProjects(data);
      }
    };
    fetchFeaturedProjects();
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

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
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].title}
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
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl text-white/80 mb-8">
                  {heroSlides[currentSlide].subtitle}
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
            {heroSlides.map((_, idx) => (
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
          {heroSlides.map((slide, idx) => (
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

      {/* Hayallerimiz Hedefimizdir Section */}
      <section className="py-20 bg-white">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Hakkımızda</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-6">HAYALLERİMİZ<br />HEDEFİMİZDİR</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Karaoğlu Universal Mühendislik faaliyetleri 2014 yılında Van'da başladı.
                Özellikle inşaat sektöründeki yatırımlarla giderek artan bir ivme yakalayan firmamız,
                bugün bölgede önemli bir mühendislik firması haline geldi.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold hover:bg-primary-dark transition-colors"
              >
                Devamı <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative h-[400px] rounded overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
                alt="Mühendislik"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inspiring Quote Section */}
      <section className="py-20 bg-primary">
        <div className="layout-container text-center">
          <p className="text-2xl md:text-4xl font-bold text-white leading-relaxed max-w-4xl mx-auto">
            "Bugünü İnşa Ediyor, Geleceğe Değer Katıyoruz."
          </p>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="layout-container">
          <div className="text-center mb-12">
            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Faaliyet Alanlarımız</h2>
            <h3 className="text-4xl font-bold text-foreground">SEKTÖRLER</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector) => (
              <Link
                key={sector.title}
                href={sector.link}
                className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                </div>
                <div className="p-5">
                  <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{sector.title}</h4>
                  <p className="text-text-secondary text-sm">{sector.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="layout-container">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Öne Çıkan Projeler</h2>
              <h3 className="text-4xl font-bold text-foreground">PROJELER</h3>
            </div>
            <Link
              href="/projeler"
              className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Tümünü Gör <ArrowRight size={18} />
            </Link>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.filter(p => p.image_url).map((project) => (
                <div key={project.id} className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image_url!}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs font-semibold px-3 py-1 ${project.status === "Tamamlandı" ? "bg-green-500" : "bg-yellow-500"} text-white`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
                    <p className="text-sm text-text-secondary mt-1">{project.location} • {project.year}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : recentWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentWorks.map((work) => (
                <div key={work.id} className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={work.image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{work.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Merkez Hastanesi", category: "Sağlık", image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=600" },
                { title: "Konut Projesi", category: "Konut", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600" },
                { title: "Yol Yapım İşi", category: "Altyapı", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600" },
              ].map((project) => (
                <div key={project.title} className="group bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-surface-secondary">
        <div className="layout-container">
          <div className="text-center mb-12">
            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Güncel</h2>
            <h3 className="text-4xl font-bold text-foreground">HABERLER</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Yeni Proje Başladı", date: "06.01.2026", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600" },
              { title: "Sosyal Sorumluluk Projemiz", date: "05.01.2026", image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600" },
              { title: "Kalite Belgelerimiz Yenilendi", date: "04.01.2026", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600" },
            ].map((news) => (
              <div key={news.title} className="group bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <p className="text-text-secondary text-xs mb-2">{news.date}</p>
                  <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">{news.title}</h4>
                </div>
              </div>
            ))}
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
