"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, School, BookOpen, GraduationCap, Users, HandHelping } from "lucide-react";

const impactMetrics = [
    { icon: <School size={28} />, value: "12", label: "Bağışlanan Okul", description: "Türkiye genelinde inşa edilen modern eğitim tesisleri." },
    { icon: <GraduationCap size={28} />, value: "500+", label: "Aktif Burs", description: "Üniversite öğrencilerine sağlanan aylık eğitim desteği." },
    { icon: <Users size={28} />, value: "10K+", label: "Ulaşılan Genç", description: "Eğitim seminerleri ve sosyal projelerle dokunulan hayatlar." }
];

const charityProjects = [
    {
        title: "Anadolu Lisesi Bağışı",
        location: "Sivas",
        description: "24 derslikli, spor salonu ve laboratuvarları tam donanımlı okul projemiz 2022 yılında eğitime açıldı.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbcyhifZbpSgvyiXW09ZLaG6ZTAfuwGut1eaAfWhMtwXsI2AkjddTNbSRCxvQ9GaC1ywJJLuv5mwBvjg-OdEu7q3Pn8Ssox_vRbe4kiKFVyhJj96RS_Kv9ab3CiWLum_1ur5cg8UNkA2Ka0luYWkS5f7BoDPwN-GPoGBTDR5I2nA91WObLOK7QlA8bWmk4BkO4TxoNdA4hbN6hHnm3GVCMhUCqt9UfsXR60-s8U1WzoaTU6DywtagjJYmeutuJtBxwf1y1GS4OKB2Y"
    },
    {
        title: "Üniversite Öğrenci Yurdu",
        location: "Ankara",
        description: "300 yatak kapasiteli modern öğrenci yurdumuz, güvenli ve konforlu bir barınma alanı sunmaktadır.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9Q8994vL6Z-dsApRROUsa9Bxq9xfoBViyhxHG2Il0tGcHB7vrwkjfY0eMUNiCRS57lK1H9ldJST06gtEgoa6PXPxWaxMzk6C2DLFjur6J-odHFJLRZB8MIJmBsVRp-f2roPrhBCImiRXRkG7FVtSw1GjKcdvw_99icL2xUowq2tztgokb1PEPGp43ZLyG3V0hUR_m291H52ALbcqrMVjKk9rDKrM0enPdidNyl6DAfRCFz56zSewnWLEQX751073y8kfTXXVSMao7"
    }
];

export default function CharityPage() {
    return (
        <div className="flex flex-col py-20 bg-black">
            <div className="layout-container">
                {/* Header Section */}
                <section className="relative mb-32 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full mb-8"
                    >
                        <Heart size={14} className="text-white" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Toplumsal Sorumluluk</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">
                        Evrensel <br /> <span className="text-white/40">Gelecek</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg text-text-secondary uppercase tracking-widest leading-loose font-medium">
                        Karaoğlu Vakfı olarak, mühendislik gücümüzü yarınları inşa edecek olan çocuklarla ve gençlerle paylaşıyoruz.
                    </p>
                </section>

                {/* Impact Metrics */}
                <section className="mb-40">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
                        {impactMetrics.map((metric, idx) => (
                            <motion.div
                                key={metric.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex flex-col gap-6 p-12 text-center ${idx !== 2 ? "md:border-r border-white/10" : ""}`}
                            >
                                <div className="mx-auto text-white opacity-40">
                                    {metric.icon}
                                </div>
                                <div>
                                    <h3 className="text-5xl font-black mb-4 tracking-tighter">{metric.value}</h3>
                                    <p className="font-black text-white uppercase tracking-[0.3em] text-[10px] mb-6">{metric.label}</p>
                                    <p className="text-text-secondary text-xs font-medium leading-relaxed uppercase tracking-wider">{metric.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Project Grid */}
                <section className="mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {charityProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="group flex flex-col gap-8"
                            >
                                <div className="relative aspect-video overflow-hidden border border-white/5">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-60 group-hover:opacity-100"
                                    />
                                </div>
                                <div>
                                    <span className="text-white/40 font-black text-[10px] tracking-[0.4em] uppercase mb-4 block">{project.location}</span>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 group-hover:text-white transition-colors">{project.title}</h3>
                                    <p className="text-text-secondary font-medium leading-relaxed uppercase tracking-widest text-sm">{project.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* CTA section explicitly monochromatic */}
                <section className="py-32 border-y border-white/10 text-center">
                    <HandHelping className="mx-auto mb-10 size-12 opacity-40" />
                    <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter uppercase leading-tight">Yüzyıllık <br /> Emanetler</h2>
                    <p className="text-sm uppercase tracking-[0.4em] text-text-secondary max-w-2xl mx-auto mb-16 leading-loose">
                        Eğitimde fırsat eşitliğini sağlamak ve daha aydınlık bir gelecek inşa etmek için desteğiniz evrensel bir değer taşır.
                    </p>
                    <button className="h-16 px-16 bg-white text-black font-black text-xs uppercase tracking-[0.3em] hover:bg-white/80 transition-all">
                        Vakfa Destek Ol
                    </button>
                </section>
            </div>
        </div>
    );
}
