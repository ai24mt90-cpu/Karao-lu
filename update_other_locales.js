const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.maintenance = {
    title: "Bakımda",
    message: "Sitemiz şu anda güncellenmektedir. Lütfen daha sonra tekrar deneyiniz."
};

enData.maintenance = {
    title: "Under Maintenance",
    message: "Our website is currently being updated. Please try again later."
};

trData.kvkk = {
    heroTitle: "KVKK AYDINLATMA METNİ",
    heroSubtitle: "Kişisel Verilerin Korunması",
    title: "Kişisel Verilerin Korunması ve İşlenmesi Hakkında Aydınlatma Metni",
    intro: "Karaoğlu Universal Mühendislik Ltd. Şti. (\"Şirket\" veya \"Veri Sorumlusu\") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (\"KVKK\") uyarınca, sizlere sunduğumuz hizmetler kapsamında kişisel verilerinizin işlenmesi, korunması ve haklarınız konusunda sizleri bilgilendirmek isteriz.",
    dataCollectionTitle: "1. Kişisel Verilerin Toplanması, İşlenmesi ve İşleme Amaçları",
    dataCollectionText: "Toplanan kişisel verileriniz, Şirketimiz tarafından sunulan hizmetlerden yararlanmanız, Şirketimizin hukuki ve ticari güvenliğinin temini, ticari ve iş stratejilerimizin belirlenmesi amaçlarıyla KVKK'nın 5. ve 6. maddelerinde belirtilen şartlara uygun olarak işlenebilecektir.",
    dataTransferTitle: "2. İşlenen Kişisel Verilerin Kimlere ve Hangi Amaçla Aktarılabileceği",
    dataTransferText: "Kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilmesi doğrultusunda, yasal olarak yetkili kamu kurumları ve özel kişilere KVKK'nın 8. ve 9. maddelerinde belirtilen kişisel veri aktarımı şartları çerçevesinde aktarılabilecektir.",
    dataMethodTitle: "3. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi",
    dataMethodText: "Kişisel verileriniz, her türlü sözlü, yazılı veya elektronik ortamda, web sitemiz, iletişim formlarımız ve e-posta bildirimleri dahil olmak üzere çeşitli yöntemlerle yasal mevzuata uygun olarak toplanmaktadır.",
    rightsTitle: "4. KVKK Kapsamında Veri Sahibinin Hakları",
    rightsText: "KVKK'nın 11. maddesi uyarınca veri sahipleri; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, eksik veya yanlış işlenmişse düzeltilmesini isteme haklarına sahiptir."
};

enData.kvkk = {
    heroTitle: "CLPD CLARIFICATION TEXT",
    heroSubtitle: "Protection of Personal Data",
    title: "Clarification Text on the Protection and Processing of Personal Data",
    intro: "As Karaoğlu Universal Engineering Ltd. Co. (\"Company\" or \"Data Controller\"), in accordance with the Personal Data Protection Law No. 6698 (\"KVKK\"), we would like to inform you about the processing and protection of your personal data within the scope of the services we offer you and your rights.",
    dataCollectionTitle: "1. Collection, Processing of Personal Data and Purposes of Processing",
    dataCollectionText: "Your collected personal data may be processed in accordance with the conditions specified in Articles 5 and 6 of the KVKK for the purposes of benefiting from the services offered by our Company, ensuring the legal and commercial security of our Company, and determining our commercial and business strategies.",
    dataTransferTitle: "2. To Whom and For What Purpose the Processed Personal Data Can Be Transferred",
    dataTransferText: "Your personal data may be transferred to legally authorized public institutions and private persons within the framework of the personal data transfer conditions specified in Articles 8 and 9 of the KVKK, in line with the realization of the purposes stated above.",
    dataMethodTitle: "3. Method and Legal Reason for Collecting Personal Data",
    dataMethodText: "Your personal data is collected in accordance with the legal legislation through various methods, including every kind of oral, written or electronic environment, our website, communication forms and e-mail notifications.",
    rightsTitle: "4. Rights of the Data Subject within the Scope of KVKK",
    rightsText: "In accordance with Article 11 of the KVKK, data subjects have the right to; learn whether their personal data has been processed, request information regarding this if it has been processed, learn the purpose of processing and whether it is used in accordance with its purpose, and request correction if it is processed incompletely or incorrectly."
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
