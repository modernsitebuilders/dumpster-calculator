const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/images/cities';
const quality = 80;

console.log('🔄 Converting city images to WebP...');

fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('❌ Error reading directory:', err);
    return;
  }
  
  const imageFiles = files.filter(file => file.match(/\.(jpg|jpeg|png)$/i));
  console.log(`📁 Found ${imageFiles.length} images to convert`);
  
  imageFiles.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(inputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
    
    sharp(inputPath)
      .webp({ quality })
      .toFile(outputPath)
      .then(info => {
        const originalSize = fs.statSync(inputPath).size;
        const newSize = info.size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        console.log(`✅ ${file} → ${path.basename(outputPath)} (${savings}% smaller)`);
      })
      .catch(err => console.error(`❌ Error converting ${file}:`, err));
  });
});