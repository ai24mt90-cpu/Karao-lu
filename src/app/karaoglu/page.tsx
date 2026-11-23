import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin, Landmark, HardHat, ChevronRight } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://karaoglumuhendislik.com.tr";

const faqs = [
    {
        q: "Karaoğlu Mühendislik nedir?",
        a: "Karaoğlu Universal Mühendislik Ltd. Şti., 2014 yılından bu yana kamu kurumları ve özel sektör için altyapı, üstyapı, konut ve iş merkezi projeleri yürüten bir mühendislik ve taahhüt firmasıdır.",
    },
    {
        q: "Karaoğlu Mühendislik nerede?",
        a: "Merkez ofisimiz Antalya Muratpaşa'da (Güzeloba Mah. Çağlayangil Caddesi 3B), şubemiz Ankara Çankaya'dadır. Projelerimizi Türkiye genelinde yürütüyoruz.",
    },
    {
        q: "Karaoğlu hangi projeleri yaptı?",
        a: "Bugüne kadar 64'ten fazla proje tamamladık. Bunlar arasında Van Bedesten Çarşısı ve Çevre Düzenlemesi (Van YİKOB), Çatak 89 Adet Konut ve Altyapı (Çevre ve Şehircilik Bakanlığı / TOKİ) ve İpekyolu Sahil Bandı 1. Etap (İpekyolu Belediyesi) yer alır.",
    },
    {
        q: "Karaoğlu Mühendislik'e nasıl ulaşırım?",
        a: "0532 673 65 56 numaralı telefondan, karaogluuniversal@gmail.com adresinden veya sitemizdeki iletişim formundan bize ulaşabilirsiniz.",
    },
];

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Karaoğlu Kimdir?", item: `${siteUrl}/karaoglu` },
    ],
};

const references = [
    { title: "Van Bedesten Çarşısı ve Çevre Düzenleme", client: "Van Yatırım İzleme ve Koordinasyon Başkanlığı" },
    { title: "Çatak 89 Adet Konut İnşaatı ve Altyapı", client: "T.C. Çevre ve Şehircilik Bakanlığı – TOKİ" },
    { title: "Sahil Bandı 1. Etap Yapım İşi", client: "İpekyolu Belediyesi" },
];

const areas = [
    { icon: Landmark, title: "Kamu Projeleri", text: "Valilik, belediye, adliye ve kamu hizmet binaları." },
    { icon: Building2, title: "Konut ve İş Merkezleri", text: "TOKİ konutları, toplu konut ve ticari yapılar." },
    { icon: HardHat, title: "Altyapı ve Çevre Düzenleme", text: "Sahil bandı, yol, peyzaj ve kentsel altyapı işleri." },
];

export default function KaraogluBrandPage() {
    return (
        <div className="flex flex-col bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

            <section className="relative h-[400px] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1541888086925-920a0bba0ec9?auto=format&fit=crop&q=80&w=2000"
                    alt="Karaoğlu Universal Mühendislik şantiye"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80" />
                <div className="relative z-10 layout-container text-center text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Karaoğlu Kimdir?</h1>
                    <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto">
                        Karaoğlu Universal Mühendislik: Antalya merkezli, Ankara şubeli kamu müteahhidi
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="layout-container max-w-4xl mx-auto space-y-6 text-text-secondary text-lg leading-relaxed">
                    <h2 className="text-3xl font-bold text-primary">Karaoğlu Universal Mühendislik Ltd. Şti.</h2>
                    <p>
                        <strong>Karaoğlu Universal Mühendislik</strong>, 2014 yılından bu yana kamu kurum ve kuruluşları ile
                        özel sektör için altyapı, üstyapı, konut ve iş merkezi projeleri yürüten bir mühendislik ve taahhüt
                        firmasıdır. Merkezimiz Antalya&apos;da, şubemiz Ankara&apos;dadır; projelerimizi Türkiye genelinde
                        yürütüyoruz.
                    </p>
                    <p>
                        Karaoğlu olarak bugüne kadar <strong>64&apos;ten fazla projeyi</strong> tamamladık. Bu projelerin büyük
                        bölümü 4734 sayılı Kamu İhale Kanunu kapsamında kamu kurumları için yürütülen yapım işleridir.
                        Kendi makine parkımız ve teknik kadromuzla işleri planlamadan kesin kabule kadar üstleniyoruz.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="layout-container">
                    <h2 className="text-3xl font-bold text-primary text-center mb-10">Karaoğlu&apos;nun Çalışma Alanları</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {areas.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="bg-white p-6 shadow-sm">
                                <Icon className="text-primary mb-4" size={32} />
                                <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
                                <p className="text-text-secondary">{text}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-8">
                        <Link href="/sektorler" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                            Tüm sektörler <ChevronRight size={16} />
                        </Link>
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="layout-container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-8">Karaoğlu Referans Projeleri</h2>
                    <ul className="divide-y divide-gray-200">
                        {references.map((r) => (
                            <li key={r.title} className="py-4">
                                <h3 className="font-bold text-foreground">{r.title}</h3>
                                <p className="text-text-secondary">{r.client}</p>
                            </li>
                        ))}
                    </ul>
                    <Link href="/projeler" className="mt-6 text-primary font-semibold hover:underline inline-flex items-center gap-1">
                        Karaoğlu&apos;nun tüm projeleri <ChevronRight size={16} />
                    </Link>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="layout-container max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 shadow-sm">
                        <MapPin className="text-primary mb-3" />
                        <h3 className="text-xl font-bold mb-2">Karaoğlu Antalya Merkez</h3>
                        <p className="text-text-secondary">Güzeloba Mah. Çağlayangil Caddesi 3B, Muratpaşa / Antalya</p>
                        <Link href="/iletisim" className="text-primary font-semibold hover:underline mt-3 inline-block">İletişim</Link>
                    </div>
                    <div className="bg-white p-6 shadow-sm">
                        <MapPin className="text-primary mb-3" />
                        <h3 className="text-xl font-bold mb-2">Karaoğlu Ankara Şube</h3>
                        <p className="text-text-secondary">Çankaya / Ankara – teknik koordinasyon ve ihale yönetimi</p>
                        <Link href="/ankara-teknik-koordinasyon" className="text-primary font-semibold hover:underline mt-3 inline-block">Ankara şubesi</Link>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="layout-container max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary mb-8">Karaoğlu Hakkında Sık Sorulanlar</h2>
                    <div className="space-y-6">
                        {faqs.map((f) => (
                            <div key={f.q}>
                                <h3 className="text-lg font-bold text-foreground mb-2">{f.q}</h3>
                                <p className="text-text-secondary leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
