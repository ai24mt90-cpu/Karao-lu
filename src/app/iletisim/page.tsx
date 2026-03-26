"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { useTranslation } from "react-i18next";

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const { t } = useTranslation();
    const defaultSubject = t("contactPage.options.project", "Proje Bilgi Talebi");
    const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: defaultSubject,
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        try {
            const { error } = await supabase
                .from("contact_messages")
                .insert([formData]);

            if (error) throw error;

            setFormState("success");
            setFormData({ name: "", email: "", phone: "", subject: defaultSubject, message: "" });
        } catch (err) {
            console.error("Form submission error:", err);
            setFormState("error");
        }
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
                            <h1 className="text-5xl font-bold text-white mb-4">{t("contactPage.heroTitle")}</h1>
                            <p className="text-white/80 text-lg">{t("contactPage.heroSubtitle")}</p>
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
                            <h3 className="font-bold text-foreground mb-2">{t("contactPage.addressTitle")}</h3>
                            <p className="text-text-secondary text-sm">
                                <span className="font-bold text-gray-900 block mb-1">{t("contactPage.vanHQ")}</span>
                                Güzeloba Mah. Cağlayangil Caddesi 3 B<br />
                                Muratpaşa/Antalya
                                <br /><br />
                                <span className="font-bold text-gray-900 block mb-1">{t("contactPage.ankaraBranch")}</span>
                                Next Level, Kızılırmak Mah. Dumlupınar Bulvarı<br />
                                No: 3C1/160, Kat: 29<br />
                                06530 Çankaya/Ankara
                            </p>
                        </div>
                        <div className="bg-surface-secondary p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="text-primary mb-4 flex justify-center">
                                <Phone size={32} />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">{t("contactPage.phoneTitle")}</h3>
                            <a href="tel:+905326736556" className="text-text-secondary text-sm hover:text-primary transition-colors">
                                0532 673 65 56
                            </a>
                        </div>
                        <div className="bg-surface-secondary p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="text-primary mb-4 flex justify-center">
                                <Mail size={32} />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">{t("contactPage.emailTitle")}</h3>
                            <a href="mailto:karaogluuniversal@gmail.com" className="text-text-secondary text-sm hover:text-primary transition-colors">
                                karaogluuniversal@gmail.com
                            </a>
                        </div>
                        <div className="bg-surface-secondary p-8 text-center hover:shadow-lg transition-shadow">
                            <div className="text-primary mb-4 flex justify-center">
                                <Clock size={32} />
                            </div>
                            <h3 className="font-bold text-foreground mb-2">{t("contactPage.hoursTitle")}</h3>
                            <p className="text-text-secondary text-sm" dangerouslySetInnerHTML={{ __html: t("contactPage.hoursText") }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form */}
            <section className="py-16 bg-surface-secondary">
                <div className="layout-container">
                    <div className="max-w-2xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t("contactPage.formSubtitle")}</h2>
                            <h3 className="text-4xl font-bold text-foreground">{t("contactPage.formTitle")}</h3>
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
                                <h3 className="text-2xl font-bold text-foreground mb-4">{t("contactPage.successTitle")}</h3>
                                <p className="text-text-secondary mb-8">{t("contactPage.successDesc")}</p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="text-primary font-semibold hover:underline"
                                >
                                    {t("contactPage.newMsgBtn")}
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg">
                                {formState === "error" && (
                                    <div className="bg-red-50 text-red-600 p-4 mb-6 text-sm">
                                        {t("contactPage.errorMsg")}
                                    </div>
                                )}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">{t("contactPage.nameLabel")}</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">{t("contactPage.emailLabel")}</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-foreground mb-2">{t("contactPage.phoneLabel")}</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-foreground mb-2">{t("contactPage.subjectLabel")}</label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full h-12 px-4 border border-gray-200 focus:border-primary focus:outline-none transition-colors bg-white"
                                    >
                                        <option>{t("contactPage.options.project")}</option>
                                        <option>{t("contactPage.options.collab")}</option>
                                        <option>{t("contactPage.options.career")}</option>
                                        <option>{t("contactPage.options.other")}</option>
                                    </select>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-foreground mb-2">{t("contactPage.messageLabel")}</label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="w-full h-14 bg-primary text-white font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                                >
                                    {formState === "submitting" ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            {t("contactPage.sendingBtn")}
                                        </>
                                    ) : (
                                        t("contactPage.sendBtn")
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] bg-gray-200">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1542.5!2d43.3642!3d38.4925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDI5JzMzLjAiTiA0M8KwMjEnNTEuMSJF!5e0!3m2!1str!2str!4v1704628542000!5m2!1str!2str"
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
