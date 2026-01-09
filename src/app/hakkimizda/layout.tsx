import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Karaoğlu Universal Mühendislik – Van Merkez Mühendislik",
    description: "2014'ten beri Van'da altyapı, üstyapı, kamu ve konut mühendislik hizmetleri sunan deneyimli mühendislik firması.",
    openGraph: {
        title: "Karaoğlu Universal Mühendislik – Van Merkez Mühendislik",
        description: "2014'ten beri Van'da altyapı, üstyapı, kamu ve konut mühendislik hizmetleri sunan deneyimli mühendislik firması.",
    },
};

export default function HakkimizdaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
