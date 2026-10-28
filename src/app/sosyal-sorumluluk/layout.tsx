import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sosyal Sorumluluk Projeleri",
    description: "Karaoğlu Universal Mühendislik'in eğitim, çevre ve toplum yararına yürüttüğü sosyal sorumluluk projeleri.",
};

export default function SosyalSorumlulukLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
