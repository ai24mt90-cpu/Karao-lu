import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bakımda",
    robots: "noindex, nofollow",
};

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-900">
                Bakımda
            </h1>
        </div>
    );
}
