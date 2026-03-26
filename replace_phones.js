const fs = require('fs');

const filesToUpdate = [
    'src/components/Header.tsx',
    'src/components/Footer.tsx',
    'src/app/iletisim/page.tsx',
    'src/app/gizlilik/page.tsx',
    'src/app/kvkk/page.tsx',
    'src/app/layout.tsx',
    'src/app/ankara-teknik-koordinasyon/page.tsx'
];

const phoneRegexes = [
    { search: /0432 216 56 36/g, replace: '0532 673 65 56' },
    { search: /\+904322165636/g, replace: '+905326736556' },
    { search: /\+90-432-216-5636/g, replace: '+90-532-673-6556' },
    { search: /0534 032 65 69/g, replace: '0532 673 65 56' },
    { search: /\+90-534-032-6569/g, replace: '+90-532-673-6556' },
];

filesToUpdate.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;

        phoneRegexes.forEach(({ search, replace }) => {
            if (content.match(search)) {
                content = content.replace(search, replace);
                modified = true;
            }
        });

        if (modified) {
            fs.writeFileSync(file, content);
            console.log(`Updated ${file}`);
        }
    } catch (e) {
        console.error(`Could not update ${file}: ${e.message}`);
    }
});
