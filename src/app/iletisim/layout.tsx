import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Van Mühendislik Firması İletişim – Karaoğlu Universal",
    description: "Van İpekyolu'nda faaliyet gösteren mühendislik firması ile hemen iletişime geçin. Proje desteği ve ücretsiz teklif alın.",
    openGraph: {
        title: "Van Mühendislik Firması İletişim – Karaoğlu Universal",
        description: "Van İpekyolu'nda faaliyet gösteren mühendislik firması ile hemen iletişime geçin. Proje desteği ve ücretsiz teklif alın.",
    },
};

export default function IletisimLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
