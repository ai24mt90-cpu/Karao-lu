import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-black pt-20 pb-12 text-white">
            <div className="layout-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4 text-white">
                            <Logo size={100} className="text-white" />
                            <div className="flex flex-col text-left">
                                <span className="text-xl font-black uppercase tracking-tighter leading-none">Karaoğlu</span>
                                <span className="text-[8px] font-medium uppercase tracking-[0.2em] text-white/70">Universal Mühendislik</span>
                            </div>
                        </div>
                        <p className="text-white/70 text-[11px] font-medium uppercase tracking-widest leading-loose max-w-xs">
                            Mühendislikte mükemmellik ve toplumsal sorumluluk ilkesiyle, 2014'ten beri güven inşa ediyoruz.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Kurumsal</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/hakkimizda" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">Hakkımızda</Link>
                            <Link href="/hakkimizda#yonetim" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">Yönetim Kurulu</Link>
                            <Link href="/kariyer" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">Kariyer</Link>
                        </nav>
                    </div>

                    {/* Projects */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Projeler</h4>
                        <nav className="flex flex-col gap-3">
                            <Link href="/projeler?status=tamamlanan" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">Tamamlananlar</Link>
                            <Link href="/projeler?status=devam-eden" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">Devam Edenler</Link>
                            <Link href="/hayirseverlik" className="text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">Sosyal Sorumluluk</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white">İletişim</h4>
                        <div className="flex flex-col gap-4">
                            <a href="mailto:karaogluuniversal@gmail.com" className="flex items-center gap-3 text-[10px] font-black tracking-widest text-white/70 hover:text-primary transition-colors">
                                <Mail size={14} className="opacity-40" /> karaogluuniversal@gmail.com
                            </a>
                            <a href="tel:+904322165636" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/70 hover:text-primary transition-colors">
                                <Phone size={14} className="opacity-40" /> 0432 216 56 36
                            </a>
                            <div className="flex items-start gap-3 text-[10px] font-black uppercase tracking-widest text-white/70">
                                <MapPin size={14} className="mt-0.5 flex-shrink-0 opacity-40" />
                                <span>2 Nisan Cad. Zerrin Taç Sitesi Karşısı No:65, İpekyolu/Van</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 text-center">
                    <p className="text-white/70/40 text-[9px] font-black uppercase tracking-[0.5em]">
                        © {new Date().getFullYear()} Karaoğlu Universal Mühendislik A.Ş. Tüm hakları saklıdır.
                    </p>
                </div>
            </div>
        </footer>
    );
}
