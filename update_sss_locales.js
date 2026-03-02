const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.faqPage = {
    heroTitle: "SIKÇA SORULAN SORULAR",
    heroSubtitle: "Merak ettiklerinizi yanıtlıyoruz",
    searchPlaceholder: "Soru ara...",
    noResults: "Aradığınız sonuç bulunamadı.",
    ctaTitle: "Başka Sorularınız mı Var?",
    ctaDesc: "Ekibimiz size yardımcı olmaktan memnuniyet duyar.",
    ctaButton: "İletişime Geç",
    defaults: {
        q1: "Projeleriniz hangi bölgelerde gerçekleştiriliyor?",
        a1: "Projelerimiz ağırlıklı olarak Van ve çevre illerde gerçekleştirilmektedir. Kamu, konut ve altyapı projelerinde aktif olarak çalışmaktayız.",
        q2: "Teklif almak için nasıl başvurabilirim?",
        a2: "İletişim sayfamızdaki formu doldurarak veya doğrudan telefon numaramızdan bizimle iletişime geçebilirsiniz.",
        q3: "Şirketinizin tecrübesi ne kadar?",
        a3: "2014 yılından bu yana inşaat ve mühendislik sektöründe faaliyet göstermekteyiz. Bu süre zarfında onlarca proje başarıyla tamamlanmıştır.",
        q4: "Kalite belgeleriniz var mı?",
        a4: "Evet, ISO 9001 kalite belgesi ve sektörel sertifikalarımız mevcuttur.",
        q5: "Sosyal sorumluluk projeleriniz neler?",
        a5: "Eğitim, spor ve toplumsal alanlarda çeşitli projeler yürütmekteyiz. Okul bağışları, burs programları ve spor tesisleri bunların başında gelmektedir."
    }
};

enData.faqPage = {
    heroTitle: "FREQUENTLY ASKED QUESTIONS",
    heroSubtitle: "Answering what you wonder",
    searchPlaceholder: "Search for a question...",
    noResults: "No results found for your search.",
    ctaTitle: "Do you have other questions?",
    ctaDesc: "Our team will be happy to assist you.",
    ctaButton: "Contact Us",
    defaults: {
        q1: "In which regions are your projects carried out?",
        a1: "Our projects are mostly carried out in Van and surrounding provinces. We are actively working on public, housing and infrastructure projects.",
        q2: "How can I apply to get an offer?",
        a2: "You can contact us by filling out the form on our contact page or directly from our phone number.",
        q3: "How much experience does your company have?",
        a3: "We have been operating in the construction and engineering sector since 2014. During this time, dozens of projects have been successfully completed.",
        q4: "Do you have quality certificates?",
        a4: "Yes, we have ISO 9001 quality certificate and sectoral certificates.",
        q5: "What are your social responsibility projects?",
        a5: "We carry out various projects in education, sports and social fields. School donations, scholarship programs and sports facilities are the leading ones."
    }
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
