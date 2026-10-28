import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sıkça Sorulan Sorular",
    description: "Kamu projeleri, ihale süreçleri, hizmet bölgelerimiz ve çalışma şeklimiz hakkında sıkça sorulan sorular ve cevapları.",
};

export default function SssLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
