const sharp = require('sharp');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#2c1810"/>
  <path d="M96 416 V224 Q96 96 256 96 Q416 96 416 224 V416 Z" fill="none" stroke="#b8860b" stroke-width="24"/>
  <path d="M176 416 V288 Q176 208 256 208 Q336 208 336 288 V416 Z" fill="#b8860b" opacity="0.3"/>
  <circle cx="256" cy="80" r="24" fill="#d4a84b"/>
  <line x1="64" y1="416" x2="448" y2="416" stroke="#b8860b" stroke-width="20"/>
</svg>`;
const buf = Buffer.from(svg);

Promise.all([
  sharp(buf).resize(192, 192).png().toFile('public/icons/icon-192.png'),
  sharp(buf).resize(512, 512).png().toFile('public/icons/icon-512.png')
]).then(() => console.log('Icons created'))
  .catch(e => console.error(e));
