const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.privacyPage = {
    heroTitle: "Gizlilik Politikası",
    heroSubtitle: "Veri güvenliğiniz bizim için önemlidir",
    introTitle: "Giriş",
    introText: "Karaoğlu Universal Mühendislik Ltd. Şti. olarak, web sitemizi ziyaret eden kullanıcılarımızın gizliliğine saygı duyuyor ve kişisel bilgilerinizi korumayı taahhüt ediyoruz. Bu Gizlilik Politikası, hangi bilgileri topladığımızı, nasıl kullandığımızı ve koruduğumuzu açıklamaktadır.",
    collectedDataTitle: "Toplanan Bilgiler",
    collectedDataIntro: "Web sitemiz üzerinden aşağıdaki bilgileri toplayabiliriz:",
    collectedDataList: {
        i1: "İletişim formları aracılığıyla gönderilen ad, e-posta ve telefon bilgileri",
        i2: "Web sitesi kullanım verileri (çerezler aracılığıyla)",
        i3: "IP adresi ve tarayıcı bilgileri"
    },
    dataUsageTitle: "Bilgilerin Kullanımı",
    dataUsageIntro: "Topladığımız bilgiler aşağıdaki amaçlarla kullanılmaktadır:",
    dataUsageList: {
        i1: "İletişim taleplerinize yanıt vermek",
        i2: "Hizmetlerimiz hakkında bilgi sağlamak",
        i3: "Web sitemizi geliştirmek",
        i4: "Yasal yükümlülüklerimizi yerine getirmek"
    },
    cookiesTitle: "Çerez Kullanımı",
    cookiesText: "Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanmaktadır. Çerezler, tarayıcınız tarafından cihazınıza kaydedilen küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.",
    securityTitle: "Veri Güvenliği",
    securityText: "Kişisel bilgilerinizi korumak için teknik ve idari güvenlik önlemleri uygulamaktayız. Verileriniz yetkisiz erişime karşı korunmaktadır.",
    sharingTitle: "Üçüncü Taraflarla Paylaşım",
    sharingText: "Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmamaktadır. Verileriniz satılmaz veya kiralanmaz.",
    contactTitle: "İletişim",
    contactText: "Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:",
    email: "E-posta:",
    phone: "Telefon:",
    lastUpdateLabel: "Son Güncelleme:",
    lastUpdateDate: "Ocak 2026",
    updateNote: "Bu gizlilik politikası gerektiğinde güncellenebilir."
};

enData.privacyPage = {
    heroTitle: "Privacy Policy",
    heroSubtitle: "Your data security is important to us",
    introTitle: "Introduction",
    introText: "As Karaoğlu Universal Engineering Ltd. Co., we respect the privacy of the users visiting our website and are committed to protecting your personal information. This Privacy Policy explains what information we collect, how we use it, and how we protect it.",
    collectedDataTitle: "Collected Information",
    collectedDataIntro: "We may collect the following information through our website:",
    collectedDataList: {
        i1: "Name, email, and phone information sent via contact forms",
        i2: "Website usage data (via cookies)",
        i3: "IP address and browser information"
    },
    dataUsageTitle: "Use of Information",
    dataUsageIntro: "The information we collect is used for the following purposes:",
    dataUsageList: {
        i1: "To respond to your contact requests",
        i2: "To provide information about our services",
        i3: "To improve our website",
        i4: "To fulfill our legal obligations"
    },
    cookiesTitle: "Use of Cookies",
    cookiesText: "Our website uses cookies to improve the user experience. Cookies are small text files saved on your device by your browser. You can disable cookies from your browser settings.",
    securityTitle: "Data Security",
    securityText: "We implement technical and administrative security measures to protect your personal information. Your data is protected against unauthorized access.",
    sharingTitle: "Sharing with Third Parties",
    sharingText: "Your personal information is not shared with third parties except for legal obligations. Your data is not sold or rented.",
    contactTitle: "Contact",
    contactText: "You can contact us for your questions about our privacy policy:",
    email: "Email:",
    phone: "Phone:",
    lastUpdateLabel: "Last Update:",
    lastUpdateDate: "January 2026",
    updateNote: "This privacy policy may be updated as necessary."
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
