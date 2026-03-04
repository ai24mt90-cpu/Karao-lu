const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

// Update footer
trData.footer.vanBranch = "Antalya Merkez:";
trData.footer.ankaraHQ = "Ankara Şube:";

enData.footer.vanBranch = "Antalya Headquarters:";
enData.footer.ankaraHQ = "Ankara Branch:";

// Update home.about
trData.home.about.title = "ANTALYA VE ANKARA'DA<br />KAMU PROJELERİNİN<br />GÜVENİLİR ÇÖZÜM ORTAĞI";
trData.home.about.desc1 = "<strong>Karaoğlu Universal Mühendislik</strong>, Antalya ve Ankara ofisleriyle Türkiye genelinde kamu taahhüt işleri yürütmektedir.";
trData.home.cta.desc = "Kamu projeleri ve teknik müşavirlik hizmetleri için Antalya veya Ankara ofisimizle iletişime geçebilirsiniz.";

enData.home.about.title = "THE RELIABLE SOLUTION PARTNER FOR<br />PUBLIC PROJECTS IN<br />ANTALYA AND ANKARA";
enData.home.about.desc1 = "<strong>Karaoğlu Universal Mühendislik</strong> carries out public contracting works throughout Turkey with its offices based in Antalya and Ankara.";
enData.home.cta.desc = "You can contact our Antalya or Ankara office for public projects and technical consultancy services.";

// Update aboutPage
trData.aboutPage.desc2 = "Antalya merkezli firmamız, bugüne kadar Van Yatırım İzleme (YİKOB), Çevre ve Şehircilik Bakanlığı ve Yerel Yönetimler başta olmak üzere birçok resmi kurumun çözüm ortağı olmuştur.";
enData.aboutPage.desc2 = "Our firm, based in Antalya, has been the solution partner of many official institutions, especially Van Investment Monitoring (YİKOB), Ministry of Environment and Urbanization, and Local Governments.";

// Note: leaving faqPage untouched "Projelerimiz ağırlıklı olarak Van ve çevre illerde gerçekleştirilmektedir"
// Same for "Sektörler" "Van ve çevresinde". Is it OK to leave them? 
// User said: "van ile ilgili birşey kalmasın sited Antalya artık ana merkez ankara ikinci şube olucak" and "projelerde ki van projelerine dokunma sakın"
// So maybe change the "Van ve çevresinde" to "Türkiye genelinde" or "Antalya, Van ve çevre illerde"?
// I'll change the general "Van ve çevresinde" to "Türkiye genelinde" where it describes operations, but keep "Van" in project details.

trData.faqPage.defaults.a1 = "Projelerimiz ağırlıklı olarak Antalya, Ankara, Van ve çevre illerde gerçekleştirilmektedir. Kamu, konut ve altyapı projelerinde aktif olarak çalışmaktayız.";
enData.faqPage.defaults.a1 = "Our projects are mostly carried out in Antalya, Ankara, Van and surrounding provinces. We are actively working on public, housing and infrastructure projects.";

// Contact Page
if (trData.contactPage.vanHQ) {
    trData.contactPage.vanHQ = "Antalya Merkez:";
}
if (enData.contactPage.vanHQ) {
    enData.contactPage.vanHQ = "Antalya Headquarters:";
}

// Sectors Page
trData.sectorsPage.heroDesc = "Türkiye genelinde faaliyet gösterdiğimiz sektörler hakkında detaylı bilgi edinin. Her sektörde uzman kadromuz ve deneyimimizle hizmetinizdeyiz.";
enData.sectorsPage.heroDesc = "Get detailed information about the sectors we operate across Turkey. We are at your service with our expert team and experience in every sector.";

trData.sectorsPage.list[4].description = "Yol, köprü, kanalizasyon ve şehir altyapısı projelerinde Türkiye genelinde hizmet sunuyoruz.";
enData.sectorsPage.list[4].description = "We provide services in Road, bridge, sewerage and city infrastructure projects across Turkey.";

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
