import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const revalidate = 3600; // 1 saatte bir yenile

// Statik parametreleri oluştur (SSG için)
export async function generateStaticParams() {
    const { data: posts } = await supabase
        .from("blogs")
        .select("slug")
        .eq("is_published", true);

    return posts?.map((post) => ({
        slug: post.slug,
    })) || [];
}

// Meta verileri oluştur
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { data: post } = await supabase
        .from("blogs")
        .select("title, excerpt, meta_title, meta_description")
        .eq("slug", params.slug)
        .eq("is_published", true)
        .single();

    if (!post) {
        return {
            title: "Blog Yazısı Bulunamadı",
        };
    }

    return {
        title: post.meta_title || post.title,
        description: post.meta_description || post.excerpt,
    };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const { data: post } = await supabase
        .from("blogs")
        .select("*")
        .eq("slug", params.slug)
        .eq("is_published", true)
        .single();

    if (!post) {
        notFound();
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
                                {new Date(post.published_at || post.created_at || new Date().toISOString()).toLocaleDateString("tr-TR", {
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
                    <div className="prose prose-lg prose-slate max-w-4xl mx-auto prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary-dark prose-strong:text-foreground">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </article>
            </div>
        </main>
    );
}
