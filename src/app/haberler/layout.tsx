import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Haberler ve Duyurular",
    description: "Karaoğlu Universal Mühendislik'ten güncel haberler, proje duyuruları ve şantiye gelişmeleri.",
};

export default function HaberlerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
