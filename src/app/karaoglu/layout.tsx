import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Karaoğlu | Karaoğlu Universal Engineering",
    description: "Detailed information about the Karaoğlu brand, engineering projects, and public infrastructure expertise.",
};

export default function KaraogluLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
