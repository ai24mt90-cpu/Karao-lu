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
    slug: string;
    excerpt: string;
    content: string;
    image_url?: string;
    author: string;
    category?: string;
    created_at: string;
}



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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <Link href={`/blog/${post.id}`} key={post.id} className="block group">
                                    <motion.article
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all h-full flex flex-col"
                                    >
                                        {/* Image on top */}
                                        <div className="relative h-48 overflow-hidden">
                                            {post.image_url ? (
                                                <Image
                                                    src={post.image_url}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                                    <span className="text-primary/20">Görsel Yok</span>
                                                </div>
                                            )}
                                        </div>

                                        {/* Content below */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            {post.category && (
                                                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                                                    {post.category}
                                                </span>
                                            )}
                                            <h3 className="text-lg font-bold text-foreground mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm mb-4 line-clamp-3 flex-grow">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                                <span className="flex items-center gap-1 text-text-secondary text-xs">
                                                    <Calendar size={12} /> {new Date(post.created_at).toLocaleDateString('tr-TR')}
                                                </span>
                                                <span className="flex items-center gap-1 text-primary text-sm font-medium">
                                                    Oku <ArrowRight size={14} />
                                                </span>
                                            </div>
                                        </div>
                                    </motion.article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-text-secondary">Henüz yayınlanmış blog yazısı bulunmuyor.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
