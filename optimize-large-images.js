const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function optimizeLargeImages() {
  const inputDir = './public/images/blog';
  const maxSizeKB = 80; // Target max size in KB
  
  try {
    const files = await fs.readdir(inputDir);
    // Only process desktop images (not mobile versions)
    const webpFiles = files.filter(file => 
      path.extname(file).toLowerCase() === '.webp' && 
      !file.includes('mobile-')
    );
    
    console.log(`Checking ${webpFiles.length} desktop images for optimization`);
    
    for (const file of webpFiles) {
      const inputPath = path.join(inputDir, file);
      const stats = await fs.stat(inputPath);
      const sizeKB = Math.round(stats.size / 1024);
      
      if (sizeKB > maxSizeKB) {
        console.log(`📦 ${file} is ${sizeKB}KB - optimizing...`);
        
        const tempPath = path.join(inputDir, `temp_${file}`);
        
        // More aggressive compression for large images
        await sharp(inputPath)
          .resize(800, 450, { 
            fit: 'cover',
            withoutEnlargement: true 
          })
          .webp({ 
            quality: 70,  // Lower quality for oversized images
            effort: 6
          })
          .toFile(tempPath);
        
        // Check new size
        const newStats = await fs.stat(tempPath);
        const newSizeKB = Math.round(newStats.size / 1024);
        const savings = Math.round(((sizeKB - newSizeKB) / sizeKB) * 100);
        
        // Replace original
        await fs.unlink(inputPath);
        await fs.rename(tempPath, inputPath);
        
        console.log(`✅ ${file}: ${sizeKB}KB → ${newSizeKB}KB (${savings}% smaller)`);
      } else {
        console.log(`✓ ${file} is already optimized (${sizeKB}KB)`);
      }
    }
    
    console.log('\n🎉 Large image optimization complete!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

optimizeLargeImages();