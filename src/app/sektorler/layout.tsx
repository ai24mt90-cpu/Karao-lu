import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Antalya Mühendislik Sektörleri – Kamu, Sağlık, Eğitim, Altyapı",
    description: "Türkiye genelinde kamu, sağlık, eğitim, konut, altyapı ve enerji sektörlerinde mühendislik hizmetleri. Karaoğlu Universal Mühendislik uzmanlık alanları.",
    openGraph: {
        title: "Sektörler – Karaoğlu Universal Mühendislik",
        description: "Türkiye genelinde faaliyet gösterdiğimiz sektörler ve uzmanlık alanlarımız.",
    },
};

export default function SektorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
