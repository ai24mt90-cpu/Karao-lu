import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full bg-primary pt-16 pb-8 text-white">
            <div className="layout-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 text-white">
                            <Logo size={80} className="text-white" />
                            <div className="flex flex-col text-left">
                                <span className="text-xl font-bold tracking-tight leading-none">Karaoğlu</span>
                                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/70">Universal Mühendislik</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-sm leading-relaxed">
                            Mühendislikte mükemmellik ve toplumsal sorumluluk ilkesiyle, 2014'ten beri güven inşa ediyoruz.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white mb-2">Kurumsal</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/hakkimizda" className="text-sm text-white/70 hover:text-white transition-colors">Hakkımızda</Link>
                            <Link href="/hakkimizda#yonetim" className="text-sm text-white/70 hover:text-white transition-colors">Yönetim Kurulu</Link>
                        </nav>
                    </div>

                    {/* Projects */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white mb-2">Projeler</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/projeler?status=tamamlanan" className="text-sm text-white/70 hover:text-white transition-colors">Tamamlananlar</Link>
                            <Link href="/projeler?status=devam-eden" className="text-sm text-white/70 hover:text-white transition-colors">Devam Edenler</Link>
                            <Link href="/hayirseverlik" className="text-sm text-white/70 hover:text-white transition-colors">Sosyal Sorumluluk</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white mb-2">İletişim</h4>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:karaogluuniversal@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                                <Mail size={16} /> karaogluuniversal@gmail.com
                            </a>
                            <a href="tel:+904322165636" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                                <Phone size={16} /> 0432 216 56 36
                            </a>
                            <div className="flex items-start gap-3 text-sm text-white/70">
                                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                                <span>Hafiziye Mah. Umman 1. Sk. Fergul Insaat No: 2/20</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-8 text-center">
                    <p className="text-white/50 text-sm">
                        © {new Date().getFullYear()} Karaoğlu Universal Mühendislik Ltd. Şti. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
