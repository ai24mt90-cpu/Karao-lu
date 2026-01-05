"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { History, ShieldCheck, Heart, Users, Target, Rocket } from "lucide-react";

const stats = [
    { label: "Yıllık Tecrübe", value: "30+" },
    { label: "Tamamlanan Proje", value: "150+" },
    { label: "m² İnşaat Alanı", value: "10M+" },
    { label: "Uzman Personel", value: "2K+" },
];

const timeline = [
    { year: "1993", title: "Kuruluş", description: "İstanbul'da, üç mühendis arkadaşın vizyonuyla küçük bir ofiste temellerimiz atıldı. İlk yıllarda konut projelerine odaklandık.", icon: "🏢" },
    { year: "2005", title: "İlk Kamu Projesi", description: "Sektördeki güvenilirliğimiz, Ankara Devlet Hastanesi inşası ile taçlandı. Kamu projelerindeki başarımız bu noktadan sonra ivme kazandı.", icon: "🏥" },
    { year: "2015", title: "Uluslararası Açılım", description: "Sınırlarımızı aştık. Balkanlar ve Orta Asya'da köprü, otoyol ve altyapı projeleri üstlenerek global bir marka olma yolunda ilerledik.", icon: "🌍" },
    { year: "2023", title: "Sürdürülebilirlik Ödülü", description: "Yeşil bina sertifikalı projelerimizle 'Yılın En Çevreci İnşaat Firması' ödülüne layık görüldük. Karbon ayak izimizi %40 azalttık.", icon: "🌱" },
];

const values = [
    { icon: <ShieldCheck size={40} className="text-primary" />, title: "Güven ve Şeffaflık", description: "Her projemizde taahhütlerimize sadık kalıyor, iş süreçlerimizi açık ve denetlenebilir bir şekilde yönetiyoruz." },
    { icon: <Target size={40} className="text-primary" />, title: "Mühendislik Mükemmelliği", description: "En son teknolojileri ve mühendislik çözümlerini kullanarak, dayanıklı ve estetik yapılar inşa ediyoruz." },
    { icon: <Heart size={40} className="text-primary" />, title: "Toplumsal Sorumluluk", description: "Kazancımızı toplumla paylaşıyor, eğitim ve çevre projelerine yatırım yaparak geleceğe katkı sağlıyoruz." },
];

