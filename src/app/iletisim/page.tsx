"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 2000);
    };

    return (
        <div className="flex flex-col py-24 bg-background min-h-screen">
            <div className="layout-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-4 flex flex-col gap-16">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8"
                            >
                                İrtibar <br /><span className="text-white/40 leading-none">Kurun</span>
                            </motion.h1>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-text-secondary leading-loose">
                                Evrensel mühendislik çözümleri ve vakıf çalışmalarımız için bizimle iletişime geçin.
                            </p>
                        </div>

                        <div className="flex flex-col gap-10">
                            <div className="flex gap-6 items-start">
                                <div className="mt-1 opacity-40">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">Merkez Ofis</h4>
                                    <p className="text-text-secondary text-xs uppercase tracking-widest leading-relaxed font-medium">Maslak Mah. Büyükdere Cad. No:1 <br />Spine Tower, İstanbul</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="mt-1 opacity-40">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">Telefon</h4>
                                    <p className="text-text-secondary text-xs uppercase tracking-widest font-medium">+90 (212) 555 00 00</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="mt-1 opacity-40">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">E-Posta</h4>
                                    <p className="text-text-secondary text-xs uppercase tracking-widest font-medium">info@karaoglu.com</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="mt-1 opacity-40">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-2">Mesai</h4>
                                    <p className="text-text-secondary text-xs uppercase tracking-widest font-medium">Pazartesi - Cuma: 09:00 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-12 bg-surface border border-white/5"
                        >
                            {formState === "success" ? (
                                <div className="flex flex-col items-center justify-center py-20 text-center gap-8">
                                    <div className="size-20 bg-white text-black flex items-center justify-center rounded-full">
                                        <Send size={32} />
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tighter">İletildi</h3>
                                    <p className="text-text-secondary uppercase tracking-[0.2em] text-xs font-medium">Mesajınız üzere size en kısa sürede dönüş yapılacaktır.</p>
                                    <button
                                        onClick={() => setFormState("idle")}
                                        className="mt-8 text-xs font-black uppercase tracking-widest border-b border-white pb-1"
                                    >
                                        Yeni bir mesaj
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="flex flex-col gap-3">
                                            <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.3em]">Ad Soyad</label>
                                            <input
                                                required
                                                type="text"
                                                className="w-full h-14 bg-transparent border-b border-white/20 focus:border-white outline-none transition-all text-sm uppercase tracking-widest font-medium"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.3em]">E-Posta</label>
                                            <input
                                                required
                                                type="email"
                                                className="w-full h-14 bg-transparent border-b border-white/20 focus:border-white outline-none transition-all text-sm uppercase tracking-widest font-medium"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.3em]">Konu</label>
                                        <select className="w-full h-14 bg-transparent border-b border-white/20 focus:border-white outline-none transition-all text-sm uppercase tracking-widest font-medium appearance-none cursor-pointer">
                                            <option className="bg-background">Proje Bilgi Talebi</option>
                                            <option className="bg-background">İş Birliği Teklifi</option>
                                            <option className="bg-background">Kariyer</option>
                                            <option className="bg-background">Vakıf Destek</option>
                                        </select>
                                    </div>

                                    <div className="flex flex-col gap-3">
                                        <label className="text-[10px] font-black text-text-secondary uppercase tracking-[0.3em]">Mesajınız</label>
                                        <textarea
                                            required
                                            rows={6}
                                            className="w-full py-4 bg-transparent border-b border-white/20 focus:border-white outline-none transition-all text-sm uppercase tracking-widest font-medium resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={formState === "submitting"}
                                        className="w-full h-16 bg-white text-black font-black uppercase tracking-[0.3em] text-xs hover:bg-white/80 transition-all disabled:opacity-50"
                                    >
                                        {formState === "submitting" ? "Gönderiliyor..." : "Mesajı Gönder"}
                                    </button>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
