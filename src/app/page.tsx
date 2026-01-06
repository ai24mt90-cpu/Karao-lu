"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, School, BookOpen, ArrowRight, HardHat, Construction, ChevronRight } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface Work {
  id: string;
  title: string;
  category: string;
  image_url: string;
}

const stats = [
  { icon: <Building2 size={32} />, label: "Tamamlanan Proje", value: "150+" },
  { icon: <HardHat size={32} />, label: "İstihdam", value: "2500+" },
  { icon: <School size={32} />, label: "Bağışlanan Okul", value: "12" },
  { icon: <BookOpen size={32} />, label: "Eğitim Bursu", value: "500+" },
];

const sectors = [
  {
    title: "Kamu Projeleri",
    description: "Yollar, hastaneler ve kamu binaları ile altyapıyı güçlendiriyoruz.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    link: "/projeler",
  },
  {
    title: "Konut Projeleri",
    description: "Modern ve güvenli yaşam alanları inşa ediyoruz.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    link: "/projeler",
  },
  {
    title: "Sosyal Sorumluluk",
    description: "Eğitim ve spor yatırımlarıyla topluma değer katıyoruz.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800",
    link: "/hayirseverlik",
  },
];

export default function Home() {
  const [recentWorks, setRecentWorks] = useState<Work[]>([]);

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

  return (
    <div className="flex flex-col bg-background">
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[85vh] min-h-[600px]">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
          alt="İnşaat Projesi"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="layout-container">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Hayallerimiz <br />
                <span className="text-white/90">Hedefimizdir</span>
              </h1>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Karaoğlu Universal Mühendislik olarak, mükemmellik ve toplumsal fayda odaklı projeler üretiyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/projeler"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark px-8 py-4 text-white font-semibold transition-colors"
                >
                  Projelerimiz <ChevronRight size={20} />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 px-8 py-4 text-white font-semibold transition-colors"
                >
                  Hakkımızda
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary">
        <div className="layout-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center text-white"
              >
                <div className="mb-4 text-white/60">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-surface-secondary">
        <div className="layout-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Hakkımızda</h2>
              <h3 className="text-4xl font-bold text-foreground mb-6">2014'ten Beri Güven İnşa Ediyoruz</h3>
              <p className="text-text-secondary leading-relaxed mb-8">
                Karaoğlu Universal Mühendislik, mühendislikte mükemmellik ve toplumsal sorumluluk ilkeleriyle hareket eden,
                Van merkezli bir inşaat ve mühendislik firmasıdır. Kamu projeleri, konut projeleri ve sosyal sorumluluk
                alanlarında fark yaratan işler ortaya koyuyoruz.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Daha Fazla Bilgi <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
                alt="Mühendislik Ekibi"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="py-24">
        <div className="layout-container">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Faaliyet Alanlarımız</h2>
            <h3 className="text-4xl font-bold text-foreground">Sektörler</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <motion.div
                key={sector.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-foreground mb-3">{sector.title}</h4>
                  <p className="text-text-secondary text-sm mb-4">{sector.description}</p>
                  <Link
                    href={sector.link}
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                  >
                    İncele <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works */}
      {recentWorks.length > 0 && (
        <section className="py-24 bg-surface-secondary">
          <div className="layout-container">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Son Projeler</h2>
                <h3 className="text-4xl font-bold text-foreground">Çalışmalarımız</h3>
              </div>
              <Link
                href="/projeler"
                className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Tümünü Gör <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentWorks.map((work) => (
                <motion.div
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={work.image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"}
                      alt={work.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded">
                        {work.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {work.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link
                href="/projeler"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 font-semibold"
              >
                Tümünü Gör <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="layout-container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Projeniz için Bizimle İletişime Geçin</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            Mühendislik projeleriniz için profesyonel destek almak ister misiniz? Uzman ekibimizle tanışın.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
          >
            İletişime Geç <ChevronRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
