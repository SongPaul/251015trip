// Node.js로 아이콘 생성하기
const fs = require('fs');

// Canvas 라이브러리가 없으므로 SVG로 각 크기별 아이콘 생성
const sizes = [16, 32, 72, 96, 128, 144, 152, 192, 384, 512];

function createSVGIcon(size) {
    const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- 배경 -->
  <rect width="${size}" height="${size}" rx="${size * 0.15}" fill="url(#bg)"/>
  
  <!-- 벚꽃 모양 -->
  <circle cx="${size/2}" cy="${size * 0.35}" r="${size * 0.12}" fill="#FFB6C1" opacity="0.8"/>
  <circle cx="${size/2 - size * 0.08}" cy="${size * 0.31}" r="${size * 0.05}" fill="#FF69B4"/>
  <circle cx="${size/2 + size * 0.08}" cy="${size * 0.31}" r="${size * 0.05}" fill="#FF69B4"/>
  <circle cx="${size/2}" cy="${size * 0.27}" r="${size * 0.05}" fill="#FF69B4"/>
  <circle cx="${size/2 - size * 0.05}" cy="${size * 0.39}" r="${size * 0.05}" fill="#FF69B4"/>
  <circle cx="${size/2 + size * 0.05}" cy="${size * 0.39}" r="${size * 0.05}" fill="#FF69B4"/>
  
  <!-- 텍스트 -->
  ${size >= 128 ? `
  <text x="${size/2}" y="${size * 0.62}" font-family="Arial, sans-serif" font-size="${size * 0.09}" font-weight="bold" text-anchor="middle" fill="white">상해</text>
  <text x="${size/2}" y="${size * 0.72}" font-family="Arial, sans-serif" font-size="${size * 0.07}" font-weight="bold" text-anchor="middle" fill="white">여행</text>
  ` : size >= 72 ? `
  <text x="${size/2}" y="${size * 0.65}" font-family="Arial, sans-serif" font-size="${size * 0.12}" font-weight="bold" text-anchor="middle" fill="white">상해</text>
  ` : `
  <text x="${size/2}" y="${size * 0.65}" font-family="Arial, sans-serif" font-size="${size * 0.15}" font-weight="bold" text-anchor="middle" fill="white">상</text>
  `}
  
  ${size >= 192 ? `
  <!-- 작은 아이콘들 -->
  <circle cx="${size/2 - size * 0.15}" cy="${size * 0.82}" r="${size * 0.06}" fill="white" opacity="0.8"/>
  <text x="${size/2 - size * 0.15}" y="${size * 0.85}" font-family="Arial, sans-serif" font-size="${size * 0.04}" text-anchor="middle" fill="#667eea">✈</text>
  
  <circle cx="${size/2}" cy="${size * 0.82}" r="${size * 0.06}" fill="white" opacity="0.8"/>
  <text x="${size/2}" y="${size * 0.85}" font-family="Arial, sans-serif" font-size="${size * 0.04}" text-anchor="middle" fill="#667eea">🍽</text>
  
  <circle cx="${size/2 + size * 0.15}" cy="${size * 0.82}" r="${size * 0.06}" fill="white" opacity="0.8"/>
  <text x="${size/2 + size * 0.15}" y="${size * 0.85}" font-family="Arial, sans-serif" font-size="${size * 0.04}" text-anchor="middle" fill="#667eea">📱</text>
  ` : ''}
</svg>`;
    
    return svg;
}

// SVG 파일들 생성
sizes.forEach(size => {
    const svg = createSVGIcon(size);
    fs.writeFileSync(`icon-${size}.svg`, svg);
    console.log(`icon-${size}.svg 생성 완료`);
});

console.log('모든 아이콘 SVG 파일이 생성되었습니다!');
console.log('PNG 변환은 온라인 도구나 generate-icons.html을 사용하세요.');