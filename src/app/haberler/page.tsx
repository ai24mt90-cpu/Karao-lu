"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    summary: string;
    content: string;
    image_url?: string;
    created_at: string;
    category?: string;
}

const defaultNews = [
    {
        id: "1",
        title: "Yeni Kamu Projesi Başladı",
        summary: "Van Merkez'de yeni kamu binası inşaatımız başlamıştır.",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
        date: "06.01.2026",
        category: "Proje"
    },
    {
        id: "2",
        title: "ISO 9001 Kalite Belgesi Yenilendi",
        summary: "Kalite yönetim sistemimiz yeniden belgelendirilmiştir.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        date: "03.01.2026",
        category: "Kurumsal"
    },
    {
        id: "3",
        title: "Sosyal Sorumluluk Projemiz Tamamlandı",
        summary: "Park ve yeşil alan düzenleme projemiz başarıyla tamamlandı.",
        image: "https://images.unsplash.com/photo-1588714477688-cf28a50e94f7?auto=format&fit=crop&q=80&w=600",
        date: "28.12.2025",
        category: "Sosyal Sorumluluk"
    },
    {
        id: "4",
        title: "Yeni İş Ortaklığı",
        summary: "Bölgedeki önemli bir firma ile stratejik iş ortaklığı kuruldu.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=600",
        date: "20.12.2025",
        category: "Kurumsal"
    },
    {
        id: "5",
        title: "Ekip Genişlemesi",
        summary: "Teknik kadromuza yeni mühendisler dahil oldu.",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=600",
        date: "15.12.2025",
        category: "İnsan Kaynakları"
    },
    {
        id: "6",
        title: "Altyapı Projesi Tamamlandı",
        summary: "İpekyolu bölgesindeki altyapı projemiz başarıyla teslim edildi.",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=600",
        date: "10.12.2025",
        category: "Proje"
    },
];

export default function NewsPage() {
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const fetchNews = async () => {
            const { data, error } = await supabase
                .from("news")
                .select("*")
                .order("created_at", { ascending: false });

            if (!error && data) {
                setNews(data);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2000"
                    alt="Haberler"
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
                            <h1 className="text-5xl font-bold text-white mb-4">HABERLER</h1>
                            <p className="text-white/80 text-lg">Güncel gelişmeler ve duyurular</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* News Grid */}
            <section className="py-20 bg-surface-secondary">
                <div className="layout-container">
                    {news.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {news.map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        {item.image_url ? (
                                            <Image
                                                src={item.image_url}
                                                alt={item.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-primary/10" />
                                        )}
                                        {item.category && (
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                                                    {item.category}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                                            <Calendar size={14} />
                                            <span>{new Date(item.created_at).toLocaleDateString('tr-TR')}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm line-clamp-2">{item.summary}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {defaultNews.map((item, idx) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="relative h-56 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                                            <Calendar size={14} />
                                            <span>{item.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm">{item.summary}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
