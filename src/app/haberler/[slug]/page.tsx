"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const dynamic = 'force-dynamic';

export default function NewsDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const [news, setNews] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            if (!slug) return;

            try {
                const { data, error } = await supabase
                    .from("news")
                    .select("*")
                    .eq("slug", slug)
                    .eq("is_published", true)
                    .single();

                if (error || !data) {
                    console.error("News fetch error:", error);
                    setNews(null);
                } else {
                    setNews(data);
                }
            } catch (e) {
                console.error("Error:", e);
                setNews(null);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen pt-40 pb-20 bg-surface-secondary flex items-center justify-center">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    if (!news) {
        return (
            <div className="min-h-screen pt-40 pb-20 bg-surface-secondary flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Haber Bulunamadı</h1>
                <p className="text-gray-600 mb-8">Aradığınız haber maalesef mevcut değil veya yayından kaldırılmış.</p>
                <Link href="/haberler" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                    Haber Listesine Dön
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-surface-secondary">
            <div className="layout-container">
                {/* Geri Dön Linki */}
                <Link
                    href="/haberler"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Haberlere Dön</span>
                </Link>

                <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-8 md:p-12">
                    {/* Header */}
                    <header className="mb-10 text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 text-sm text-text-secondary mb-6">
                            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
                                <Calendar size={14} />
                                {new Date(news.published_at || news.created_at).toLocaleDateString("tr-TR", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1.5 bg-blue-50 text-primary px-3 py-1 rounded-full font-medium">
                                <Tag size={14} />
                                {news.category || "Genel"}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {news.title}
                        </h1>

                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            {news.summary}
                        </p>
                    </header>

                    {/* Kapak Fotoğrafı (Varsa) */}
                    {news.image_url && (
                        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-12 shadow-md">
                            <Image
                                src={news.image_url}
                                alt={news.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* İçerik */}
                    <div className="prose prose-lg prose-slate max-w-4xl mx-auto prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-foreground">
                        <ReactMarkdown>{news.content}</ReactMarkdown>
                    </div>
                </article>
            </div>
        </main>
    );
}
