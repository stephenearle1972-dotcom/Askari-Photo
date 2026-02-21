const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const os = require('os');

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const BW_DIR = 'F:/My Drive/Askari Photography/BW Prints/Untitled Export';
const MAMMALS_DIR = 'F:/My Drive/Askari Photography/Website Ready/Mammals';
const BIRDLIFE_DIR = 'F:/My Drive/Askari Photography/Website Ready/Birdlife';

// 15 B&W images to upload
const bwFiles = [
  'EF8A0973-Edit.jpg',
  'EF8A2310-Edit.jpg',
  'EF8A4422-Edit.jpg',
  'EF8A5330-Edit.jpg',
  'EF8A6327-Edit.jpg',
  'EF8A7921-Edit.jpg',
  'EF8A8319-Edit.jpg',
  'EF8A9381-Edit.jpg',
  'GY8F0370-Edit.jpg',
  'GY8F3869-Edit.jpg',
  'GY8F4476-Edit.jpg',
  'GY8F5271-Edit-Edit.jpg',
  'GY8F9172-Edit.jpg',
  'IMG_0178-Edit.jpg',
  'IMG_2071-Edit-Edit-2.jpg',
];

// 6 new colour images to upload
const colourFiles = [
  { dir: MAMMALS_DIR, file: 'leopard-in-tree-looking-at-camera-01.jpg', folder: 'askari/wildlife' },
  { dir: MAMMALS_DIR, file: 'leopard-standing-on-branch-01.jpg', folder: 'askari/wildlife' },
  { dir: MAMMALS_DIR, file: 'african-elephant-family-walking-dusk-01.jpg', folder: 'askari/wildlife' },
  { dir: MAMMALS_DIR, file: 'lion-male-snarling-close-up-artistic-01.jpg', folder: 'askari/wildlife' },
  { dir: BIRDLIFE_DIR, file: 'african-fish-eagle-in-flight-over-water-01.jpg', folder: 'askari/birdlife' },
  { dir: BIRDLIFE_DIR, file: 'common-ostrich-chick-close-up-burnt-01.jpg', folder: 'askari/birdlife' },
];

async function compressAndUpload(filePath, folder, publicId) {
  const stat = fs.statSync(filePath);
  let uploadPath = filePath;

  if (stat.size > 9 * 1024 * 1024) {
    const tempPath = path.join(os.tmpdir(), `compressed-${Date.now()}.jpg`);
    console.log(`  Compressing (${(stat.size / 1024 / 1024).toFixed(1)}MB)...`);
    await sharp(filePath)
      .resize({ width: 4000, withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toFile(tempPath);
    uploadPath = tempPath;
    const newStat = fs.statSync(tempPath);
    console.log(`  Compressed to ${(newStat.size / 1024 / 1024).toFixed(1)}MB`);
  }

  try {
    const result = await cloudinary.uploader.upload(uploadPath, {
      folder,
      public_id: publicId,
      overwrite: true,
      resource_type: 'image',
    });
    console.log(`  OK: ${result.public_id} (${result.width}x${result.height})`);
    if (uploadPath !== filePath) fs.unlinkSync(uploadPath);
    return result;
  } catch (err) {
    console.error(`  FAIL: ${err.message}`);
    if (uploadPath !== filePath && fs.existsSync(uploadPath)) fs.unlinkSync(uploadPath);
    return null;
  }
}

async function main() {
  const results = { bw: [], colour: [] };

  // Upload B&W images
  console.log('\n=== Uploading B&W images ===\n');
  for (const file of bwFiles) {
    const filePath = path.join(BW_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.log(`SKIP (not found): ${file}`);
      continue;
    }
    const publicId = path.basename(file, path.extname(file))
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '');
    console.log(`Uploading: ${file}`);
    const result = await compressAndUpload(filePath, 'askari/black-white', publicId);
    if (result) results.bw.push(result);
  }

  // Upload colour images
  console.log('\n=== Uploading Colour images ===\n');
  for (const { dir, file, folder } of colourFiles) {
    const filePath = path.join(dir, file);
    if (!fs.existsSync(filePath)) {
      console.log(`SKIP (not found): ${file}`);
      continue;
    }
    const publicId = path.basename(file, path.extname(file));
    console.log(`Uploading: ${file}`);
    const result = await compressAndUpload(filePath, folder, publicId);
    if (result) results.colour.push(result);
  }

  // Print summary
  console.log('\n=== B&W Results ===');
  for (const r of results.bw) {
    const aspect = r.width >= r.height ? 'landscape' : 'portrait';
    console.log(`{ publicId: '${r.public_id}', w: ${r.width}, h: ${r.height}, aspect: '${aspect}' },`);
  }

  console.log('\n=== Colour Results ===');
  for (const r of results.colour) {
    const aspect = r.width >= r.height ? 'landscape' : 'portrait';
    console.log(`{ publicId: '${r.public_id}', w: ${r.width}, h: ${r.height}, aspect: '${aspect}' },`);
  }

  console.log(`\nTotal uploaded: ${results.bw.length} B&W + ${results.colour.length} colour = ${results.bw.length + results.colour.length}`);
}

main().catch(console.error);
