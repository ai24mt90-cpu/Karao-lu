const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
let enData = JSON.parse(fs.readFileSync(enPath));

// Fix en.json nesting to match tr.json
if (enData.about && !enData.home.about) {
    enData.home.about = enData.about;
    delete enData.about;
}
if (enData.servicesTitle && !enData.home.servicesTitle) {
    enData.home.servicesTitle = enData.servicesTitle;
    delete enData.servicesTitle;
}
if (enData.services && !enData.home.services) {
    enData.home.services = enData.services;
    delete enData.services;
}
if (enData.slogan && !enData.home.slogan) {
    enData.home.slogan = enData.slogan;
    delete enData.slogan;
}
if (enData.quickLinks && !enData.home.quickLinks) {
    enData.home.quickLinks = enData.quickLinks;
    delete enData.quickLinks;
}
if (enData.cta && !enData.home.cta) {
    enData.home.cta = enData.cta;
    delete enData.cta;
}

// Add missing HomeProjects keys
const projectsTr = {
    "subtitle": "KURUMSAL PROJELER",
    "title": "Projelerimiz",
    "viewAll": "Tümünü Gör",
    "viewAllMobile": "Tüm Projeleri Gör"
};

const projectsEn = {
    "subtitle": "CORPORATE PROJECTS",
    "title": "Our Projects",
    "viewAll": "View All",
    "viewAllMobile": "View All Projects"
};

trData.home.projects = { ...trData.home.projects, ...projectsTr };
enData.home.projects = { ...enData.home.projects, ...projectsEn };

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
