const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function createMobileImages() {
  const inputDir = './public/images/blog';
  
  try {
    const files = await fs.readdir(inputDir);
    const webpFiles = files.filter(file => 
      path.extname(file).toLowerCase() === '.webp' && 
      !file.includes('mobile-') // Don't process mobile versions
    );
    
    console.log(`Creating mobile versions for ${webpFiles.length} images`);
    
    for (const file of webpFiles) {
      const inputPath = path.join(inputDir, file);
      const mobileFileName = file.replace('.webp', '-mobile.webp');
      const mobilePath = path.join(inputDir, mobileFileName);
      
      // Create 400x225 mobile version (half size)
      await sharp(inputPath)
        .resize(400, 225, { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .webp({ quality: 80 }) // Slightly lower quality for mobile
        .toFile(mobilePath);
      
      console.log(`✓ Created mobile version: ${mobileFileName}`);
    }
    
    console.log('\nAll mobile images created successfully!');
    
  } catch (error) {
    console.error('Error creating mobile images:', error);
  }
}

createMobileImages();