const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.sectorsPage = {
    heroTitle: "SEKTÖRLER",
    heroDesc: "Van ve çevresinde faaliyet gösterdiğimiz sektörler hakkında detaylı bilgi edinin. Her sektörde uzman kadromuz ve deneyimimizle hizmetinizdeyiz.",
    ctaTitle: "Projeniz İçin Teklif Alın",
    ctaDesc: "Hangi sektörde olursa olsun, projeniz için size en uygun çözümü sunmak için hazırız.",
    ctaBtn: "İletişime Geçin",
    list: [
        {
            title: "Kamu Projeleri",
            description: "Devlet kurumları, belediyeler ve kamu idareleri için inşaat ve mühendislik hizmetleri sunuyoruz.",
            details: [
                "Valilik ve kaymakamlık binaları",
                "Belediye hizmet binaları",
                "Jandarma ve emniyet tesisleri",
                "Adliye ve kamu ofisleri",
                "Kültür ve kongre merkezleri"
            ]
        },
        {
            title: "Sağlık Projeleri",
            description: "Modern sağlık tesisleri ve hastane altyapısı projelerinde uzmanlaşmış ekibimizle hizmet veriyoruz.",
            details: [
                "Devlet hastaneleri",
                "Sağlık ocakları ve poliklinikler",
                "Acil servis üniteleri",
                "Laboratuvar ve tanı merkezleri",
                "Hastane ek bina ve renovasyonları"
            ]
        },
        {
            title: "Eğitim Projeleri",
            description: "Okullar, üniversite kampüsleri ve eğitim tesisleri için kapsamlı inşaat çözümleri sunuyoruz.",
            details: [
                "İlkokul ve ortaokul binaları",
                "Lise ve meslek liseleri",
                "Üniversite kampüs binaları",
                "Spor salonları ve konferans salonları",
                "Yurt ve sosyal tesis binaları"
            ]
        },
        {
            title: "Konut Projeleri",
            description: "TOKİ projeleri ve toplu konut alanlarında güvenilir ve kaliteli inşaat hizmetleri veriyoruz.",
            details: [
                "TOKİ toplu konut projeleri",
                "Kentsel dönüşüm projeleri",
                "Sosyal konut projeleri",
                "Lojman ve personel konutları",
                "Çevre düzenlemesi ve altyapı"
            ]
        },
        {
            title: "Altyapı Projeleri",
            description: "Yol, köprü, kanalizasyon ve şehir altyapısı projelerinde Van ve çevresinde hizmet sunuyoruz.",
            details: [
                "Asfalt ve parke taşı döşeme",
                "Kanalizasyon ve yağmur suyu hatları",
                "İçme suyu şebekeleri",
                "Köprü ve menfez yapımı",
                "Şehir içi ulaşım projeleri"
            ]
        },
        {
            title: "Elektrik & Enerji",
            description: "Elektrik enerji nakil hatları, trafo merkezleri ve enerji altyapısı projelerinde uzmanız.",
            details: [
                "Enerji nakil hatları (ENH)",
                "Trafo merkezleri ve postalar",
                "Köy elektrik şebekeleri",
                "Aydınlatma sistemleri",
                "Jeneratör ve kesintisiz güç sistemleri"
            ]
        }
    ]
};

enData.sectorsPage = {
    heroTitle: "SECTORS",
    heroDesc: "Get detailed information about the sectors we operate in Van and its surroundings. We are at your service with our expert team and experience in every sector.",
    ctaTitle: "Get a Quote for Your Project",
    ctaDesc: "Regardless of the sector, we are ready to offer the most suitable solution for your project.",
    ctaBtn: "Contact Us",
    list: [
        {
            title: "Public Projects",
            description: "We offer construction and engineering services for government institutions, municipalities, and public administrations.",
            details: [
                "Governorship and district governorship buildings",
                "Municipality service buildings",
                "Gendarmerie and police branch facilities",
                "Courthouse and public offices",
                "Culture and congress centers"
            ]
        },
        {
            title: "Health Projects",
            description: "We serve with our team specialized in modern health facilities and hospital infrastructure projects.",
            details: [
                "State hospitals",
                "Health centers and polyclinics",
                "Emergency service units",
                "Laboratory and diagnostic centers",
                "Hospital annex building and renovations"
            ]
        },
        {
            title: "Education Projects",
            description: "We offer comprehensive construction solutions for schools, university campuses and educational facilities.",
            details: [
                "Primary and secondary school buildings",
                "High schools and vocational high schools",
                "University campus buildings",
                "Sports halls and conference halls",
                "Dormitory and social facility buildings"
            ]
        },
        {
            title: "Housing Projects",
            description: "We provide reliable and high-quality construction services in TOKİ projects and mass housing areas.",
            details: [
                "TOKİ mass housing projects",
                "Urban transformation projects",
                "Social housing projects",
                "Lodging and personnel housing",
                "Landscaping and infrastructure"
            ]
        },
        {
            title: "Infrastructure Projects",
            description: "We provide services in Road, bridge, sewerage and city infrastructure projects in Van and its surroundings.",
            details: [
                "Asphalt and cobblestone paving",
                "Sewerage and rainwater lines",
                "Drinking water networks",
                "Bridge and culvert construction",
                "In-city transportation projects"
            ]
        },
        {
            title: "Electricity & Energy",
            description: "We are experts in electrical power transmission lines, transformer centers and energy infrastructure projects.",
            details: [
                "Energy transmission lines (ENH)",
                "Transformer stations and posts",
                "Village electricity networks",
                "Lighting systems",
                "Generator and uninterruptible power systems"
            ]
        }
    ]
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
