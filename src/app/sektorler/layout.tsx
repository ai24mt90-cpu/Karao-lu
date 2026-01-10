import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Van Mühendislik Sektörleri – Kamu, Sağlık, Eğitim, Altyapı",
    description: "Van'da kamu, sağlık, eğitim, konut, altyapı ve enerji sektörlerinde mühendislik hizmetleri. Karaoğlu Universal Mühendislik uzmanlık alanları.",
    openGraph: {
        title: "Sektörler – Karaoğlu Universal Mühendislik",
        description: "Van'da faaliyet gösterdiğimiz sektörler ve uzmanlık alanlarımız.",
    },
};

export default function SektorsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
