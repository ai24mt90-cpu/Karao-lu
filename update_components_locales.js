const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.footer = {
    ...trData.footer,
    companySub: "Universal Mühendislik",
    contentLabel: "İçerik",
    vanBranch: "Van Şube:",
    ankaraHQ: "Ankara Merkez:",
    kvkkLabel: "KVKK Aydınlatma Metni",
    engineeringFirm: "Ankara Mühendislik Firması"
};

enData.footer = {
    ...enData.footer,
    companySub: "Universal Engineering",
    contentLabel: "Content",
    vanBranch: "Van Branch:",
    ankaraHQ: "Ankara Headquarters:",
    kvkkLabel: "CLPD Clarification Text",
    engineeringFirm: "Ankara Engineering Firm"
};

trData.widgets = {
    whatsapp: {
        message: "Merhaba, web sitenizden ulaşıyorum. Bilgi almak istiyorum.",
        ariaLabel: "WhatsApp ile iletişime geç",
        buttonText: "WhatsApp ile yazın"
    },
    floatingHome: {
        ariaLabel: "Yukarı Git"
    }
};

enData.widgets = {
    whatsapp: {
        message: "Hello, I am reaching out from your website. I want to get information.",
        ariaLabel: "Contact via WhatsApp",
        buttonText: "Message via WhatsApp"
    },
    floatingHome: {
        ariaLabel: "Go to Top"
    }
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
