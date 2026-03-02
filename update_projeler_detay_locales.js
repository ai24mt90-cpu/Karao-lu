const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.projectDetail = {
    notFound: "Proje Bulunamadı",
    notFoundDesc: "Aradığınız proje mevcut değil veya kaldırılmış olabilir.",
    backToList: "Projeler Listesine Dön",
    allProjects: "Tüm Projeler",
    detailsSoon: "Proje detayları yakında eklenecektir.",
    projectImages: "Proje Görselleri",
    imageAlt: "Görsel",
    projectInfo: "Proje Bilgileri",
    client: "İşveren / Kurum",
    area: "Toplam Alan",
    year: "Proje Yılı",
    location: "Lokasyon",
    contactUsTitle: "Bize Ulaşın",
    contactUsDesc: "Bu proje hakkında daha fazla bilgi almak için bizimle iletişime geçebilirsiniz.",
    contactBtn: "İletişime Geç",
    statusCompleted: "Tamamlandı",
    statusOngoing: "Devam Ediyor"
};

enData.projectDetail = {
    notFound: "Project Not Found",
    notFoundDesc: "The project you are looking for does not exist or may have been removed.",
    backToList: "Back to Projects List",
    allProjects: "All Projects",
    detailsSoon: "Project details will be added soon.",
    projectImages: "Project Images",
    imageAlt: "Image",
    projectInfo: "Project Information",
    client: "Client / Institution",
    area: "Total Area",
    year: "Project Year",
    location: "Location",
    contactUsTitle: "Contact Us",
    contactUsDesc: "You can contact us to get more information about this project.",
    contactBtn: "Contact Us",
    statusCompleted: "Completed",
    statusOngoing: "Ongoing"
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
