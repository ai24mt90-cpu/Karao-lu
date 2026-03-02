const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.ramadan = {
    greeting: "رمضان كريم ✦ مبارك",
    titleLine1: "Ramazan Ayınız",
    titleLine2: "Mübarek Olsun",
    subtextLine1: "Karaoğlu Universal Mühendislik ailesi olarak",
    subtextLine2: "bu mübarek ayın bereketini paylaşıyoruz.",
    continueBtn: "Devam Et →"
};

enData.ramadan = {
    greeting: "Ramadan Kareem ✦ Mubarak",
    titleLine1: "Have a Blessed",
    titleLine2: "Ramadan",
    subtextLine1: "As the Karaoğlu Universal Engineering family",
    subtextLine2: "we share the blessings of this holy month.",
    continueBtn: "Continue →"
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
