const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.aboutPage.desc1 = "<strong>Karaoğlu Universal Mühendislik</strong>, Antalya ve Ankara merkezli ofisleriyle altyapı, konut, iş merkezleri ve çeşitli üstyapı projeleri inşa ederek kamu ve özel sektörde kalite standartlarını daima yukarı taşıyan bir <a href='/karaoglu' class='text-primary hover:underline font-semibold'>Karaoğlu Universal Mühendislik</a> firmasıdır.";

enData.aboutPage.desc1 = "<strong>Karaoğlu Universal Mühendislik</strong> is a leading company based in Antalya and Ankara that continuously raises quality standards in the public and private sectors by building infrastructure, housing, business centers, and various superstructure projects under the <a href='/karaoglu' class='text-primary hover:underline font-semibold'>Karaoğlu Universal Mühendislik</a> brand.";

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
console.log('Fixed links in About Page JSON.');
