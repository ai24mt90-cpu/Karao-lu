"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const dynamic = 'force-dynamic';

export default function BlogPostPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            if (!slug) return;

            try {
                // Fetch by ID only
                const { data } = await supabase
                    .from("blog_posts")
                    .select("*")
                    .eq("id", slug)
                    .limit(1);

                if (data && data.length > 0) {
                    setPost(data[0]);
                } else {
                    setPost(null);
                }
            } catch (e) {
                console.error("Error:", e);
                setPost(null);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen pt-40 pb-20 bg-surface-secondary flex items-center justify-center">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    if (!post) {
        return (
            <div className="min-h-screen pt-40 pb-20 bg-surface-secondary flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">Yazı Bulunamadı</h1>
                <p className="text-gray-600 mb-8">Aradığınız blog yazısı maalesef mevcut değil veya yayından kaldırılmış.</p>
                <Link href="/blog" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors">
                    Blog Listesine Dön
                </Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen pt-32 pb-20 bg-surface-secondary">
            <div className="layout-container">
                {/* Geri Dön Linki */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <span>Blog'a Dön</span>
                </Link>

                <article className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 p-8 md:p-12">
                    {/* Header */}
                    <header className="mb-10 text-center max-w-4xl mx-auto">
                        <div className="flex items-center justify-center gap-4 text-sm text-text-secondary mb-6">
                            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full">
                                <Calendar size={14} />
                                {new Date(post.published_at || post.created_at).toLocaleDateString("tr-TR", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-1.5 bg-blue-50 text-primary px-3 py-1 rounded-full font-medium">
                                <Tag size={14} />
                                {post.category || "Genel"}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
                            {post.excerpt}
                        </p>
                    </header>

                    {/* Kapak Fotoğrafı (Varsa) */}
                    {post.image_url && (
                        <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden mb-12 shadow-md">
                            <Image
                                src={post.image_url}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}

                    {/* İçerik */}
                    <div className="prose prose-lg prose-slate max-w-3xl mx-auto 
                        prose-headings:font-bold prose-headings:text-foreground prose-headings:mt-8 prose-headings:mb-4
                        prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                        prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-ul:my-6 prose-ol:my-6 prose-li:my-2
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:italic
                        prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg
                        prose-img:rounded-lg prose-img:shadow-md">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </article>
            </div>
        </main>
    );
}
