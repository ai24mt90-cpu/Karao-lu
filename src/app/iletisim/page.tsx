"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");
        setTimeout(() => setFormState("success"), 2000);
    };

    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt="İletişim"
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
                            <h1 className="text-5xl font-bold text-white mb-4">İLETİŞİM</h1>
                            <p className="text-white/80 text-lg">Bizimle iletişime geçin</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="layout-container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-surface-secondary p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="text-primary mb-4 flex justify-center">
                                <MapPin size={32} />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Adres</h3>
                            <p className="text-text-secondary text-sm">
                                Hafiziye Mah. Umman 1. Sk.<br />
                                Fergul Insaat No: 2/20
                            </p>
                        </div>
                        <div className="bg-surface-secondary p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="text-primary mb-4 flex justify-center">
                                <Phone size={32} />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Telefon</h3>
                            <a href="tel:+904322165636" className="text-text-secondary text-sm hover:text-primary transition-colors">
                                0432 216 56 36
                            </a>
                        </div>
                        <div className="bg-surface-secondary p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="text-primary mb-4 flex justify-center">
                                <Mail size={32} />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">E-posta</h3>
                            <a href="mailto:karaogluuniversal@gmail.com" className="text-text-secondary text-sm hover:text-primary transition-colors">
                                karaogluuniversal@gmail.com
                            </a>
                        </div>
                        <div className="bg-surface-secondary p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="text-primary mb-4 flex justify-center">
                                <Clock size={32} />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">Çalışma Saatleri</h3>
                            <p className="text-text-secondary text-sm">
                                Pazartesi - Cuma<br />
                                09:00 - 18:00
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-surface-secondary">
                <div className="layout-container">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">İletişim Formu</h2>
                            <h3 className="text-4xl font-bold text-foreground">BİZE YAZIN</h3>
                        </div>

                        {formState === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white p-12 text-center shadow-lg"
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send className="text-green-600" size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-4">Mesajınız Gönderildi!</h3>
                                <p className="text-text-secondary mb-8">En kısa sürede size dönüş yapacağız.</p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="text-primary font-semibold hover:underline"
                                >
                                    Yeni Mesaj Gönder
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">Ad Soyad *</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">E-posta *</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                                    <input
                                        type="tel"
                                        className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-foreground mb-2">Konu *</label>
                                    <select className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white">
                                        <option>Proje Bilgi Talebi</option>
                                        <option>İş Birliği Teklifi</option>
                                        <option>Kariyer</option>
                                        <option>Diğer</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-foreground mb-2">Mesajınız *</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="w-full h-14 bg-primary text-white font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
                                >
                                    {formState === "submitting" ? "Gönderiliyor..." : "Gönder"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48891.33847888556!2d43.32!3d38.49!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI5JzI0LjAiTiA0M8KwMTknMTIuMCJF!5e0!3m2!1str!2str!4v1600000000000!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </div>
    );
}
