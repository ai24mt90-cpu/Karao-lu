const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.home.projects = {
    ...trData.home.projects,
    p1: {
        title: "VAN BEDESTEN ÇARŞISI VE ÇEVRE DÜZENLEME",
        desc: "VAN YATIRIM İZLEME VE KOORDİNASYON BAŞKANLIĞI",
        cat: "Kamu"
    },
    p2: {
        title: "ÇATAK 89 ADET KONUT İNŞAATI VE ALTYAPI",
        desc: "T.C. ÇEVRE VE ŞEHİRCİLİK BAKANLIĞI TOKİ",
        cat: "Konut"
    },
    p3: {
        title: "SAHİL BANDI 1. ETAP YAPIM",
        desc: "İPEKYOLU BELEDİYESİ",
        cat: "Altyapı"
    }
};

enData.home.projects = {
    ...enData.home.projects,
    p1: {
        title: "VAN BEDESTEN BAZAAR AND LANDSCAPING",
        desc: "VAN INVESTMENT MONITORING AND COORDINATION DIRECTORATE",
        cat: "Public"
    },
    p2: {
        title: "ÇATAK 89 RESIDENTIAL CONSTRUCTION AND INFRASTRUCTURE",
        desc: "REPUBLIC OF TURKEY MINISTRY OF ENVIRONMENT AND URBANIZATION TOKİ",
        cat: "Housing"
    },
    p3: {
        title: "COASTAL BAND 1ST STAGE CONSTRUCTION",
        desc: "İPEKYOLU MUNICIPALITY",
        cat: "Infrastructure"
    }
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
