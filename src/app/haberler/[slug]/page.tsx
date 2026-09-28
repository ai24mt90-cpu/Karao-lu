import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getNewsItem, toDescription } from "@/lib/content";
import NewsDetailView from "./NewsDetailView";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const news = await getNewsItem(slug);
    if (!news) return { title: "Haber bulunamadı", robots: { index: false } };

    const path = `/haberler/${news.slug || news.id}`;
    const description = toDescription(news.summary, news.content);

    return {
        title: news.title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "article",
            url: path,
            title: news.title,
            description,
            publishedTime: news.published_at || news.created_at,
            images: news.image_url ? [{ url: news.image_url, alt: news.title }] : undefined,
        },
    };
}

export default async function NewsDetailPage({ params }: Props) {
    const { slug } = await params;
    const news = await getNewsItem(slug);
    if (!news) notFound();

    // UUID'li eski adresleri okunabilir slug adresine topla
    if (news.slug && decodeURIComponent(slug) !== news.slug) {
        permanentRedirect(`/haberler/${news.slug}`);
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: news.title,
        description: toDescription(news.summary, news.content),
        image: news.image_url || undefined,
        datePublished: news.published_at || news.created_at,
        author: { "@type": "Organization", name: "Karaoğlu Universal Mühendislik" },
        publisher: { "@type": "Organization", name: "Karaoğlu Universal Mühendislik" },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <NewsDetailView news={news} />
        </>
    );
}
