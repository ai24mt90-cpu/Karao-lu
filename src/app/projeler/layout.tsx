import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Van Mühendislik Projeleri – Altyapı, Konut & Kamu",
    description: "Van bölgesinde tamamlanan altyapı, konut ve kamu mühendislik projeleri. Karaoğlu Universal Mühendislik'in referans çalışmalarını inceleyin.",
    openGraph: {
        title: "Van Mühendislik Projeleri – Altyapı, Konut & Kamu",
        description: "Van bölgesinde tamamlanan altyapı, konut ve kamu mühendislik projeleri. Karaoğlu Universal Mühendislik'in referans çalışmalarını inceleyin.",
    },
};

export default function ProjelerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
