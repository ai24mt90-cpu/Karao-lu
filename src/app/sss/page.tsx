"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ChevronDown, Search, HelpCircle } from "lucide-react";
import Link from "next/link";

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category?: string;
}

export default function FAQPage() {
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchFaqs = async () => {
            const { data, error } = await supabase
                .from("faqs")
                .select("*")
                .order("created_at", { ascending: true });

            if (!error && data) {
                setFaqs(data);
            }
        };
        fetchFaqs();
    }, []);

    const filteredFaqs = faqs.filter(
        faq => faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const defaultFaqs = [
        { id: "1", question: "Projeleriniz hangi bölgelerde gerçekleştiriliyor?", answer: "Projelerimiz ağırlıklı olarak Van ve çevre illerde gerçekleştirilmektedir. Kamu, konut ve altyapı projelerinde aktif olarak çalışmaktayız." },
        { id: "2", question: "Teklif almak için nasıl başvurabilirim?", answer: "İletişim sayfamızdaki formu doldurarak veya doğrudan telefon numaramızdan bizimle iletişime geçebilirsiniz." },
        { id: "3", question: "Şirketinizin tecrübesi ne kadar?", answer: "2014 yılından bu yana inşaat ve mühendislik sektöründe faaliyet göstermekteyiz. Bu süre zarfında onlarca proje başarıyla tamamlanmıştır." },
        { id: "4", question: "Kalite belgeleriniz var mı?", answer: "Evet, ISO 9001 kalite belgesi ve sektörel sertifikalarımız mevcuttur." },
        { id: "5", question: "Sosyal sorumluluk projeleriniz neler?", answer: "Eğitim, spor ve toplumsal alanlarda çeşitli projeler yürütmekteyiz. Okul bağışları, burs programları ve spor tesisleri bunların başında gelmektedir." },
    ];

    const displayFaqs = faqs.length > 0 ? filteredFaqs : defaultFaqs;

    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000"
                    alt="SSS"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl font-bold text-white mb-4">SIKÇA SORULAN SORULAR</h1>
                            <p className="text-white/80 text-lg">Merak ettiklerinizi yanıtlıyoruz</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Search Bar */}
            <section className="py-8 bg-white border-b border-gray-200">
                <div className="layout-container">
                    <div className="relative max-w-xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
                        <input
                            type="text"
                            placeholder="Soru ara..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full h-12 pl-12 pr-4 border border-gray-200 rounded focus:border-primary focus:outline-none transition-colors"
                        />
                    </div>
                </div>
            </section>

            {/* FAQ Accordion */}
            <section className="py-16 bg-surface-secondary">
                <div className="layout-container">
                    <div className="max-w-3xl mx-auto">
                        {displayFaqs.length > 0 ? (
                            <div className="space-y-4">
                                {displayFaqs.map((faq, idx) => (
                                    <motion.div
                                        key={faq.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="bg-white border border-gray-200 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                        >
                                            <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                                            <ChevronDown
                                                size={20}
                                                className={`text-primary flex-shrink-0 transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                                            />
                                        </button>
                                        {openIndex === idx && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                className="px-6 pb-6"
                                            >
                                                <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white border border-gray-200">
                                <HelpCircle className="mx-auto mb-4 text-text-secondary" size={48} />
                                <p className="text-text-secondary">Aradığınız sonuç bulunamadı.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Contact CTA */}
            <section className="py-16 bg-white">
                <div className="layout-container text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">Başka Sorularınız mı Var?</h2>
                    <p className="text-text-secondary mb-8">Ekibimiz size yardımcı olmaktan memnuniyet duyar.</p>
                    <Link
                        href="/iletisim"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 font-semibold hover:bg-primary-dark transition-colors"
                    >
                        İletişime Geç
                    </Link>
                </div>
            </section>
        </div>
    );
}
