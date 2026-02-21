const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const os = require('os');

cloudinary.config({
  cloud_name: 'dkn6tnxao',
  api_key: '121616344851181',
  api_secret: 'K34zGV_nBEP6kBLrHyQRZCIOOu0',
});

const filePath = 'F:/My Drive/Askari Photography/Awards/Untitled Export/20101012_8658.jpg';
const tempPath = path.join(os.tmpdir(), 'cheetah-compressed.jpg');

async function main() {
  console.log('Compressing cheetah image...');
  const info = await sharp(filePath)
    .jpeg({ quality: 85 })
    .toFile(tempPath);

  const stat = fs.statSync(tempPath);
  console.log(`Compressed: ${(stat.size / 1024 / 1024).toFixed(1)}MB (${info.width}x${info.height})`);

  if (stat.size > 10 * 1024 * 1024) {
    console.log('Still too large, reducing quality further...');
    await sharp(filePath)
      .resize({ width: 4000, withoutEnlargement: true })
      .jpeg({ quality: 80 })
      .toFile(tempPath);
    const stat2 = fs.statSync(tempPath);
    console.log(`Re-compressed: ${(stat2.size / 1024 / 1024).toFixed(1)}MB`);
  }

  console.log('Uploading to Cloudinary...');
  const result = await cloudinary.uploader.upload(tempPath, {
    folder: 'askari/awards',
    public_id: 'cheetah-family-climbing-tree-masai-mara',
    overwrite: true,
    resource_type: 'image',
  });

  console.log('Success:', result.public_id, result.width + 'x' + result.height);
  const aspect = result.width >= result.height ? 'landscape' : 'portrait';
  console.log(`{ publicId: '${result.public_id}', width: ${result.width}, height: ${result.height}, aspect: '${aspect}' }`);

  fs.unlinkSync(tempPath);
}

main().catch(console.error);
