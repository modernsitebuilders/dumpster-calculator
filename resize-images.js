const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function resizeImages() {
  const inputDir = './public/images/blog';
  
  try {
    const files = await fs.readdir(inputDir);
    const webpFiles = files.filter(file => 
      path.extname(file).toLowerCase() === '.webp'
    );
    
    console.log(`Found ${webpFiles.length} WebP files to resize`);
    
    for (const file of webpFiles) {
      const inputPath = path.join(inputDir, file);
      const tempPath = path.join(inputDir, `temp_${file}`);
      
      // Resize to 800x450 for blog cards
      await sharp(inputPath)
        .resize(800, 450, { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .webp({ quality: 85 })
        .toFile(tempPath);
      
      // Replace original with resized version
      await fs.unlink(inputPath);
      await fs.rename(tempPath, inputPath);
      
      console.log(`✓ Resized ${file} to 800x450`);
    }
    
    console.log('\nAll images resized successfully!');
    
  } catch (error) {
    console.error('Error resizing images:', error);
  }
}

resizeImages();