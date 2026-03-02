const fs = require('fs');

const trPath = 'src/i18n/locales/tr.json';
const enPath = 'src/i18n/locales/en.json';

const trData = JSON.parse(fs.readFileSync(trPath));
const enData = JSON.parse(fs.readFileSync(enPath));

trData.contactPage = {
    heroTitle: "İLETİŞİM",
    heroSubtitle: "Bizimle iletişime geçin",
    addressTitle: "Adres",
    vanHQ: "Van Merkez:",
    ankaraBranch: "Ankara Şube:",
    phoneTitle: "Telefon",
    emailTitle: "E-posta",
    hoursTitle: "Çalışma Saatleri",
    hoursText: "Pazartesi - Cuma<br />08:00 - 17:00",
    formSubtitle: "İletişim Formu",
    formTitle: "BİZE YAZIN",
    successTitle: "Mesajınız Gönderildi!",
    successDesc: "En kısa sürede size dönüş yapacağız.",
    newMsgBtn: "Yeni Mesaj Gönder",
    errorMsg: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
    nameLabel: "Ad Soyad *",
    emailLabel: "E-posta *",
    phoneLabel: "Telefon",
    subjectLabel: "Konu *",
    options: {
        project: "Proje Bilgi Talebi",
        collab: "İş Birliği Teklifi",
        career: "Kariyer",
        other: "Diğer"
    },
    messageLabel: "Mesajınız *",
    sendBtn: "Gönder",
    sendingBtn: "Gönderiliyor..."
};

enData.contactPage = {
    heroTitle: "CONTACT",
    heroSubtitle: "Get in touch with us",
    addressTitle: "Address",
    vanHQ: "Van Headquarters:",
    ankaraBranch: "Ankara Branch:",
    phoneTitle: "Phone",
    emailTitle: "Email",
    hoursTitle: "Working Hours",
    hoursText: "Monday - Friday<br />08:00 - 17:00",
    formSubtitle: "Contact Form",
    formTitle: "WRITE TO US",
    successTitle: "Message Sent!",
    successDesc: "We will get back to you as soon as possible.",
    newMsgBtn: "Send New Message",
    errorMsg: "An error occurred while sending the message. Please try again.",
    nameLabel: "Full Name *",
    emailLabel: "Email *",
    phoneLabel: "Phone",
    subjectLabel: "Subject *",
    options: {
        project: "Project Information Request",
        collab: "Collaboration Offer",
        career: "Career",
        other: "Other"
    },
    messageLabel: "Your Message *",
    sendBtn: "Send",
    sendingBtn: "Sending..."
};

fs.writeFileSync(trPath, JSON.stringify(trData, null, 4));
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
