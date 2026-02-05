"use client";

import { motion } from "framer-motion";

export default function GizlilikPage() {
    return (
        <div className="flex flex-col bg-background">
            {/* Hero Banner */}
            <section className="relative h-[300px] bg-primary flex items-center justify-center">
                <div className="layout-container text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold"
                    >
                        Gizlilik Politikası
                    </motion.h1>
                    <p className="mt-4 text-white/80">Veri güvenliğiniz bizim için önemlidir</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="layout-container max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Giriş</h2>
                        <p className="text-text-secondary mb-6">
                            Karaoğlu Universal Mühendislik Ltd. Şti. olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyor ve kişisel bilgilerinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, hangi bilgileri topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Toplanan Bilgiler</h2>
                        <p className="text-text-secondary mb-4">Web sitemiz üzerinden aşağıdaki bilgileri toplayabiliriz:</p>
                        <ul className="list-disc pl-6 text-text-secondary mb-6">
                            <li>İletişim formları aracılığıyla gönderilen ad, e-posta ve telefon bilgileri</li>
                            <li>Web sitesi kullanım verileri (çerezler aracılığıyla)</li>
                            <li>IP adresi ve tarayıcı bilgileri</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Bilgilerin Kullanımı</h2>
                        <p className="text-text-secondary mb-4">Topladığımız bilgiler aşağıdaki amaçlarla kullanılmaktadır:</p>
                        <ul className="list-disc pl-6 text-text-secondary mb-6">
                            <li>İletişim taleplerinize yanıt vermek</li>
                            <li>Hizmetlerimiz hakkında bilgi sağlamak</li>
                            <li>Web sitemizi geliştirmek</li>
                            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Çerez Kullanımı</h2>
                        <p className="text-text-secondary mb-6">
                            Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Çerezler, tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Veri Güvenliği</h2>
                        <p className="text-text-secondary mb-6">
                            Kişisel bilgilerinizi korumak için teknik ve idari güvenlik önlemleri uygulamaktayız. Verileriniz yetkisiz erişime karşı korunmaktadır.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">Üçüncü Taraflarla Paylaşım</h2>
                        <p className="text-text-secondary mb-6">
                            Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. Verileriniz satılmaz veya kiralanmaz.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">İletişim</h2>
                        <p className="text-text-secondary mb-6">
                            Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:<br /><br />
                            <strong>E-posta:</strong> karaogluuniversal@gmail.com<br />
                            <strong>Telefon:</strong> 0432 216 56 36
                        </p>

                        <div className="mt-10 p-6 bg-surface-secondary rounded-lg">
                            <p className="text-sm text-text-secondary">
                                <strong>Son Güncelleme:</strong> Ocak 2026<br />
                                Bu gizlilik politikası gerektiğinde güncellenebilir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
