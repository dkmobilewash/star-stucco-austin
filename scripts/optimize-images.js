import sharp from 'sharp';
import { mkdirSync } from 'fs';

mkdirSync('public/images', { recursive: true });

async function createPlaceholder(width, height, filename, color = '#1e293b') {
  await sharp({
    create: {
      width,
      height,
      channels: 3,
      background: color,
    },
  })
    .webp({ quality: 80 })
    .toFile(`public/images/${filename}`);
  console.log(`Created ${filename} (${width}x${height})`);
}

async function convertLogo() {
  try {
    await sharp('public/image-removebg-preview.png')
      .resize(196, 196, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .webp({ quality: 90 })
      .toFile('public/images/star-stucco-logo.webp');
    console.log('Converted logo to 196x196 WebP');
  } catch (e) {
    console.log('Logo conversion failed, creating placeholder:', e.message);
    await createPlaceholder(196, 196, 'star-stucco-logo.webp', '#047857');
  }
}

await Promise.all([
  createPlaceholder(1200, 504, 'hero-stucco-austin.webp', '#0f172a'),
  createPlaceholder(665, 665, 'stucco-project-austin.webp', '#334155'),
  createPlaceholder(612, 612, 'commercial-stucco-austin.webp', '#475569'),
  createPlaceholder(662, 662, 'residential-stucco-austin.webp', '#1e293b'),
  convertLogo(),
]);

console.log('\nDone. To use real images, download originals and re-run conversion:');
console.log('  curl -L -o public/images/hero-stucco-austin.jpg "https://www.grandendeavorhomes.com/wp-content/uploads/2025/01/1-1-1500x630.jpg"');
console.log('  curl -L -o public/images/stucco-project-austin-original.jpg "https://verdebuildersaustin.com/wp-content/uploads/large-home-back-yard.jpg"');
console.log('  curl -L -o public/images/commercial-stucco-austin-original.jpg "https://media.istockphoto.com/id/1091082550/photo/new-row-homes.jpg?s=612x612&w=0&k=20&c=vmjiDszpujDRXyDhXu4Acnu4gCYCWnXG_zZZc0xxLwg="');
console.log('  curl -L -o public/images/residential-stucco-austin-original.jpg "https://s.wsj.net/public/resources/images/BN-TT668_0608au_12S_20170607152622.jpg?width=1280&height=1280"');
