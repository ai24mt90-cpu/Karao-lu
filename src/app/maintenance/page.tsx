import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bakım Çalışması | Karaoğlu Universal Mühendislik",
    description: "Sitemiz şu anda bakım çalışması nedeniyle geçici olarak hizmet dışıdır.",
    robots: "noindex, nofollow",
};

export default function MaintenancePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center px-4">
            <div className="text-center text-white max-w-2xl">
                {/* Logo */}
                <div className="mb-8">
                    <svg
                        viewBox="0 0 100 100"
                        className="w-24 h-24 mx-auto text-white"
                        fill="currentColor"
                    >
                        <rect x="10" y="20" width="80" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="4" />
                        <path d="M30 50 L50 35 L70 50 L70 75 L30 75 Z" fill="currentColor" />
                        <rect x="45" y="55" width="10" height="20" fill="white" opacity="0.3" />
                    </svg>
                </div>

                {/* Başlık */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Bakım Çalışması
                </h1>

                {/* Alt başlık */}
                <p className="text-xl md:text-2xl text-white/80 mb-8">
                    Sitemiz şu anda bakım çalışması nedeniyle geçici olarak hizmet dışıdır.
                </p>

                {/* Bilgi kutusu */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg font-semibold">Kısa süre içinde geri döneceğiz</span>
                    </div>
                    <p className="text-white/70">
                        Sizlere daha iyi hizmet verebilmek için sitemizi güncelliyoruz.
                        En kısa sürede tekrar hizmetinizde olacağız.
                    </p>
                </div>

                {/* İletişim bilgileri */}
                <div className="space-y-3">
                    <p className="text-white/60 text-sm uppercase tracking-wider font-medium">
                        Acil durumlar için iletişim
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <a
                            href="tel:+904322165636"
                            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span>0432 216 56 36</span>
                        </a>
                        <a
                            href="mailto:info@karaoglumuhendislik.com.tr"
                            className="flex items-center gap-2 text-white hover:text-white/80 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span>info@karaoglumuhendislik.com.tr</span>
                        </a>
                    </div>
                </div>

                {/* Firma adı */}
                <div className="mt-12 pt-8 border-t border-white/20">
                    <p className="text-white/50 text-sm">
                        © 2024 Karaoğlu Universal Mühendislik Ltd. Şti.
                    </p>
                </div>
            </div>
        </div>
    );
}
