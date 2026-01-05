"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Heart, Target, ChevronDown, Users } from "lucide-react";

/**
 * ABOUT US PAGE
 * - Interactive Management Board
 * - Vision/Mission (already added to home, but reinforcing values here)
 * - Timeline
 */

const stats = [
    { label: "Yıllık Tecrübe", value: "30+" },
    { label: "Tamamlanan Proje", value: "150+" },
    { label: "m² İnşaat Alanı", value: "10M+" },
    { label: "Uzman Personel", value: "2K+" },
];

const timeline = [
    { year: "1993", title: "Kuruluş", description: "İstanbul'da, üç mühendis arkadaşın vizyonuyla küçük bir ofiste temellerimiz atıldı. İlk yıllarda konut projelerine odaklandık.", icon: "🏢" },
    { year: "2005", title: "İlk Kamu Projesi", description: "Sektördeki güvenilirliğimiz, Ankara Devlet Hastanesi inşası ile taçlandı. Kamu projelerindeki başarımız bu noktadan sonra ivme kazandı.", icon: "🏥" },
    { year: "2015", title: "Uluslararası Açılım", description: "Sınırlarımızı aştık. Balkanlar ve Orta Asya'da köprü, otoyol ve altyapı projeleri üstlenerek global bir marka olma yolunda ilerledik.", icon: "🌍" },
    { year: "2023", title: "Sürdürülebilirlik Ödülü", description: "Yeşil bina sertifikalı projelerimizle 'Yılın En Çevreci İnşaat Firması' ödülüne layık görüldük. Karbon ayak izimizi %40 azalttık.", icon: "🌱" },
];

const values = [
    { icon: <ShieldCheck size={40} className="text-white" />, title: "Güven ve Şeffaflık", description: "Her projemizde taahhütlerimize sadık kalıyor, iş süreçlerimizi açık ve denetlenebilir bir şekilde yönetiyoruz." },
    { icon: <Target size={40} className="text-white" />, title: "Mühendislik Mükemmelliği", description: "En son teknolojileri ve mühendislik çözümlerini kullanarak, dayanıklı ve estetik yapılar inşa ediyoruz." },
    { icon: <Heart size={40} className="text-white" />, title: "Toplumsal Sorumluluk", description: "Kazancımızı toplumla paylaşıyor, eğitim ve çevre projelerine yatırım yaparak geleceğe katkı sağlıyoruz." },
];

