import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Briefcase, FileText, ChevronRight, MapPin, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Ankara Teknik Koordinasyon ve İhale Yönetim Merkezi | Karaoğlu Mühendislik',
    description: 'Karaoğlu Universal Mühendislik Ankara Şubesi; Bakanlık nezdinde teknik takip, ihale hazırlık süreçleri ve mühendislik koordinasyon hizmetleri sunmaktadır.',
    keywords: ['Ankara mühendislik firması', 'kamu ihale danışmanlığı Ankara', 'teknik koordinasyon merkezi', 'inşaat taahhüt Ankara ofisi'],
};

export default function AnkaraPage() {
    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner - Corporate & Minimal */}
            <section className="relative h-[400px]">
                <Image
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
                    alt="Karaoğlu Mühendislik Ankara"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/90" />
                <div className="absolute inset-0 flex items-center">
                    <div className="layout-container">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
                            Ankara Teknik Koordinasyon ve<br />İhale Yönetim Merkezi
                        </h1>
                        <p className="text-xl text-white/80 max-w-2xl">
                            Başkentte kamu kurumlarıyla teknik koordinasyon, ihale hazırlık süreçleri ve mühendislik müşavirlik hizmetleri.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content - Strategic & Technical */}
            <section className="py-20 bg-white">
                <div className="layout-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">FAALİYET ALANLARIMIZ</h2>
                            <h3 className="text-3xl font-bold text-foreground mb-6">MÜHENDİSLİK ÇÖZÜMLERİNİN<br />MERKEZİ YÖNETİMİ</h3>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                <strong>Karaoğlu Universal Mühendislik Ankara Şubesi</strong>, firmanın Türkiye genelindeki kamu projelerinin idari ve teknik koordinasyonunu sağlamak amacıyla Next Level'da faaliyet göstermektedir.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-6">
                                Bakanlıklar, Genel Müdürlükler ve Yatırımcı Kurumlar nezdinde yürütülen iş süreçlerinin takibi, hakediş ve kesin hesap dosyalarının yönetimi ve ihale hazırlık çalışmaları Ankara ofisimizden yürütülmektedir.
                            </p>

                            <div className="space-y-6 mt-8">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">İhale ve Sözleşme Yönetimi</h4>
                                        <p className="text-sm text-text-secondary">4734 Sayılı Kamu İhale Kanunu kapsamında teknik dosya hazırlığı ve sözleşme süreçlerinin takibi.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                        <Building2 size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Kurumsal Temsil</h4>
                                        <p className="text-sm text-text-secondary">Ankara merkezli idareler ile teknik görüşmelerin yapılması ve süreç koordinasyonu.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-surface-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary">
                                        <Briefcase size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground mb-1">Teknik Müşavirlik</h4>
                                        <p className="text-sm text-text-secondary">Altyapı ve üstyapı projelerinde mühendislik çözümleri ve proje yönetimi desteği.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact & Office Info */}
                        <div className="bg-surface-secondary p-8 rounded-xl h-fit border border-gray-100">
                            <h3 className="text-2xl font-bold text-foreground mb-6">İletişim Bilgileri</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-primary mt-1" size={20} />
                                    <div>
                                        <span className="block font-semibold text-foreground mb-1">Ankara Ofis</span>
                                        <p className="text-text-secondary text-sm">
                                            Next Level, Kızılırmak Mah. Dumlupınar Bulvarı No: 3C1/160, Kat: 29<br />
                                            06530 Çankaya/Ankara
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-primary" size={20} />
                                    <div>
                                        <span className="block font-semibold text-foreground mb-1">Telefon</span>
                                        <p className="text-text-secondary text-sm">0534 032 65 69</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-primary" size={20} />
                                    <div>
                                        <span className="block font-semibold text-foreground mb-1">E-Posta</span>
                                        <p className="text-text-secondary text-sm">karaogluuniversal@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <Link
                                    href="/iletisim"
                                    className="block w-full bg-primary text-white text-center py-3 rounded font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Randevu ve Görüşme
                                </Link>
                                <p className="text-xs text-text-secondary text-center mt-3">
                                    *Teknik görüşmeler için lütfen randevu alınız.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
                <div className="layout-container text-center">
                    <h2 className="text-3xl font-bold mb-4">Kamu Projeleriniz İçin Doğru Çözüm Ortağı</h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Van ve Ankara ofislerimizle, Türkiye'nin her noktasında nitelikli altyapı ve üstyapı projelerini hayata geçiriyoruz.
                    </p>
                    <Link
                        href="/projeler/kategori/tamamlanan-kamu-projeleri"
                        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 font-semibold hover:bg-white/90 transition-colors"
                    >
                        Referanslarımızı İnceleyin <ChevronRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
}
