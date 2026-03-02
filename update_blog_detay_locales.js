const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.blogDetail = {
    notFound: "Yazı Bulunamadı",
    notFoundDesc: "Aradığınız blog yazısı maalesef mevcut değil veya yayından kaldırılmış.",
    backToList: "Blog Listesine Dön",
    backToBlog: "Blog'a Dön",
    categoryGeneral: "Genel"
};

enData.blogDetail = {
    notFound: "Post Not Found",
    notFoundDesc: "The blog post you are looking for unfortunately does not exist or has been removed.",
    backToList: "Back to Blog List",
    backToBlog: "Back to Blog",
    categoryGeneral: "General"
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
