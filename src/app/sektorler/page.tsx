"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Home, Construction, GraduationCap, HeartPulse, Droplets, ArrowRight } from "lucide-react";

const sectors = [
    {
        id: "kamu",
        title: "Kamu Projeleri",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&q=80&w=800",
        description: "Devlet kurumları, belediyeler ve kamu idareleri için inşaat ve mühendislik hizmetleri sunuyoruz.",
        details: [
            "Valilik ve kaymakamlık binaları",
            "Belediye hizmet binaları",
            "Jandarma ve emniyet tesisleri",
            "Adliye ve kamu ofisleri",
            "Kültür ve kongre merkezleri"
        ],
        stats: { projects: "45+", experience: "10 Yıl" }
    },
    {
        id: "saglik",
        title: "Sağlık Projeleri",
        icon: HeartPulse,
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
        description: "Modern sağlık tesisleri ve hastane altyapısı projelerinde uzmanlaşmış ekibimizle hizmet veriyoruz.",
        details: [
            "Devlet hastaneleri",
            "Sağlık ocakları ve poliklinikler",
            "Acil servis üniteleri",
            "Laboratuvar ve tanı merkezleri",
            "Hastane ek bina ve renovasyonları"
        ],
        stats: { projects: "15+", experience: "8 Yıl" }
    },
    {
        id: "egitim",
        title: "Eğitim Projeleri",
        icon: GraduationCap,
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800",
        description: "Okullar, üniversite kampüsleri ve eğitim tesisleri için kapsamlı inşaat çözümleri sunuyoruz.",
        details: [
            "İlkokul ve ortaokul binaları",
            "Lise ve meslek liseleri",
            "Üniversite kampüs binaları",
            "Spor salonları ve konferans salonları",
            "Yurt ve sosyal tesis binaları"
        ],
        stats: { projects: "20+", experience: "9 Yıl" }
    },
    {
        id: "konut",
        title: "Konut Projeleri",
        icon: Home,
        image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
        description: "TOKİ projeleri ve toplu konut alanlarında güvenilir ve kaliteli inşaat hizmetleri veriyoruz.",
        details: [
            "TOKİ toplu konut projeleri",
            "Kentsel dönüşüm projeleri",
            "Sosyal konut projeleri",
            "Lojman ve personel konutları",
            "Çevre düzenlemesi ve altyapı"
        ],
        stats: { projects: "25+", experience: "10 Yıl" }
    },
    {
        id: "altyapi",
        title: "Altyapı Projeleri",
        icon: Construction,
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800",
        description: "Yol, köprü, kanalizasyon ve şehir altyapısı projelerinde Van ve çevresinde hizmet sunuyoruz.",
        details: [
            "Asfalt ve parke taşı döşeme",
            "Kanalizasyon ve yağmur suyu hatları",
            "İçme suyu şebekeleri",
            "Köprü ve menfez yapımı",
            "Şehir içi ulaşım projeleri"
        ],
        stats: { projects: "30+", experience: "10 Yıl" }
    },
    {
        id: "elektrik",
        title: "Elektrik & Enerji",
        icon: Droplets,
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800",
        description: "Elektrik enerji nakil hatları, trafo merkezleri ve enerji altyapısı projelerinde uzmanız.",
        details: [
            "Enerji nakil hatları (ENH)",
            "Trafo merkezleri ve postalar",
            "Köy elektrik şebekeleri",
            "Aydınlatma sistemleri",
            "Jeneratör ve kesintisiz güç sistemleri"
        ],
        stats: { projects: "35+", experience: "10 Yıl" }
    }
];

export default function SectorsPage() {
    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
                    alt="Sektörler"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl font-bold text-white mb-4">SEKTÖRLER</h1>
                            <p className="text-white/80 text-lg max-w-2xl">
                                Van ve çevresinde faaliyet gösterdiğimiz sektörler hakkında detaylı bilgi edinin.
                                Her sektörde uzman kadromuz ve deneyimimizle hizmetinizdeyiz.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Sectors Grid */}
            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {sectors.map((sector, idx) => (
                            <motion.div
                                key={sector.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-surface-secondary rounded-2xl overflow-hidden group"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    {/* Image */}
                                    <div className="relative h-64 md:h-full min-h-[250px]">
                                        <Image
                                            src={sector.image}
                                            alt={sector.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
                                        <div className="absolute top-4 left-4">
                                            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                                                <sector.icon size={24} className="text-white" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col">
                                        <h2 className="text-xl font-bold text-foreground mb-3">{sector.title}</h2>
                                        <p className="text-text-secondary text-sm mb-4">{sector.description}</p>

                                        <ul className="space-y-2 mb-6 flex-1">
                                            {sector.details.map((detail, i) => (
                                                <li key={i} className="flex items-center gap-2 text-sm text-text-secondary">
                                                    <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                            <div className="flex gap-6">
                                                <div>
                                                    <p className="text-xl font-bold text-primary">{sector.stats.projects}</p>
                                                    <p className="text-xs text-text-secondary">Proje</p>
                                                </div>
                                                <div>
                                                    <p className="text-xl font-bold text-primary">{sector.stats.experience}</p>
                                                    <p className="text-xs text-text-secondary">Tecrübe</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary">
                <div className="layout-container text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Projeniz İçin Teklif Alın</h2>
                    <p className="text-white/80 mb-8 max-w-xl mx-auto">
                        Hangi sektörde olursa olsun, projeniz için size en uygun çözümü sunmak için hazırız.
                    </p>
                    <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 font-semibold hover:bg-white/90 transition-colors"
                    >
                        İletişime Geçin <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
