const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

// 1. Homepage SEO
if(!trData.seo) trData.seo = {};
if(!enData.seo) enData.seo = {};

trData.seo.home = {
    title: "Karaoğlu | Karaoğlu Universal Mühendislik Ltd. Şti.",
    description: "Karaoğlu Universal Mühendislik Ltd. Şti. Türkiye merkezli mühendislik ve kamu altyapı projeleri geliştiren bir firmadır."
};
enData.seo.home = {
    title: "Karaoğlu | Karaoğlu Universal Mühendislik Ltd. Şti.",
    description: "Karaoğlu Universal Mühendislik Ltd. Şti. is an engineering and infrastructure company based in Turkey specializing in public infrastructure projects."
};

// 2. Hero Section 
if(!trData.home) trData.home = {};
if(!enData.home) enData.home = {};

trData.home.hero = {
    h1: "Karaoğlu Universal Mühendislik",
    desc: "Karaoğlu Universal Mühendislik Ltd. Şti. Türkiye genelinde altyapı ve mühendislik projeleri geliştiren bir kamu taahhüt firmasıdır."
};
enData.home.hero = {
    h1: "Karaoğlu Universal Mühendislik",
    desc: "Karaoğlu Universal Mühendislik Ltd. Şti. is a public contracting firm developing infrastructure and engineering projects across Turkey."
};

// 3. Brand Section
trData.home.aboutBrand = {
    title: "Karaoğlu Hakkında",
    content: "Karaoğlu Universal Mühendislik Ltd. Şti., Türkiye merkezli mühendislik ve altyapı projeleri geliştiren öncü bir firmadır. Karaoğlu, özellikle kamu altyapısı ve anahtar teslim mühendislik projelerinde uzmanlaşmıştır. Nitelikli projeleriyle sektörde adından söz ettiren Karaoğlu Universal Mühendislik, deneyimli kadrosuyla geleceğe değer katar. Güvenilir ve kalıcı çözümler için Karaoğlu'nu tercih edebilirsiniz."
};
enData.home.aboutBrand = {
    title: "About Karaoğlu",
    content: "Karaoğlu Universal Mühendislik Ltd. Şti. is an engineering and infrastructure company based in Turkey specializing in public infrastructure and turnkey engineering projects. Karaoğlu stands out in the industry with its qualified projects. Adding value to the future with its experienced staff, Karaoğlu Universal Mühendislik is your trusted partner. You can choose Karaoğlu for reliable and lasting solutions."
};

// 4. Brand Landing Page
trData.brandPage = {
    seo: {
        title: "Karaoğlu | Karaoğlu Universal Engineering",
        description: "Karaoğlu markası, mühendislik projeleri ve kamu altyapısı uzmanlığı hakkında detaylı bilgiler."
    },
    title: "Karaoğlu Markası",
    p1: "Karaoğlu Universal Mühendislik Ltd. Şti., kamu, sağlık ve eğitim gibi hayati sektörlerde üstlendiği nitelikli mühendislik projeleriyle Türkiye'nin gelişimine katkıda bulunur. Karaoğlu, kalite ve güveni vizyon edinmiştir.",
    p2: "Deneyimli mühendis ekibimiz sayesinde Karaoğlu olarak tamamladığımız tüm kamu altyapısı projelerinde sürdürülebilirlik odaklıyız. Türkiye'nin dört bir yanında iz bırakan Karaoğlu Universal Mühendislik, yeni nesil projeleriyle parlamaya devam ediyor. Geleceği inşa ederken Karaoğlu adını daha sık duyacaksınız."
};
enData.brandPage = {
    seo: {
        title: "Karaoğlu | Karaoğlu Universal Engineering",
        description: "Detailed information about the Karaoğlu brand, engineering projects, and public infrastructure expertise."
    },
    title: "The Karaoğlu Brand",
    p1: "Karaoğlu Universal Mühendislik Ltd. Şti. contributes to Turkey's development with its continuous qualified engineering projects in vital sectors such as public works, healthcare, and education. Karaoğlu operates with a vision centered on quality and trust.",
    p2: "Thanks to our experienced engineering team, as Karaoğlu, we focus on sustainability in all public infrastructure projects we complete. Leaving its mark all across Turkey, Karaoğlu Universal Mühendislik continues to shine with next-generation projects. You will hear the name Karaoğlu much more often while building the future."
};

// 6. Footer Optimization
trData.footer.brandInfo = {
    name: "Karaoğlu Universal Mühendislik Ltd. Şti.",
    desc: "Mühendislik & Altyapı Projeleri",
    country: "Türkiye"
};
enData.footer.brandInfo = {
    name: "Karaoğlu Universal Mühendislik Ltd. Şti.",
    desc: "Engineering & Infrastructure Projects",
    country: "Turkey"
};


fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
console.log('Successfully injected locales.');
