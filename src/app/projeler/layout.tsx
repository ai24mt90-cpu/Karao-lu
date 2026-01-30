import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Tamamlanan Kamu Projeleri ve Referanslar | Karaoğlu Mühendislik',
    description: 'Van ve Ankara\'da tamamladığımız hastane, okul, altyapı ve konut projeleri. 4734 sayılı kanun kapsamında teslim edilen iş bitirmelerimiz.',
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col bg-background min-h-screen">
            {children}
        </div>
    );
}
