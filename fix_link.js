const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.home.aboutBrand.content = "<a href='/karaoglu' class='text-primary hover:underline font-semibold'>Karaoğlu Universal Mühendislik</a> Ltd. Şti., Türkiye merkezli mühendislik ve altyapı projeleri geliştiren öncü bir firmadır. Karaoğlu, özellikle kamu altyapısı ve anahtar teslim mühendislik projelerinde uzmanlaşmıştır. Nitelikli projeleriyle sektörde adından söz ettiren <a href='/karaoglu' class='text-primary hover:underline font-semibold'>Karaoğlu Universal Mühendislik</a>, deneyimli kadrosuyla geleceğe değer katar. Güvenilir ve kalıcı çözümler için Karaoğlu'nu tercih edebilirsiniz.";

enData.home.aboutBrand.content = "<a href='/karaoglu' class='text-primary hover:underline font-semibold'>Karaoğlu Universal Mühendislik</a> Ltd. Şti. is an engineering and infrastructure company based in Turkey specializing in public infrastructure and turnkey engineering projects. Karaoğlu stands out in the industry with its qualified projects. Adding value to the future with its experienced staff, <a href='/karaoglu' class='text-primary hover:underline font-semibold'>Karaoğlu Universal Mühendislik</a> is your trusted partner. You can choose Karaoğlu for reliable and lasting solutions.";

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
console.log('Fixed links in JSON.');
