"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const timeline = [
    { year: "2014", title: "Kuruluş", description: "Van'da küçük bir ofiste temellerimiz atıldı." },
    { year: "2016", title: "İlk Büyük Proje", description: "Kamu sektöründe ilk büyük projeyi tamamladık." },
    { year: "2018", title: "Büyüme", description: "Ekibimizi ve proje portföyümüzü genişlettik." },
    { year: "2020", title: "Sosyal Sorumluluk", description: "Eğitim ve spor alanlarında sosyal sorumluluk projelerine başladık." },
    { year: "2024", title: "Liderlik", description: "Bölgede lider mühendislik firması konumuna ulaştık." },
];

const team = [
    { name: "Reşat Kara", role: "Başkan Vekili" },
    { name: "Mazlum Kara", role: "Yönetim Kurulu Üyesi" },
    { name: "Av. Doğan Tunal", role: "Hukuk Müşaviri" },
    { name: "Yusuf Kapan", role: "İnşaat Mühendisi, Yönetim Kurulu Üyesi" },
    { name: "Metin Öner", role: "Mali Müşavir, Yönetim Kurulu Üyesi" },
    { name: "Mert Miroğlu", role: "Yönetim Kurulu Üyesi" },
    { name: "Çağrı Koç", role: "İktisatçı, Yönetim Kurulu Üyesi" },
];

export default function AboutPage() {
    const [showTeam, setShowTeam] = useState(false);

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
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h1 className="text-5xl font-bold text-white mb-4">HAKKIMIZDA</h1>
                            <p className="text-white/80 text-lg">Karaoğlu Universal Mühendislik</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Content */}
            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Kurumsal</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">KAMU İHALE MEVZUATINA HAKİM,<br />TEKNİK KAPASİTESİ YÜKSEK MÜHENDİSLİK</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                <strong>Karaoğlu Universal Mühendislik</strong> olarak, inşaat sektöründe &apos;yap-sat&apos; değil, &apos;taahhüt ve proje yönetimi&apos; odaklı çalışıyoruz.
                                İpekyolu/Van merkezli firmamız, bugüne kadar Van Yatırım İzleme (YİKOB), Çevre ve Şehircilik Bakanlığı ve Yerel Yönetimler başta olmak üzere birçok resmi kurumun çözüm ortağı olmuştur.
                            </p>

                            {/* Farkımız Listesi */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">64+ Tamamlanan Kamu Projesi</h4>
                                    <p className="text-xs text-text-secondary">Kesin kabul süreçlerini sorunsuz yönetme deneyimi.</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">Finansal Güç</h4>
                                    <p className="text-xs text-text-secondary">Teminat ve hakediş süreçlerinde kesintisiz iş akışı.</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">Teknik Kadro</h4>
                                    <p className="text-xs text-text-secondary">Şantiyede değil, mevzuatta da uzman mühendis ekibi.</p>
                                </div>
                                <div className="bg-surface-secondary p-4 border-l-4 border-primary">
                                    <h4 className="font-bold text-foreground text-sm mb-1">Yerel Hakimiyet</h4>
                                    <p className="text-xs text-text-secondary">Van ve bölge coğrafyasının zorlu şartlarına uygun imalat kabiliyeti.</p>
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
                            <h3 className="text-3xl font-bold text-foreground mb-6">MİSYONUMUZ</h3>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    Karaoğlu Universal Mühendislik olarak, 2014 yılından bu yana kamu müteahhidi kimliğimizle;
                                    kamu kurum ve kuruluşları için yürüttüğümüz altyapı, üstyapı ve mühendislik projelerinde,
                                    mevzuata tam uyumlu, kaliteli ve sürdürülebilir yapılar inşa etmek temel misyonumuzdur.
                                </p>
                                <p>
                                    Kamu ihale mevzuatı, teknik şartnameler ve sözleşme hükümleri doğrultusunda; planlama,
                                    uygulama ve teslim süreçlerinin tamamında şeffaflık, hesap verebilirlik ve kamu yararını
                                    esas alarak hareket ederiz.
                                </p>
                                <p>
                                    Zamanında ve eksiksiz iş teslimi anlayışıyla, kamu kaynaklarının etkin ve verimli
                                    kullanılmasını öncelikli sorumluluğumuz olarak görürüz.
                                </p>
                                <p>
                                    Alanında uzman teknik kadromuz, deneyimli saha ekiplerimiz ve güçlü organizasyon yapımızla;
                                    kamu projelerinde güvenilir bir çözüm ortağı olmayı, ülkemizin altyapı ve üstyapı gelişimine
                                    kalıcı değerler kazandırmayı hedefleriz.
                                </p>
                            </div>
                        </div>

                        {/* Vizyon */}
                        <div className="bg-white p-10 shadow-lg">
                            <h3 className="text-3xl font-bold text-foreground mb-6">VİZYONUMUZ</h3>
                            <div className="space-y-4 text-text-secondary leading-relaxed">
                                <p>
                                    Ulusal ölçekte kamu müteahhitliği alanında; güvenilirliği, teknik yeterliliği ve iş
                                    disiplinine bağlılığıyla öne çıkan, kamu kurumları tarafından tercih edilen ve referans
                                    gösterilen bir mühendislik ve taahhüt firması olmak.
                                </p>
                                <p>
                                    Gelişen mühendislik teknolojilerini, güncel mevzuatı ve kalite standartlarını yakından
                                    takip ederek; çevreye duyarlı, uzun ömürlü ve yüksek teknik standartlara sahip projeler üretmek.
                                </p>
                                <p>
                                    Kurumsal yapısını sürekli geliştiren, insan kaynağına ve kalite yönetim sistemlerine
                                    yatırım yapan bir anlayışla; geleceğin kamu projelerinde sürdürülebilir ve istikrarlı
                                    bir şekilde büyümek.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Tarihçe</h2>
                        <h3 className="text-4xl font-bold text-foreground">GELİŞİM SÜRECİMİZ</h3>
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
                        <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Ekibimiz</h2>
                        <div className="flex items-center justify-center gap-4">
                            <h3 className="text-4xl font-bold text-foreground group-hover:text-primary transition-colors">YÖNETİM KURULU</h3>
                            <ChevronDown
                                size={32}
                                className={`text-primary transition-transform duration-300 ${showTeam ? "rotate-180" : ""}`}
                            />
                        </div>
                        <p className="text-text-secondary mt-4">Görüntülemek için tıklayın</p>
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
