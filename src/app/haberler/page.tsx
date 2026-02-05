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
    category: string;
}

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
                                <Link href={`/haberler/${item.id}`} key={item.id} className="block group">
                                    <motion.article
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
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
                                                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                                    <span className="text-primary/20">Görsel Yok</span>
                                                </div>
                                            )}
                                            {item.category && (
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1">
                                                        {item.category}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 text-text-secondary text-sm mb-3">
                                                <Calendar size={14} />
                                                <span>{new Date(item.created_at).toLocaleDateString('tr-TR')}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm line-clamp-3 mb-4 flex-grow">{item.summary}</p>

                                            <div className="mt-auto flex items-center text-primary text-sm font-medium">
                                                Detayları Oku <ArrowRight size={14} className="ml-1" />
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-text-secondary">Henüz yayınlanmış haber bulunmuyor.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
