const fs = require('fs');

const replaceInFile = (path, replacements) => {
    let content = fs.readFileSync(path, 'utf8');
    replacements.forEach(([search, replace]) => {
        content = content.split(search).join(replace);
    });
    fs.writeFileSync(path, content);
};

// 1. hakkimizda/layout.tsx
replaceInFile('src/app/hakkimizda/layout.tsx', [
    ['Van Merkez', 'Antalya Merkez'],
    ["Van'da altyapı", "Antalya'da altyapı"],
]);

// 2. iletisim/layout.tsx
replaceInFile('src/app/iletisim/layout.tsx', [
    ['Van Mühendislik Firması', 'Antalya Mühendislik Firması'],
    ["Van İpekyolu'nda", "Antalya Muratpaşa'da"],
]);

// 3. sektorler/layout.tsx
replaceInFile('src/app/sektorler/layout.tsx', [
    ['Van Mühendislik Sektörleri', 'Antalya Mühendislik Sektörleri'],
    ["Van'da kamu", "Türkiye genelinde kamu"],
    ["Van'da faaliyet gösterdiğimiz", "Türkiye genelinde faaliyet gösterdiğimiz"]
]);

// 4. projeler/layout.tsx
replaceInFile('src/app/projeler/layout.tsx', [
    ["Van ve Ankara'da", "Antalya ve Ankara'da"],
]);

// 5. layout.tsx
replaceInFile('src/app/layout.tsx', [
    ["Ankara ve Van merkezli", "Antalya ve Ankara merkezli"],
    ["Van kamu müteahhidi", "Antalya kamu müteahhidi"],
    ["Van Şube", "Antalya Merkez"],
    ["Van ve çevresinde kamu", "Antalya ve çevresinde kamu"],
    ["addressRegion: \"Van\"", "addressRegion: \"Antalya\""],
]);

