import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik Politikası",
    description: "Karaoğlu Universal Mühendislik web sitesi gizlilik politikası ve çerez kullanımı hakkında bilgiler.",
};

export default function GizlilikLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
