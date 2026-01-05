"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, School, BookOpen, ArrowRight, HardHat, Construction } from "lucide-react";
import Logo from "@/components/Logo";

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
    title: "Hayırseverlik Yatırımları",
    description: "Toplum merkezleri, burslar ve sosyal yardımlarla geleceğe yatırım yapıyor, fırsat eşitliği yaratıyoruz.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1280",
    link: "/hayirseverlik",
    icon: <BookOpen size={24} />
  }
];

const recentWorks = [
  {
    category: "Sağlık",
    title: "Merkez Hastanesi Projesi",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Q8994vL6Z-dsApRROUsa9Bxq9xfoBViyhxHG2Il0tGcHB7vrwkjfY0eMUNiCRS57lK1H9ldJST06gtEgoa6PXPxWaxMzk6C2DLFjur6J-odHFJLRZB8MIJmBsVRp-f2roPrhBCImiRXRkG7FVtSw1GjKcdvw_99icL2xUowq2tztgokb1PEPGp43ZLyG3V0hUR_m291H52ALbcqrMVjKk9rDKrM0enPdidNyl6DAfRCFz56zSewnWLEQX751073y8kfTXXVSMao7"
  },
  {
    category: "Eğitim",
    title: "Anadolu Lisesi Bağışı",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcyhifZbpSgvyiXW09ZLaG6ZTAfuwGut1eaAfWhMtwXsI2AkjddTNbSRCxvQ9GaC1ywJJLuv5mwBvjg-OdEu7q3Pn8Ssox_vRbe4kiKFVyhJj96RS_Kv9ab3CiWLum_1ur5cg8UNkA2Ka0luYWkS5f7BoDPwN-GPoGBTDR5I2nA91WObLOK7QlA8bWmk4BkO4TxoNdA4hbN6hHnm3GVCMhUCqt9UfsXR60-s8U1WzoaTU6DywtagjJYmeutuJtBxwf1y1GS4OKB2Y"
  },
  {
    category: "Altyapı",
    title: "Şehir Köprüsü Yapımı",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFPkVqupZRKxhC7a3pFgxUMDsMBXcQ_z4gHTpe6pRHCQJ5PJel7cK08uSHVFDjqkHMXLPOew-c4sp-10sCHTgZA2tw9T_ytFNd_WSz5cr4DOFIzem7Kk337500hrNsqNFVr4akDQpOWay-Nz3xpywIrLSvLRyqRLl-ruZnfC7B2FIOMkLWYrHz7NDK22466r1DQpFaLatVEpHC96C7d1YVff1yIrvrjHN9zZPnX4FWr-atXuRF5KB880dui7clKqEF6_Kono2iPTiJ"
  }
];

export default function Home() {
  return (
    <div className="flex flex-col bg-black">
      {/* Hero Section */}
      <section className="relative w-full py-10">
        <div className="layout-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative h-[750px] w-full overflow-hidden rounded-none border border-white/10"
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
              alt="Skyscraper architectural photo"
              fill
              className="object-cover grayscale brightness-[0.2]"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <Logo size={120} className="text-white" />
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-5xl font-black md:text-7xl lg:text-9xl leading-none uppercase tracking-tighter"
              >
                İnşa Edin. <br />
                <span className="text-white/40">Mükemmele Ulaşın.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="max-w-2xl text-lg text-text-secondary md:text-xl uppercase tracking-[0.4em] font-medium"
              >
                Karaoğlu Universal Mühendislik
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-16 flex flex-wrap justify-center gap-8"
              >
                <Link href="/projeler" className="flex h-16 items-center justify-center bg-white px-12 text-xs font-black uppercase tracking-[0.3em] text-black transition-all hover:bg-white/80 active:scale-95">
                  Projelerimiz
                </Link>
                <Link href="/hakkimizda" className="flex h-16 items-center justify-center border border-white/20 bg-white/5 px-12 text-xs font-black uppercase tracking-[0.3em] text-white backdrop-blur-sm transition-all hover:bg-white/10">
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

      {/* Pillars Section */}
      <section className="py-40">
        <div className="layout-container">
          <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">Faaliyet <br /> Alanlarımız</h2>
              <p className="text-sm uppercase tracking-[0.4em] text-text-secondary leading-loose font-medium">
                Mühendislik ve Hayırseverlikte Evrensel Standartlar.
              </p>
            </div>
            <Link href="/hakkimizda" className="flex items-center gap-3 text-white font-black uppercase tracking-[0.3em] text-[10px] border-b-2 border-white pb-2 transition-transform hover:translate-x-2">
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
                className="group relative flex flex-col bg-surface border border-white/5"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale brightness-50 group-hover:brightness-75"
                  />
                  <div className="absolute top-10 left-10 flex size-16 items-center justify-center bg-white text-black text-2xl">
                    {pillar.icon}
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="text-4xl font-black mb-6 uppercase tracking-tighter">{pillar.title}</h3>
                  <p className="text-text-secondary mb-10 leading-relaxed text-sm uppercase tracking-widest font-medium">{pillar.description}</p>
                  <Link href={pillar.link} className="inline-flex items-center justify-center h-14 bg-white/5 border border-white/20 px-10 text-[10px] font-black uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all">
                    İncele
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Works */}
      <section className="py-40 bg-white/[0.02] border-t border-white/5">
        <div className="layout-container">
          <div className="flex items-center gap-10 mb-20">
            <h2 className="text-5xl font-black tracking-tighter uppercase">Son Çalışmalarımız</h2>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {recentWorks.map((work, index) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[4/5] overflow-hidden bg-black cursor-pointer border border-white/5"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-30 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-12 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/40 mb-4 block group-hover:text-white transition-colors">{work.category}</span>
                  <h4 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight border-l-4 border-white pl-6">{work.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
