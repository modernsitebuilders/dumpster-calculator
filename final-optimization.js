const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function finalImageOptimization() {
  const inputDir = './public/images/blog';
  // Target the specific large images we saw
  const targetFiles = [
    'dumpster-permit-guide.webp',
    'seasonal-cleanup.webp', 
    'weight-limits.webp',
    'landscaping-debris.webp',
    'construction-debris.webp'
  ];
  
  console.log('Final optimization of largest images...');
  
  for (const file of targetFiles) {
    const inputPath = path.join(inputDir, file);
    
    try {
      const stats = await fs.stat(inputPath);
      const sizeKB = Math.round(stats.size / 1024);
      
      if (sizeKB > 60) { // If still over 60KB
        console.log(`🎯 Final optimization: ${file} (${sizeKB}KB)`);
        
        const tempPath = path.join(inputDir, `temp_${file}`);
        
        await sharp(inputPath)
          .resize(800, 450, { 
            fit: 'cover',
            withoutEnlargement: true 
          })
          .webp({ 
            quality: 65,  // Very aggressive for largest files
            effort: 6
          })
          .toFile(tempPath);
        
        const newStats = await fs.stat(tempPath);
        const newSizeKB = Math.round(newStats.size / 1024);
        
        await fs.unlink(inputPath);
        await fs.rename(tempPath, inputPath);
        
        console.log(`✅ ${file}: ${sizeKB}KB → ${newSizeKB}KB`);
      }
    } catch (error) {
      console.log(`⚠️  ${file} not found or already optimized`);
    }
  }
  
  console.log('🏁 Final optimization complete!');
}

// Run: node final-optimization.js
finalImageOptimization();