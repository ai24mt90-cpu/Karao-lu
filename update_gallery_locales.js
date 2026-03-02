const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.projectGallery = {
    photos: "Fotoğraflar",
    photoLabel: "Fotoğraf",
    statusCompleted: "Tamamlandı",
    statusOngoing: "Devam Ediyor"
};

enData.projectGallery = {
    photos: "Photos",
    photoLabel: "Photo",
    statusCompleted: "Completed",
    statusOngoing: "Ongoing"
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
