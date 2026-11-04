import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog – İnşaat ve Kamu İhalesi Yazıları",
    description: "Kamu ihaleleri, inşaat süreçleri, altyapı ve mühendislik üzerine Karaoğlu Universal Mühendislik blog yazıları.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
