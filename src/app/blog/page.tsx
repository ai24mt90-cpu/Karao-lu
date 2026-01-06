"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import Link from "next/link";

interface BlogPost {
    id: string;
    title: string;
    summary: string;
    content: string;
    author: string;
    image_url?: string;
    created_at: string;
    category?: string;
    read_time?: string;
}

const defaultPosts = [
    {
        id: "1",
        title: "Kamu Müteahhitliğinde Kalite Standartları",
        summary: "Kamu projelerinde kalite yönetiminin önemi ve uygulanan standartlar hakkında bilgiler.",
        author: "Mühendislik Ekibi",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
        date: "05.01.2026",
        category: "Mühendislik",
        readTime: "5 dk"
    },
    {
        id: "2",
        title: "Sürdürülebilir İnşaat Uygulamaları",
        summary: "Çevreye duyarlı inşaat yöntemleri ve sürdürülebilirlik ilkeleri.",
        author: "Proje Yönetimi",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
        date: "02.01.2026",
        category: "Sürdürülebilirlik",
        readTime: "7 dk"
    },
    {
        id: "3",
        title: "İş Güvenliği Önlemleri",
        summary: "Şantiye alanlarında alınması gereken iş güvenliği tedbirleri.",
        author: "İSG Birimi",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
        date: "28.12.2025",
        category: "İş Güvenliği",
        readTime: "4 dk"
    },
    {
        id: "4",
        title: "Proje Yönetiminde Başarı Faktörleri",
        summary: "Büyük ölçekli projelerde başarıya ulaşmanın temel unsurları.",
        author: "Yönetim",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
        date: "22.12.2025",
        category: "Yönetim",
        readTime: "6 dk"
    },
];

export default function BlogPage() {
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data, error } = await supabase
                .from("blog_posts")
                .select("*")
                .order("created_at", { ascending: false });

            if (!error && data) {
                setPosts(data);
            }
        };
        fetchPosts();
    }, []);

    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000"
                    alt="Blog"
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
                            <h1 className="text-5xl font-bold text-white mb-4">BLOG</h1>
                            <p className="text-white/80 text-lg">Sektörel içerikler ve bilgi paylaşımları</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-20 bg-surface-secondary">
                <div className="layout-container">
                    {posts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {posts.map((post) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col md:flex-row"
                                >
                                    <div className="relative w-full md:w-1/3 h-56 md:h-auto overflow-hidden">
                                        {post.image_url ? (
                                            <Image
                                                src={post.image_url}
                                                alt={post.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-primary/10" />
                                        )}
                                    </div>
                                    <div className="p-6 flex-1">
                                        {post.category && (
                                            <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                                                {post.category}
                                            </span>
                                        )}
                                        <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm mb-4 line-clamp-2">{post.summary}</p>
                                        <div className="flex items-center gap-4 text-text-secondary text-xs">
                                            <span className="flex items-center gap-1">
                                                <User size={12} /> {post.author}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} /> {new Date(post.created_at).toLocaleDateString('tr-TR')}
                                            </span>
                                            {post.read_time && (
                                                <span className="flex items-center gap-1">
                                                    <Clock size={12} /> {post.read_time}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {defaultPosts.map((post, idx) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col md:flex-row"
                                >
                                    <div className="relative w-full md:w-1/3 h-56 md:h-auto min-h-[200px] overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 flex-1">
                                        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                                            {post.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm mb-4">{post.summary}</p>
                                        <div className="flex items-center gap-4 text-text-secondary text-xs">
                                            <span className="flex items-center gap-1">
                                                <User size={12} /> {post.author}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} /> {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock size={12} /> {post.readTime}
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
