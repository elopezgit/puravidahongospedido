const fs = require('fs');
const pending = JSON.parse(fs.readFileSync('pending_images_aventus.json', 'utf8'));

// Split pending into 8 batches
const batchSize = 26;
for (let i = 0; i < 8; i++) {
  const slice = pending.slice(i * batchSize, (i + 1) * batchSize);
  fs.writeFileSync(`.opencode/batch_${i + 1}.json`, JSON.stringify(slice, null, 2));
}
console.log('Created 8 batch files.');
