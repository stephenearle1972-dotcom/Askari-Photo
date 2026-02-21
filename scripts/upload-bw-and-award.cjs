const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const BW_DIR = 'F:/My Drive/Askari Photography/Website Ready/Black & White';
const CHEETAH_FILE = 'F:/My Drive/Askari Photography/Awards/Untitled Export/20101012_8658.jpg';

async function uploadFile(filePath, folder, publicId) {
  const opts = {
    folder,
    public_id: publicId,
    overwrite: true,
    resource_type: 'image',
  };
  // For large files, add quality reduction
  const stat = fs.statSync(filePath);
  if (stat.size > 10 * 1024 * 1024) {
    opts.eager = [{ quality: 'auto:good', fetch_format: 'jpg' }];
    // Upload with transformation to reduce size
    opts.transformation = { quality: 'auto:good' };
  }
  console.log(`Uploading: ${path.basename(filePath)} → ${folder}/${publicId} (${(stat.size / 1024 / 1024).toFixed(1)}MB)`);
  try {
    const result = await cloudinary.uploader.upload(filePath, opts);
    console.log(`  ✓ Done: ${result.public_id} (${result.width}x${result.height})`);
    return result;
  } catch (err) {
    console.error(`  ✗ Failed: ${err.message}`);
    return null;
  }
}

async function main() {
  const results = [];

  // Upload B&W images
  console.log('\n=== Uploading Black & White images ===\n');
  const bwFiles = fs.readdirSync(BW_DIR).filter(f => /\.(jpg|jpeg|png|tif)$/i.test(f));
  console.log(`Found ${bwFiles.length} B&W images\n`);

  for (const file of bwFiles) {
    const publicId = path.basename(file, path.extname(file));
    const result = await uploadFile(path.join(BW_DIR, file), 'askari/black-white', publicId);
    if (result) results.push(result);
  }

  // Upload cheetah award image
  console.log('\n=== Uploading Cheetah Award image ===\n');
  if (fs.existsSync(CHEETAH_FILE)) {
    const result = await uploadFile(CHEETAH_FILE, 'askari/awards', 'cheetah-family-climbing-tree-masai-mara');
    if (result) results.push(result);
  } else {
    console.log('Cheetah file not found at:', CHEETAH_FILE);
  }

  // Summary
  console.log(`\n=== Summary ===`);
  console.log(`Uploaded: ${results.length} images`);
  console.log('\nImage details for catalog.ts:\n');
  for (const r of results) {
    const aspect = r.width >= r.height ? 'landscape' : 'portrait';
    console.log(`{ publicId: '${r.public_id}', width: ${r.width}, height: ${r.height}, aspect: '${aspect}' },`);
  }
}

main().catch(console.error);
