import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { getBlogPost, toDescription } from "@/lib/content";
import BlogPostView from "./BlogPostView";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) return { title: "Yazı bulunamadı", robots: { index: false } };

    const path = `/blog/${post.slug || post.id}`;
    const description = toDescription(post.excerpt, post.content);

    return {
        title: post.title,
        description,
        alternates: { canonical: path },
        openGraph: {
            type: "article",
            url: path,
            title: post.title,
            description,
            publishedTime: post.published_at || post.created_at,
            images: post.image_url ? [{ url: post.image_url, alt: post.title }] : undefined,
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    if (!post) notFound();

    // UUID'li eski adresleri okunabilir slug adresine topla
    if (post.slug && decodeURIComponent(slug) !== post.slug) {
        permanentRedirect(`/blog/${post.slug}`);
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: toDescription(post.excerpt, post.content),
        image: post.image_url || undefined,
        datePublished: post.published_at || post.created_at,
        author: { "@type": "Organization", name: "Karaoğlu Universal Mühendislik" },
        publisher: { "@type": "Organization", name: "Karaoğlu Universal Mühendislik" },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <BlogPostView post={post} />
        </>
    );
}
