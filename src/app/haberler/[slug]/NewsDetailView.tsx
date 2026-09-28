
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { NewsItem } from "@/lib/content";

export default function NewsDetailView({ news }: { news: NewsItem }) {
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