const team = [
    { name: "Ahmet Yılmaz", role: "Yönetim Kurulu Başkanı", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZeF24-W91AnFo15aNiqsJQoRYdM2pLioRNKkg9MbXzYVzbi2tCU_kcDpVJph2EFFNaGZVojgBPzu40o-amTmC8MVZSU4MQJ3r4LTbKmM7HjVjGkx9PXpq-USiwSpka__95rUPuVhZv1ViXkn_XUip9Ns1KIuhtZ7hvqMPK0NS2xCSP-__46kgfKnwPg7ryYPScghq-Fhna8UrAOqolKanrm_5Z6Haa8AfNleP_10xSdg1UdyIAVoJGK5raWGRN1OHC_f3kyXDKw4E" },
    { name: "Elif Demir", role: "Genel Müdür", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAU9b7gelCCeExrokAFjFuYYYkTJnm6gQJ-GRQAaTngd1MAAk_H7KKOEz-HByv5q51aSWDJGzBsQ1MdDDyTozxXLIz0ZPgYaCOHHM-5d70AoA5LwkuPU9NyeIeTcMZYNNBuBNADn56OpeRHeKVUTiSLxRt93EXYujMn7HXurPh7KpMJbCitc-MsaiHJKuoNL47iPh6XybfCidBJnUjmuSzQAODWuJBMmn05wlFlvDuXcuw88Hnlfol1XdDsij1vCvA_-OGNghkrnm-7" },
    { name: "Caner Öztürk", role: "Baş Mimar", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhyu3E8yqnMBBL7-_sYwOBZcySWLQsMB4ghF9MJO0Zj0jvEVd4mk-Qw2dndI2jvg5maZk0wLu30_sPEU-Z0V2YwUZtwxJ5UlASEfbZkdMeeHMcEh_4mbcmULBQe34uI2dHctflrkdMdEKStnvwiHlCN27Em4RclZE8Q_7yB_Nq0mPuhIPu9FkVEIPHai5YlPRVdS29eEwrCAiC0rxiunAxeLheOSsHCqxVw-oC4kOYglVHQ5d2L1SeMNYvDxNuYsul9MADavSNV0Ly" },
    { name: "Zeynep Kaya", role: "Finans Direktörü", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBwFyCSk8WKuPy0E6hMTxS-dSqG5jGCHbDlo8hbl-50IBzmAWwxstGmbq7p7mT-RWxaWhhV7MopOOcdXXHDW5Pfx69wW7yI-9Qeptrs51nRlNrseieb0fuzDLZvsOCtSElJYtJ-Ckn4PN4qidz_6zoGpAz9JO18ZdLKFtTJpzSYAYglU5szLXS9Yh4VhQQqrkT-Z7ICOayGUIwXbjvacMmS0AZ-ySaVt6HmFrLYS2y47KWXyNu2PGLd8hMXiiuH8pPU9JkneAXx4aN9" },
];

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-20">
                <div className="layout-container">
                    <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEdGREEIEIgZIt3Ca6KJloVUS5uZ7599iWQ4tm1H7CGEvSQh62cykeMIQdxCYTWoClGtkTEYi61CgAAEZXeys5h6TfhnBdKOkP15MUSl9VRraWkcU7_JJ44yOpDkC7wXR-CiiLzjpk3n0zIxGzdhKS5DhHwUnoWLE3Ctw4aKBfj-TIvrS0AVJ1brJgbbrDeevGt5lImWTkagKrz7-4WF03xerdfXLYKsz1GtTf1owpamaTBKPDbycR6tT_j7HD0Nm0FtgurzXAvw6h"
                            alt="Skyscraper architectural detail"
                            fill
                            className="object-cover grayscale brightness-50"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-background/20">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
                            >
                                Temellerimiz Sağlam,<br /><span className="text-primary">Vizyonumuz Geniş</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="max-w-2xl text-lg text-gray-200"
                            >
                                1993'ten beri toplumsal fayda odaklı yapılar inşa ediyor, geleceğe kalıcı eserler bırakıyoruz.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro & Stats */}
            <section className="py-20">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl font-black tracking-tight">İnşa Etmekten Ötesi</h2>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Karaoğlu Universal Mühendislik olarak, sadece beton ve demiri bir araya getirmiyoruz; yaşam alanları, eğitim yuvaları ve sağlık kompleksleri ile toplumun geleceğini şekillendiriyoruz. 30 yılı aşkın süredir kamu projelerinde güvenin ve kalitenin simgesi olduk.
                            </p>
                            <p className="text-lg text-text-secondary leading-relaxed">
                                Her projemizde çevreye duyarlı, sürdürülebilir ve insan odaklı çözümler üretiyoruz. Bizim için her yapı bir toplumsal sözleşmedir.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, idx) => (
                                <div key={stat.label} className="flex flex-col items-center justify-center p-8 rounded-2xl bg-surface border border-border-brand hover:border-primary/50 transition-colors">
                                    <span className="text-4xl md:text-5xl font-black text-primary mb-2">{stat.value}</span>
                                    <span className="text-sm font-bold text-text-secondary text-center uppercase tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-surface/30">
                <div className="layout-container max-w-4xl">
                    <h2 className="text-3xl font-black text-center mb-16 tracking-tight">Tarihçemiz</h2>
                    <div className="relative border-l-2 border-border-brand ml-4 md:ml-0 md:mx-auto">
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="mb-12 ml-8 relative"
                            >
                                <div className="absolute -left-[41px] top-0 flex size-10 items-center justify-center rounded-full bg-background border-2 border-primary text-xl">
                                    {item.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-primary font-black text-2xl">{item.year} - {item.title}</span>
                                    <p className="text-text-secondary text-lg leading-relaxed mt-2">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24">
                <div className="layout-container">
                    <h2 className="text-3xl font-black text-center mb-16 tracking-tight">Değerlerimiz</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, idx) => (
                            <motion.div
                                key={v.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 rounded-3xl bg-surface border border-border-brand hover:border-primary transition-all group"
                            >
                                <div className="mb-6 group-hover:scale-110 transition-transform">{v.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                                <p className="text-text-secondary leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-background">
                <div className="layout-container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black tracking-tight mb-4">Yönetim Kadromuz</h2>
                        <p className="text-text-secondary text-lg">Tecrübesiyle yolumuza ışık tutan liderlerimiz.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((m, idx) => (
                            <motion.div
                                key={m.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group flex flex-col gap-4"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-transparent group-hover:border-primary/50 transition-colors">
                                    <Image
                                        src={m.image}
                                        alt={m.name}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
                                </div>
                                <div className="text-center">
                                    <h3 className="text-lg font-bold text-white">{m.name}</h3>
                                    <p className="text-primary text-sm font-bold uppercase tracking-wider">{m.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
