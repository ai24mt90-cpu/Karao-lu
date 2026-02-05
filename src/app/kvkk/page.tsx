"use client";

import { motion } from "framer-motion";

export default function KVKKPage() {
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
                        KVKK Aydınlatma Metni
                    </motion.h1>
                    <p className="mt-4 text-white/80">Kişisel Verilerin Korunması Kanunu</p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16">
                <div className="layout-container max-w-4xl">
                    <div className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-bold text-foreground mb-6">1. Veri Sorumlusu</h2>
                        <p className="text-text-secondary mb-6">
                            Karaoğlu Universal Mühendislik Ltd. Şti. olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında veri sorumlusu sıfatıyla kişisel verilerinizi işlemekteyiz.
                        </p>
                        <p className="text-text-secondary mb-6">
                            <strong>Adres:</strong> Hafiziye Mah. Umman 1. Sokak No: 38, Kat: 3, D: 16, 65130 İpekyolu/Van<br />
                            <strong>E-posta:</strong> karaogluuniversal@gmail.com<br />
                            <strong>Telefon:</strong> 0432 216 56 36
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">2. İşlenen Kişisel Veriler</h2>
                        <p className="text-text-secondary mb-4">Web sitemiz üzerinden aşağıdaki kişisel verilerinizi işlemekteyiz:</p>
                        <ul className="list-disc pl-6 text-text-secondary mb-6">
                            <li>Kimlik bilgileri (Ad, Soyad)</li>
                            <li>İletişim bilgileri (E-posta, Telefon)</li>
                            <li>Form mesaj içerikleri</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">3. Kişisel Verilerin İşlenme Amaçları</h2>
                        <p className="text-text-secondary mb-4">Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
                        <ul className="list-disc pl-6 text-text-secondary mb-6">
                            <li>İletişim taleplerinin karşılanması</li>
                            <li>Proje tekliflerinin hazırlanması</li>
                            <li>Müşteri ilişkilerinin yönetilmesi</li>
                            <li>Yasal yükümlülüklerin yerine getirilmesi</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">4. Kişisel Verilerin Aktarımı</h2>
                        <p className="text-text-secondary mb-6">
                            Kişisel verileriniz, yasal zorunluluklar haricinde üçüncü kişilerle paylaşılmamaktadır. Verileriniz yurt dışına aktarılmamaktadır.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">5. Kişisel Verilerin Saklanma Süresi</h2>
                        <p className="text-text-secondary mb-6">
                            Kişisel verileriniz, işleme amacının gerektirdiği süre boyunca ve yasal saklama süreleri kapsamında muhafaza edilmektedir.
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">6. KVKK Kapsamındaki Haklarınız</h2>
                        <p className="text-text-secondary mb-4">KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
                        <ul className="list-disc pl-6 text-text-secondary mb-6">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
                            <li>Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme</li>
                            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme</li>
                            <li>KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-foreground mb-6 mt-10">7. Başvuru Yöntemi</h2>
                        <p className="text-text-secondary mb-6">
                            KVKK kapsamındaki haklarınızı kullanmak için karaogluuniversal@gmail.com adresine e-posta gönderebilir veya yukarıda belirtilen adrese yazılı başvuru yapabilirsiniz.
                        </p>

                        <div className="mt-10 p-6 bg-surface-secondary rounded-lg">
                            <p className="text-sm text-text-secondary">
                                <strong>Son Güncelleme:</strong> Ocak 2026<br />
                                Bu aydınlatma metni, yasal değişiklikler doğrultusunda güncellenebilir.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
