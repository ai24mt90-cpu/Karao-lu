const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.nav = {
    ...trData.nav,
    aboutUsCorp: "Kurumsal",
    aboutUsPresident: "Başkanın Mesajı",
    aboutUsBoard: "Yönetim Kurulu",
    sectors: "Sektörler",
    sectorPublic: "Kamu Projeleri",
    sectorHealth: "Sağlık",
    sectorEdu: "Eğitim",
    sectorHousing: "Konut",
    sectorInfra: "Altyapı",
    projectsAll: "Tüm Projeler",
    projectsCompleted: "Tamamlanan Projeler",
    projectsOngoing: "Devam Eden Projeler",
    socialResp: "Sosyal Sorumluluk",
    blogNews: "Haberler",
    blogPosts: "Blog",
    menuClose: "Menüyü Kapat",
    menuOpen: "Menüyü Aç"
};

enData.nav = {
    ...enData.nav,
    aboutUsCorp: "Corporate",
    aboutUsPresident: "President's Message",
    aboutUsBoard: "Board of Directors",
    sectors: "Sectors",
    sectorPublic: "Public Projects",
    sectorHealth: "Health",
    sectorEdu: "Education",
    sectorHousing: "Housing",
    sectorInfra: "Infrastructure",
    projectsAll: "All Projects",
    projectsCompleted: "Completed Projects",
    projectsOngoing: "Ongoing Projects",
    socialResp: "Social Responsibility",
    blogNews: "News",
    blogPosts: "Blog",
    menuClose: "Close Menu",
    menuOpen: "Open Menu"
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
