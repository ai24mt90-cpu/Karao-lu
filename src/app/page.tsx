"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, School, BookOpen, ArrowRight, HardHat, Construction } from "lucide-react";
import Logo from "@/components/Logo";
import { supabase } from "@/lib/supabase";

interface Work {
  id: string;
  title: string;
  category: string;
  image_url: string;
}

const stats = [
  { icon: <Building2 className="text-white" />, label: "Tamamlanan Proje", value: "150+" },
  { icon: <HardHat className="text-white" />, label: "İstihdam", value: "2500+" },
  { icon: <School className="text-white" />, label: "Bağışlanan Okul", value: "12" },
  { icon: <BookOpen className="text-white" />, label: "Eğitim Bursu", value: "500+" },
];

const pillars = [
  {
    title: "Kamu Projeleri",
    description: "Yollar, hastaneler ve kamu binaları ile altyapıyı güçlendiriyor, şehirlerin yaşam kalitesini artırıyoruz.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1280",
    link: "/projeler",
    icon: <Construction size={24} />
  },
  {
    title: "Sosyal Sorumluluk",
    description: "Eğitim, spor ve toplumsal projelerle geleceğe yatırım yapıyor, toplumsal fayda sağlıyoruz.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1280",
    link: "/sosyal-sorumluluk",
    icon: <BookOpen size={24} />
  }
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
      {/* Hero Section */}
      <section className="relative w-full py-10">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[750px] w-full overflow-hidden rounded-xl shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=2000"
              alt="Modern architecture"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <Logo size={120} className="text-foreground drop-shadow-2xl" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-5xl font-black md:text-7xl lg:text-9xl leading-none uppercase tracking-tighter text-white"
              >
                İnşa Edin. <br />
                <span className="text-white/90">Çözüm Üretin.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-2xl text-lg text-white/90 md:text-xl uppercase tracking-[0.4em] font-medium"
              >
                Karaoğlu Universal Mühendislik
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16 flex flex-wrap justify-center gap-8"
              >
                <Link href="/projeler" className="flex h-16 items-center justify-center bg-white px-12 text-xs font-black uppercase tracking-[0.3em] text-primary transition-all hover:bg-white/90 active:scale-95 shadow-2xl">
                  Projelerimiz
                </Link>
                <Link href="/hakkimizda" className="flex h-16 items-center justify-center border-2 border-white bg-white/10 px-12 text-xs font-black uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:bg-white/20">
                  Kurumsal
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-b border-white/5">
        <div className="layout-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col gap-6 text-center"
              >
                <div className="mx-auto text-4xl opacity-30">{stat.icon}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.4em] text-text-secondary">{stat.label}</div>
                <div className="text-6xl font-black tracking-tighter">{stat.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-40 bg-white/[0.01]">
        <div className="layout-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.5em] text-primary">Vizyonumuz</h3>
              <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                Mühendislikte <br /> <span className="text-primary">Evrensel Bir İz</span> Bırakmak.
              </p>
              <p className="text-text-secondary text-sm uppercase tracking-widest leading-loose font-medium max-w-lg">
                Geleceğin şehirlerini inşa ederken, mühendislik çözümlerimizi global standartların üzerine taşıyarak dünya çapında referans alınan bir marka olmayı hedefliyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <h3 className="text-sm font-black uppercase tracking-[0.5em] text-primary">Misyonumuz</h3>
              <p className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">
                Topluma <br /> <span className="text-primary">Değer Katan</span> Yapılar.
              </p>
              <p className="text-text-secondary text-sm uppercase tracking-widest leading-loose font-medium max-w-lg">
                Sadece binalar değil, yaşam alanları ve toplumsal fayda üreten projeler geliştiriyoruz. Her bir tuğlada güveni, estetiği ve sürdürülebilirliği merkeze alıyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-40">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">Faaliyet <br /> Alanlarımız</h2>
              <p className="text-sm uppercase tracking-[0.4em] text-text-secondary leading-loose font-medium">
                Mühendislik ve Sosyal Sorumlulukta Evrensel Standartlar.
              </p>
            </div>
            <Link href="/hakkimizda" className="flex items-center gap-3 text-foreground font-black uppercase tracking-[0.3em] text-[10px] border-b-2 border-white pb-2 transition-transform hover:translate-x-2">
              Detaylar <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative flex flex-col bg-surface border border-border-brand shadow-md"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale brightness-50 group-hover:brightness-75"
                  />
                  <div className="absolute top-10 left-10 flex size-16 items-center justify-center bg-primary text-foreground text-2xl">
                    {pillar.icon}
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">{pillar.title}</h3>
                  <p className="text-text-secondary mb-10 leading-relaxed text-sm uppercase tracking-widest font-medium">{pillar.description}</p>
                  <Link href={pillar.link} className="inline-flex items-center justify-center h-14 bg-white/5 border border-white/20 px-10 text-[10px] font-black uppercase tracking-[0.3em] text-foreground hover:bg-white hover:text-black transition-all">
                    İncele
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="py-40 bg-surface border-t border-border-brand">
        <div className="layout-container">
          <div className="flex items-center gap-10 mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Son Çalışmalarımız</h2>
            <div className="h-[1px] flex-1 bg-border-brand" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {recentWorks.map((work) => (
              <div
                key={work.title}
                className="group relative aspect-[4/5] overflow-hidden bg-surface cursor-pointer border border-border-brand shadow-lg hover:shadow-xl transition-shadow"
              >
                <Image
                  src={work.image_url || "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"}
                  alt={work.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-12">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-4 block">{work.category}</span>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight border-l-4 border-primary pl-6">{work.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
