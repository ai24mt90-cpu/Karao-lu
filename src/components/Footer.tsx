import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from "lucide-react";


export default function Footer() {
    return (
        <footer className="w-full bg-primary pt-16 pb-8 text-white">
            <div className="layout-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 text-white">
                            <div className="bg-white rounded-xl p-2">
                                <Image
                                    src="/logomavi.svg"
                                    alt="Karaoğlu Logo"
                                    width={100}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-xl font-bold tracking-tight leading-none">Karaoğlu</span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">Universal Mühendislik</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Van merkezli mühendislik firması. 2014&apos;ten beri altyapı, üstyapı ve kamu projelerinde güvenilir çözüm ortağınız.
                        </p>
                        {/* Social Media Links */}
                        <div className="flex items-center gap-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white mb-2">Kurumsal</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/hakkimizda" className="text-sm text-white/70 hover:text-white transition-colors">Hakkımızda</Link>
                            <Link href="/hakkimizda#yonetim" className="text-sm text-white/70 hover:text-white transition-colors">Yönetim Kurulu</Link>
                            <Link href="/iletisim" className="text-sm text-white/70 hover:text-white transition-colors">İletişim</Link>
                        </nav>
                    </div>

                    {/* Projects */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white mb-2">Projeler</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/projeler?category=tamamlandi" className="text-sm text-white/70 hover:text-white transition-colors">Tamamlanan Projeler</Link>
                            <Link href="/projeler?category=devam" className="text-sm text-white/70 hover:text-white transition-colors">Devam Eden Projeler</Link>
                            <Link href="/sosyal-sorumluluk" className="text-sm text-white/70 hover:text-white transition-colors">Sosyal Sorumluluk</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white mb-2">İletişim</h4>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:info@karaoglumuhendislik.com.tr" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                                <Mail size={16} /> info@karaoglumuhendislik.com.tr
                            </a>
                            <a href="tel:+904322165636" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                                <Phone size={16} /> 0432 216 56 36
                            </a>
                            <div className="flex items-start gap-3 text-sm text-white/70">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white/90 mb-0.5">Van Merkez:</span>
                                    <span>Hafiziye Mah. Umman 1. Sokak No: 38, Kat: 3, D: 16, 65130 İpekyolu/Van</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-white/70">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="block font-semibold text-white/90 mb-0.5">Ankara Şube:</span>
                                    <span>Next Level, Kızılırmak Mah. Dumlupınar Bulvarı No: 3C1/160, Kat: 29, 06530 Çankaya/Ankara</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legal Links */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-wrap justify-center gap-6 mb-4">
                        <Link href="/kvkk" className="text-sm text-white/60 hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
                        <Link href="/gizlilik" className="text-sm text-white/60 hover:text-white transition-colors">Gizlilik Politikası</Link>
                        <Link href="/iletisim" className="text-sm text-white/60 hover:text-white transition-colors">İletişim</Link>
                    </div>
                    <p className="text-white/70 text-sm text-center mb-2">
                        <strong>Van Mühendislik Firması</strong> – Hafiziye Mah. Umman 1. Sokak No: 38, Kat: 3, D: 16, 65130 İpekyolu/Van
                    </p>
                    <p className="text-white/50 text-sm text-center">
                        © {new Date().getFullYear()} Karaoğlu Universal Mühendislik Ltd. Şti. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
