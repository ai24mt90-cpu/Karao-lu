import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Antalya Mühendislik Firması İletişim – Karaoğlu Universal",
    description: "Antalya Muratpaşa'da faaliyet gösteren mühendislik firması ile hemen iletişime geçin. Proje desteği ve ücretsiz teklif alın.",
    openGraph: {
        title: "Antalya Mühendislik Firması İletişim – Karaoğlu Universal",
        description: "Antalya Muratpaşa'da faaliyet gösteren mühendislik firması ile hemen iletişime geçin. Proje desteği ve ücretsiz teklif alın.",
    },
};

export default function IletisimLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
