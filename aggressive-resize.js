const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function aggressiveResize() {
  const inputDir = './public/images/blog';
  
  try {
    const files = await fs.readdir(inputDir);
    const webpFiles = files.filter(file => 
      path.extname(file).toLowerCase() === '.webp'
    );
    
    console.log(`Aggressively optimizing ${webpFiles.length} images`);
    
    for (const file of webpFiles) {
      const inputPath = path.join(inputDir, file);
      const tempPath = path.join(inputDir, `temp_${file}`);
      
      // More aggressive compression
      await sharp(inputPath)
        .resize(800, 450, { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 75,  // Lower quality for mobile
          effort: 6     // More compression effort
        })
        .toFile(tempPath);
      
      await fs.unlink(inputPath);
      await fs.rename(tempPath, inputPath);
      
      console.log(`✓ Aggressively optimized ${file}`);
    }
    
    console.log('\nAggressive optimization complete!');
    
  } catch (error) {
    console.error('Error:', error);
  }
}

aggressiveResize();