const chairman = { name: "Ahmet Yılmaz", role: "Yönetim Kurulu Başkanı", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZeF24-W91AnFo15aNiqsJQoRYdM2pLioRNKkg9MbXzYVzbi2tCU_kcDpVJph2EFFNaGZVojgBPzu40o-amTmC8MVZSU4MQJ3r4LTbKmM7HjVjGkx9PXpq-USiwSpka__95rUPuVhZv1ViXkn_XUip9Ns1KIuhtZ7hvqMPK0NS2xCSP-__46kgfKnwPg7ryYPScghq-Fhna8UrAOqolKanrm_5Z6Haa8AfNleP_10xSdg1UdyIAVoJGK5raWGRN1OHC_f3kyXDKw4E" };

const boardMembers = [
    { name: "Elif Demir", role: "Genel Müdür", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU9b7gelCCeExrokAFjFuYYYkTJnm6gQJ-GRQAaTngd1MAAk_H7KKOEz-HByv5q51aSWDJGzBsQ1MdDDyTozxXLIz0ZPgYaCOHHM-5d70AoA5LwkuPU9NyeIeTcMZYNNBuBNADn56OpeRHeKVUTiSLxRt93EXYujMn7HXurPh7KpMJbCitc-MsaiHJKuoNL47iPh6XybfCidBJnUjmuSzQAODWuJBMmn05wlFlvDuXcuw88Hnlfol1XdDsij1vCvA_-OGNghkrnm-7" },
    { name: "Caner Öztürk", role: "Baş Mimar", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhyu3E8yqnMBBL7-_sYwOBZcySWLQsMB4ghF9MJO0Zj0jvEVd4mk-Qw2dndI2jvg5maZk0wLu30_sPEU-Z0V2YwUZtwxJ5UlASEfbZkdMeeHMcEh_4mbcmULBQe34uI2dHctflrkdMdEKStnvwiHlCN27Em4RclZE8Q_7yB_Nq0mPuhIPu9FkVEIPHai5YlPRVdS29eEwrCAiC0rxiunAxeLheOSsHCqxVw-oC4kOYglVHQ5d2L1SeMNYvDxNuYsul9MADavSNV0Ly" },
    { name: "Zeynep Kaya", role: "Finans Direktörü", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwFyCSk8WKuPy0E6hMTxS-dSqG5jGCHbDlo8hbl-50IBzmAWwxstGmbq7p7mT-RWxaWhhV7MopOOcdXXHDW5Pfx69wW7yI-9Qeptrs51nRlNrseieb0fuzDLZvsOCtSElJYtJ-Ckn4PN4qidz_6zoGpAz9JO18ZdLKFtTJpzSYAYglU5szLXS9Yh4VhQQqrkT-Z7ICOayGUIwXbjvacMmS0AZ-ySaVt6HmFrLYS2y47KWXyNu2PGLd8hMXiiuH8pPU9JkneAXx4aN9" },
];

export default function AboutPage() {
    const [isBoardOpen, setIsBoardOpen] = useState(false);

    return (
        <div className="flex flex-col bg-white">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-32 border-b border-white/5">
                <div className="layout-container">
                    <div className="flex flex-col items-center text-center gap-12">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full"
                        >
                            <Users size={14} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Kurumsal Bilgi</span>
                        </motion.div>
                        <h1 className="text-5xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                            Temellerimiz <br /> <span className="text-white/40">Geleceğimiz</span>
                        </h1>
                        <p className="max-w-3xl text-sm md:text-lg text-text-secondary uppercase tracking-[0.4em] leading-loose font-medium">
                            1993'ten beri mühendislik disiplini ve toplumsal fayda odaklı yapılar inşa ediyoruz.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro & Stats */}
            <section className="py-40">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="flex flex-col gap-10">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">İnşa Etmekten <br /><span className="text-white/40">Daha Fazlası</span></h2>
                            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary leading-loose font-medium">
                                Karaoğlu Universal Mühendislik olarak, sadece beton ve demiri bir araya getirmiyoruz; yaşam alanları ve toplumsal fayda üreten projelerle geleceği şekillendiriyoruz. 30 yılı aşkın süredir kamu projelerinde güvenin simgesi olduk.
                            </p>
                            <p className="text-xs uppercase tracking-[0.3em] text-text-secondary leading-loose font-medium opacity-60">
                                Her projemizde çevreye duyarlı, sürdürülebilir ve insan odaklı çözümler üretiyoruz. Bizim için her yapı evrensel bir mühendislik eseridir.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={stat.label} className="flex flex-col gap-4 p-12 border border-white/5 bg-white/[0.02]">
                                    <span className="text-5xl font-black tracking-tighter ">{stat.value}</span>
                                    <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.4em]">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Management Board */}
            <section className="py-40 border-y border-white/5 bg-white/[0.01]">
                <div className="layout-container">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">Yönetim Kurulu</h2>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-text-secondary">Vizyonumuzun Mimarları</p>
                    </div>

                    <div className="flex flex-col items-center gap-16">
                        {/* President */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="w-full max-w-sm"
                        >
                            <div className="relative aspect-[3/4] overflow-hidden grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700">
                                <Image src={chairman.image} alt={chairman.name} fill className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                            </div>
                            <div className="mt-8 text-center">
                                <h3 className="text-2xl font-black uppercase tracking-tighter">{chairman.name}</h3>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mt-2">{chairman.role}</p>
                            </div>
                        </motion.div>

                        {/* Toggle Button */}
                        <button
                            onClick={() => setIsBoardOpen(!isBoardOpen)}
                            className="flex flex-col items-center gap-4 group"
                        >
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white group-hover:text-primary/60 transition-colors">
                                {isBoardOpen ? "Kurulu Gizle" : "Diğer Üyeleri Gör"}
                            </span>
                            <motion.div
                                animate={{ rotate: isBoardOpen ? 180 : 0 }}
                                className="size-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-all"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </button>

                        {/* Other Members */}
                        <AnimatePresence>
                            {isBoardOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full pt-16"
                                >
                                    {boardMembers.map((m, idx) => (
                                        <motion.div
                                            key={m.name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex flex-col gap-6"
                                        >
                                            <div className="relative aspect-[3/4] overflow-hidden grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-700">
                                                <Image src={m.image} alt={m.name} fill className="object-cover" />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="text-xl font-black uppercase tracking-tighter">{m.name}</h3>
                                                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/40 mt-2">{m.role}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-40 border-b border-white/5">
                <div className="layout-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {values.map((v, idx) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex flex-col gap-8 p-12 bg-white/[0.01] border border-white/5"
                            >
                                <div className="opacity-40">{v.icon}</div>
                                <h3 className="text-xl font-black uppercase tracking-widest">{v.title}</h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-text-secondary leading-loose font-medium">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History Timeline */}
            <section className="py-40">
                <div className="layout-container max-w-4xl">
                    <h2 className="text-4xl md:text-7xl font-black text-center mb-32 tracking-tighter uppercase">Tarihçemiz</h2>
                    <div className="relative border-l border-white/10 ml-8 md:ml-0 md:mx-auto">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-24 ml-12 relative"
                            >
                                <div className="absolute -left-[61px] top-0 flex size-12 items-center justify-center rounded-none bg-white border border-white/20 text-xl font-black">
                                    {item.year.slice(-2)}
                                </div>
                                <div className="flex flex-col gap-4">
                                    <span className="text-white font-black text-2xl uppercase tracking-tighter">{item.year} — {item.title}</span>
                                    <p className="text-text-secondary text-[11px] uppercase tracking-widest leading-loose font-medium max-w-2xl">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
