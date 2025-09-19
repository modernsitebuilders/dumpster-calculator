// convert-to-webp.js
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function convertToWebP() {
  const inputDir = './public/images/blog';
  
  try {
    // Read all files in the directory
    const files = await fs.readdir(inputDir);
    
    // Filter for PNG files
    const pngFiles = files.filter(file => 
      path.extname(file).toLowerCase() === '.png'
    );
    
    console.log(`Found ${pngFiles.length} PNG files to convert`);
    
    // Convert each PNG to WebP
    for (const file of pngFiles) {
      const inputPath = path.join(inputDir, file);
      const outputName = path.basename(file, '.png') + '.webp';
      const outputPath = path.join(inputDir, outputName);
      
      await sharp(inputPath)
        .webp({ quality: 85 }) // Adjust quality as needed (80-90 is usually good)
        .toFile(outputPath);
      
      console.log(`✓ Converted ${file} to ${outputName}`);
      
      // Optional: Delete the original PNG after successful conversion
      // await fs.unlink(inputPath);
      // console.log(`  Deleted original ${file}`);
    }
    
    console.log('\nConversion complete!');
    
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertToWebP();