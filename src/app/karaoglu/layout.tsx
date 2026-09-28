import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Karaoğlu Kimdir? Firma Profili ve Referanslar",
    description: "Karaoğlu Universal Mühendislik Ltd. Şti.: Antalya merkezli, Ankara şubeli kamu müteahhidi. Altyapı, üstyapı ve konut projeleri, referanslar ve iletişim bilgileri.",
    alternates: { canonical: "/karaoglu" },
};

export default function KaraogluLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
