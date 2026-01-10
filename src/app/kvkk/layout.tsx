import { Metadata } from "next";

export const metadata: Metadata = {
    title: "KVKK Aydınlatma Metni – Kişisel Verilerin Korunması",
    description: "Karaoğlu Universal Mühendislik KVKK Aydınlatma Metni. Kişisel verilerinizin nasıl işlendiğini ve haklarınızı öğrenin.",
    openGraph: {
        title: "KVKK Aydınlatma Metni – Karaoğlu Universal Mühendislik",
        description: "Kişisel verilerinizin nasıl işlendiğini ve haklarınızı öğrenin.",
    },
};

export default function KVKKLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
