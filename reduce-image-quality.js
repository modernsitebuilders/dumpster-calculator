const sharp = require('sharp');
const fs = require('fs');

const files = fs.readdirSync('./public/images/cities/').filter(f => f.endsWith('.jpg'));

files.forEach(file => {
  const input = `./public/images/cities/${file}`;
  const output = `./public/images/cities/${file.replace('.jpg', '.webp')}`;
  
  sharp(input)
    .webp({ quality: 70 })
    .toFile(output)
    .then(() => console.log(`Reduced: ${file}`))
    .catch(err => console.error(`Error processing ${file}:`, err));
});