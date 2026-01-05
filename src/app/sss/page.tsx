"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
    order_index: number;
}

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from("faqs")
            .select("*")
            .order("order_index", { ascending: true });

        if (error) {
            console.error("Error fetching FAQs:", error);
        } else {
            setFaqs(data || []);
        }
        setLoading(false);
    };

    const filteredFaqs = faqs.filter(faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flex flex-col py-24 bg-black min-h-screen">
            <div className="layout-container max-w-3xl">
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-6 py-2 border border-white/10 rounded-full mb-8"
                    >
                        <HelpCircle size={14} />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Destek & Bilgi</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">Sorular & <br /> <span className="text-white/40">Yanıtlar</span></h1>
                    <p className="text-xs uppercase tracking-[0.3em] text-text-secondary leading-loose font-medium">
                        Merak ettikleriniz için evrensel yanıtlar.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-20">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-text-secondary">
                        <Search size={16} />
                    </div>
                    <input
                        type="text"
                        placeholder="ARAMA YAPIN..."
                        className="w-full h-16 pl-16 pr-6 bg-transparent border-y border-white/10 focus:border-white outline-none text-xs font-black uppercase tracking-[0.4em] transition-all"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* FAQ List */}
                <div className="flex flex-col gap-8">
                    {filteredFaqs.length > 0 ? (
                        filteredFaqs.map((faq, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className={`overflow-hidden border-b border-white/10 transition-all ${openIndex === idx ? "border-white" : ""
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="flex w-full items-center justify-between py-8 text-left"
                                >
                                    <span className="text-sm font-black uppercase tracking-widest leading-tight">{faq.question}</span>
                                    <div className={`transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}>
                                        {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="pb-8 text-text-secondary text-sm font-medium leading-loose uppercase tracking-widest">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-20 border border-dashed border-white/10">
                            <p className="text-text-secondary text-[10px] font-black uppercase tracking-widest">Sonuç bulunamadı.</p>
                        </div>
                    )}
                </div>

                {/* Contact CTA */}
                <div className="mt-32 p-12 bg-surface text-center border border-white/5">
                    <h3 className="text-2xl font-black uppercase tracking-tighter mb-6">Detaylı Bilgi İçin</h3>
                    <p className="text-xs uppercase tracking-widest text-text-secondary mb-10 leading-loose">Ekiplerimiz her türlü teknik soru için yardıma hazırdır.</p>
                    <button className="h-14 px-12 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/80 transition-all">
                        İletişime Geçin
                    </button>
                </div>
            </div>
        </div>
    );
}
