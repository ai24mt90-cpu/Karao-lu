const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.aboutPage = {
    heroTitle: "HAKKIMIZDA",
    heroSubtitle: "HAKKIMIZDA BİLGİLER",
    breadcrumbHome: "Ana Sayfa",
    breadcrumbAbout: "Hakkımızda",
    title: "KAMU İHALE MEVZUATINA HAKİM,<br />TEKNİK KAPASİTESİ YÜKSEK MÜHENDİSLİK",
    desc1: "<strong>Karaoğlu Universal Mühendislik</strong> olarak, inşaat sektöründe 'yap-sat' değil, 'taahhüt ve proje yönetimi' odaklı çalışıyoruz.",
    desc2: "İpekyolu/Van merkezli firmamız, bugüne kadar Van Yatırım İzleme (YİKOB), Çevre ve Şehircilik Bakanlığı ve Yerel Yönetimler başta olmak üzere birçok resmi kurumun çözüm ortağı olmuştur.",
    differences: {
        legal: { title: "Mevzuat Hakimiyeti", desc: "4734 sayılı Kamu İhale Kanunu ve ilgili yönetmeliklere tam hakimiyet." },
        technical: { title: "Teknik Kapasite", desc: "Kesin kabul süreçlerini sorunsuz yönetme deneyimi." },
        financial: { title: "Finansal Güç", desc: "Büyük ölçekli kamu projelerini kendi öz sermayesiyle re-finanse edebilme yeteneği." },
        machinery: { title: "Makine Parkı", desc: "Projelerin hızını ve kalitesini artıran, sürekli yenilenen makine parkı." }
    },
    missionTitle: "MİSYONUMUZ",
    missionDesc1: "Karaoğlu Universal Mühendislik olarak, 2014 yılından bu yana kamu müteahhidi kimliğimizle; kamu kurum ve kuruluşları için yürüttüğümüz altyapı, üstyapı ve mühendislik projelerinde, mevzuata tam uyumlu, kaliteli ve sürdürülebilir yapılar inşa etmek temel misyonumuzdur.",
    missionDesc2: "Kamu ihale mevzuatı, teknik şartnameler ve sözleşme hükümleri doğrultusunda; planlama, uygulama ve teslim süreçlerinin tamamında şeffaflık, hesap verebilirlik ve kamu yararını esas alarak hareket ederiz.",
    missionDesc3: "Zamanında ve eksiksiz iş teslimi anlayışıyla, kamu kaynaklarının etkin ve verimli kullanılmasını öncelikli sorumluluğumuz olarak görürüz.",
    missionDesc4: "Alanında uzman teknik kadromuz, deneyimli saha ekiplerimiz ve güçlü organizasyon yapımızla; kamu projelerinde güvenilir bir çözüm ortağı olmayı, ülkemizin altyapı ve üstyapı gelişimine kalıcı değerler kazandırmayı hedefleriz.",
    visionTitle: "VİZYONUMUZ",
    visionDesc1: "Ulusal ölçekte kamu müteahhitliği alanında; güvenilirliği, teknik yeterliliği ve iş disiplinine bağlılığıyla öne çıkan, kamu kurumları tarafından tercih edilen ve referans gösterilen bir mühendislik ve taahhüt firması olmak.",
    visionDesc2: "Gelişen mühendislik teknolojilerini, güncel mevzuatı ve kalite standartlarını yakından takip ederek; çevreye duyarlı, uzun ömürlü ve yüksek teknik standartlara sahip projeler üretmek.",
    visionDesc3: "Kurumsal yapısını sürekli geliştiren, insan kaynağına ve kalite yönetim sistemlerine yatırım yapan bir anlayışla; geleceğin kamu projelerinde sürdürülebilir ve istikrarlı bir şekilde büyümek.",
    timelineTitle: "GELİŞİM SÜRECİMİZ",
    timelineSubtitle: "Tarihçe",
    teamTitle: "YÖNETİM KURULU",
    teamSubtitle: "Ekibimiz",
    teamClickToView: "Görüntülemek için tıklayın"
};

enData.aboutPage = {
    heroTitle: "ABOUT US",
    heroSubtitle: "ABOUT US INFORMATION",
    breadcrumbHome: "Home",
    breadcrumbAbout: "About Us",
    title: "ENGINEERING WITH HIGH TECHNICAL CAPACITY<br />MASTERING PUBLIC PROCUREMENT LEGISLATION",
    desc1: "As <strong>Karaoğlu Universal Engineering</strong>, we focus on 'contracting and project management' rather than 'build-and-sell' in the construction sector.",
    desc2: "Our firm, based in İpekyolu/Van, has been the solution partner of many official institutions, especially Van Investment Monitoring (YİKOB), Ministry of Environment and Urbanization, and Local Governments.",
    differences: {
        legal: { title: "Legislative Mastery", desc: "Full mastery of the Public Procurement Law No. 4734 and related regulations." },
        technical: { title: "Technical Capacity", desc: "Experience in smoothly managing final acceptance processes." },
        financial: { title: "Financial Strength", desc: "Ability to re-finance large-scale public projects with own equity." },
        machinery: { title: "Machinery Park", desc: "Constantly renewed machinery park that increases the speed and quality of projects." }
    },
    missionTitle: "OUR MISSION",
    missionDesc1: "As Karaoğlu Universal Engineering, with our public contractor identity since 2014; our main mission is to build high-quality and sustainable structures that are fully compliant with the legislation in the infrastructure, superstructure and engineering projects we carry out for public institutions and organizations.",
    missionDesc2: "In line with public procurement legislation, technical specifications and contract provisions; we act based on transparency, accountability and public interest in all planning, implementation and delivery processes.",
    missionDesc3: "With the understanding of timely and complete delivery of work, we consider the effective and efficient use of public resources as our primary responsibility.",
    missionDesc4: "With our expert technical staff, experienced field teams and strong organizational structure; we aim to be a reliable solution partner in public projects and to add permanent values to the infrastructure and superstructure development of our country.",
    visionTitle: "OUR VISION",
    visionDesc1: "To be an engineering and contracting company that stands out with its reliability, technical competence and adherence to work discipline in the field of public contracting on a national scale, and is preferred and referred to by public institutions.",
    visionDesc2: "By closely following developing engineering technologies, current legislation and quality standards; to produce projects that are environmentally friendly, long-lasting and have high technical standards.",
    visionDesc3: "With an understanding that constantly improves its corporate structure and invests in human resources and quality management systems; to grow sustainably and steadily in the public projects of the future.",
    timelineTitle: "OUR DEVELOPMENT PROCESS",
    timelineSubtitle: "History",
    teamTitle: "BOARD OF DIRECTORS",
    teamSubtitle: "Our Team",
    teamClickToView: "Click to view"
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
