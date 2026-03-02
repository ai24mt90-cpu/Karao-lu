"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
    const { t } = useTranslation();
    const [showTeam, setShowTeam] = useState(false);

    const timeline = [
        { year: "2014", title: t("aboutPage.timeline.2014.title", "Kuruluş"), description: t("aboutPage.timeline.2014.desc", "Van'da küçük bir ofiste temellerimiz atıldı.") },
        { year: "2016", title: t("aboutPage.timeline.2016.title", "İlk Büyük Proje"), description: t("aboutPage.timeline.2016.desc", "Kamu sektöründe ilk büyük projeyi tamamladık.") },
        { year: "2018", title: t("aboutPage.timeline.2018.title", "Büyüme"), description: t("aboutPage.timeline.2018.desc", "Ekibimizi ve proje portföyümüzü genişlettik.") },
        { year: "2020", title: t("aboutPage.timeline.2020.title", "Sosyal Sorumluluk"), description: t("aboutPage.timeline.2020.desc", "Eğitim ve spor alanlarında sosyal sorumluluk projelerine başladık.") },
        { year: "2024", title: t("aboutPage.timeline.2024.title", "Liderlik"), description: t("aboutPage.timeline.2024.desc", "Bölgede lider mühendislik firması konumuna ulaştık.") },
    ];

    const team = [
        { name: "Reşat Kara", role: t("aboutPage.team.roles.v_president", "Başkan Vekili") },
        { name: "Mazlum Kara", role: t("aboutPage.team.roles.member", "Yönetim Kurulu Üyesi") },
        { name: "Av. Doğan Tunal", role: t("aboutPage.team.roles.legal", "Hukuk Müşaviri") },
        { name: "Yusuf Kapan", role: t("aboutPage.team.roles.engineer", "İnşaat Mühendisi, Yönetim Kurulu Üyesi") },
        { name: "Metin Öner", role: t("aboutPage.team.roles.financial", "Mali Müşavir, Yönetim Kurulu Üyesi") },
        { name: "Mert Miroğlu", role: t("aboutPage.team.roles.member", "Yönetim Kurulu Üyesi") },
        { name: "Çağrı Koç", role: t("aboutPage.team.roles.economist", "İktisatçı, Yönetim Kurulu Üyesi") },
    ];

    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=2000"
                    alt="Hakkımızda"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <div className="text-center text-white">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutPage.heroTitle")}</h1>
                            <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                                <Link href="/" className="hover:text-white transition-colors">{t("aboutPage.breadcrumbHome")}</Link>
                                <span>/</span>
                                <span className="text-white">{t("aboutPage.breadcrumbAbout")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t("aboutPage.heroSubtitle")}</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6" dangerouslySetInnerHTML={{ __html: t("aboutPage.title") }}></h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                <span dangerouslySetInnerHTML={{ __html: t("aboutPage.desc1") }}></span><br />
                                <span>{t("aboutPage.desc2")}</span>
                            </p>

                            {/* Farkımız Listesi */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">{t("aboutPage.differences.legal.title")}</h4>
                                    <p className="text-xs text-text-secondary">{t("aboutPage.differences.legal.desc")}</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">{t("aboutPage.differences.financial.title")}</h4>
                                    <p className="text-xs text-text-secondary">{t("aboutPage.differences.financial.desc")}</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">{t("aboutPage.differences.technical.title")}</h4>
                                    <p className="text-xs text-text-secondary">{t("aboutPage.differences.technical.desc")}</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">{t("aboutPage.differences.machinery.title")}</h4>
                                    <p className="text-xs text-text-secondary">{t("aboutPage.differences.machinery.desc")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded overflow-hidden shadow-xl">
                            <Image
                                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800"
                                alt="İnşaat"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Başkanın Mesajı */}
            <section id="baskanin-mesaji" className="py-20 bg-surface-secondary">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-1">
                            <div className="sticky top-32">
                                <div className="relative h-[400px] rounded overflow-hidden shadow-xl mb-6">
                                    <Image
                                        src="/ozcan-kara.jpg"
                                        alt="Özcan KARA"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="text-center">
                                    <h4 className="text-xl font-bold text-foreground">Özcan KARA</h4>
                                    <p className="text-primary font-medium">Yönetim Kurulu Başkanı</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-2">
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Kurumsal</h2>
                            <h3 className="text-4xl font-bold text-foreground mb-8">BAŞKANIN MESAJI</h3>
                            <div className="prose prose-lg max-w-none">
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    2014 yılında bu şirketi kurarken elimizde büyük imkânlar değil, büyük bir inanç ve sorumluluk duygusu vardı.
                                    Zor bir dönemde, belirsizliklerin ve ağır şartların içinde çıktığımız bu yolda; vazgeçmemeyi, yük taşımayı
                                    ve dimdik durmayı kendimize ilke edindik.
                                </p>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    İnşaat, enerji ve güvenlik gibi yüksek sorumluluk gerektiren alanlarda faaliyet göstermek; yalnızca teknik
                                    bilgi değil, sabır, cesaret ve ahlaklı bir duruş da ister. Biz bu yolda çoğu zaman zorlandık, kimi zaman
                                    yükümüz ağırlaştı; ancak hiçbir zaman işimizin onurundan ve emeğin değerinden ödün vermedik.
                                </p>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    Kamu projelerinde görev alırken şunu hiç unutmadık: Ortaya koyduğumuz her iş, yalnızca bir yapı ya da
                                    sistem değil; insanların güveni, emeği ve geleceğidir. Bu bilinçle hareket ettik, şartlar ne olursa olsun
                                    sorumluluğumuzdan kaçmadık.
                                </p>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    Bugün geldiğimiz noktada, yaşanan tüm zorlukların bizi daha güçlü, daha dikkatli ve daha kararlı kıldığını
                                    biliyoruz. Yolumuzdan döndürmeyen bu tecrübeler, yarınlara olan inancımızın en büyük teminatıdır.
                                </p>
                                <p className="text-text-secondary leading-relaxed mb-6">
                                    Bize güvenen tüm kurumlara, bu zor yolda birlikte yürüdüğümüz çalışma arkadaşlarımıza ve emeğini ortaya
                                    koyan herkese gönülden teşekkür ediyorum.
                                </p>
                                <p className="text-primary font-semibold text-lg italic mb-8">
                                    "Yük taşımayı bilenlerin, yarını inşa edeceğine inanıyoruz."
                                </p>
                                <div className="border-t border-gray-200 pt-6">
                                    <p className="text-foreground font-bold">Özcan KARA</p>
                                    <p className="text-text-secondary text-sm">Yönetim Kurulu Başkanı</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misyon ve Vizyon */}
            <section className="py-20 bg-surface-secondary">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Misyon */}
                        <div className="bg-white p-10 shadow-lg">
                            <h3 className="text-3xl font-bold text-foreground mb-6">{t("aboutPage.missionTitle")}</h3>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>{t("aboutPage.missionDesc1")}</p>
                                <p>{t("aboutPage.missionDesc2")}</p>
                                <p>{t("aboutPage.missionDesc3")}</p>
                                <p>{t("aboutPage.missionDesc4")}</p>
                            </div>
                        </div>

                        {/* Vizyon */}
                        <div className="bg-white p-10 shadow-lg">
                            <h3 className="text-3xl font-bold text-foreground mb-6">{t("aboutPage.visionTitle")}</h3>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>{t("aboutPage.visionDesc1")}</p>
                                <p>{t("aboutPage.visionDesc2")}</p>
                                <p>{t("aboutPage.visionDesc3")}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t("aboutPage.timelineSubtitle")}</h2>
                        <h3 className="text-4xl font-bold text-foreground">{t("aboutPage.timelineTitle")}</h3>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex gap-8 mb-8 last:mb-0"
                            >
                                <div className="w-20 flex-shrink-0">
                                    <span className="text-2xl font-bold text-primary">{item.year}</span>
                                </div>
                                <div className="flex-1 pb-8 border-l-2 border-gray-200 pl-8">
                                    <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                                    <p className="text-text-secondary text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team - Accordion */}
            <section id="yonetim" className="py-20 bg-surface-secondary">
                <div className="layout-container">
                    <button
                        onClick={() => setShowTeam(!showTeam)}
                        className="w-full text-center mb-8 cursor-pointer group"
                    >
                        <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">{t("aboutPage.teamSubtitle")}</h2>
                        <div className="flex items-center justify-center gap-4">
                            <h3 className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors">{t("aboutPage.teamTitle")}</h3>
                            <ChevronDown
                                size={32}
                                className={`text-primary transition-transform duration-300 ${showTeam ? "rotate-180" : ""}`}
                            />
                        </div>
                        <p className="text-text-secondary mt-4">{t("aboutPage.teamClickToView")}</p>
                    </button>

                    <AnimatePresence>
                        {showTeam && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
                                    {team.map((member) => (
                                        <div key={member.name} className="bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow border-l-4 border-primary">
                                            <div className="p-6 text-center">
                                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                    </svg>
                                                </div>
                                                <h4 className="font-bold text-foreground mb-1">{member.name}</h4>
                                                <p className="text-primary text-sm">{member.role}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
}
