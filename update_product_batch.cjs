const fs = require('fs');
const { createClient } = require('@supabase/supabase-js');

const env = fs.readFileSync('.env', 'utf8');
const urlMatch = env.match(/VITE_SUPABASE_URL=(.*)/);
const keyMatch = env.match(/VITE_SUPABASE_ANON_KEY=(.*)/);
const supabase = createClient(urlMatch[1].trim(), keyMatch[1].trim());

/**
 * Updates products by code or id.
 * Pass an array of objects:
 * [
 *   {
 *     "code": "AVN-0336",
 *     "image_url": "https://...",
 *     "description": "..."
 *   }
 * ]
 */
async function updateBatch(updates) {
  for (const item of updates) {
    const { code, id, image_url, description, price, name } = item;
    const payload = {};
    if (image_url !== undefined) payload.image_url = image_url;
    if (description !== undefined) payload.description = description;
    if (price !== undefined) payload.price = price;
    if (name !== undefined) payload.name = name;

    let query = supabase.from('products').update(payload);
    if (code) {
      query = query.eq('code', code);
    } else if (id) {
      query = query.eq('id', id);
    } else {
      console.warn('Skipping item without code or id:', item);
      continue;
    }

    const { data, error } = await query.select();
    if (error) {
      console.error(`Error updating ${code || id}:`, error.message);
    } else {
      console.log(`Updated ${code || id} (${data?.[0]?.name || ''})`);
    }
  }
}

// If run with a JSON file as argument: node update_product_batch.cjs updates.json
if (process.argv[2]) {
  const filePath = process.argv[2];
  if (fs.existsSync(filePath)) {
    const updates = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    updateBatch(updates).then(() => console.log('Batch finished.'));
  } else {
    console.error('File not found:', filePath);
  }
}

module.exports = { updateBatch };
