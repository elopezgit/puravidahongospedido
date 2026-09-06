const fs = require('fs');
let content = fs.readFileSync('src/lib/defaultCatalog.ts', 'utf8');

const NEW_CATEGORIES = [
  { id: 'cat-arabes', name: 'Perfumes Árabes', icon: '🕌', description: 'Fragancias árabes premium' },
  { id: 'cat-inspiraciones', name: 'Inspiraciones & Extractos', icon: '💎', description: 'Esencias, Midoré, Only You y Plata' },
  { id: 'cat-decants', name: 'Miniaturas & Decants', icon: '🍾', description: 'Perfumes de bolsillo y muestras' },
  { id: 'cat-desodorantes', name: 'Desodorantes & Splash', icon: '💨', description: 'Cuidado personal' },
  { id: 'cat-pelo', name: 'Cuidado Capilar', icon: '💆', description: 'Productos para el cabello' }
];

const startCats = content.indexOf('export const DEFAULT_AVENTUS_CATEGORIES: DefaultCategory[] = [');
const endCats = content.indexOf('];', startCats) + 2;
const replacementCats = 'export const DEFAULT_AVENTUS_CATEGORIES: DefaultCategory[] = ' + JSON.stringify(NEW_CATEGORIES, null, 2) + ';';
content = content.substring(0, startCats) + replacementCats + content.substring(endCats);

const catMap = {
  'cat-extractos': 'cat-inspiraciones',
  'cat-midore': 'cat-inspiraciones',
  'cat-onlyyou': 'cat-inspiraciones',
  'cat-plata': 'cat-inspiraciones',
  'cat-miniaturas': 'cat-decants',
  'cat-miniaturas-50': 'cat-decants',
  'cat-tubitos': 'cat-decants'
};

for (const [oldCat, newCat] of Object.entries(catMap)) {
  content = content.replace(new RegExp(`"category_id": "${oldCat}"`, 'g'), `"category_id": "${newCat}"`);
}

fs.writeFileSync('src/lib/defaultCatalog.ts', content);
console.log('Updated defaultCatalog.ts successfully.');
