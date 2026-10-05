import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

/**
 * Image Placeholder Audit Script
 * Checks for unresolved image slots in the codebase.
 */
function checkUnresolvedPhotos() {
  const pagesDir = path.join(rootDir, 'pages');
  const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));
  
  let unresolvedCount = 0;
  console.log('\n--- RAMDHURA VISTA Photo Audit ---');

  for (const file of files) {
    const filePath = path.join(pagesDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const matches = content.match(/<Image[^>]*src=\{null\}[^>]*>/g) || [];
    
    if (matches.length > 0) {
      console.warn(`⚠️  [UNRESOLVED PHOTOS] ${file}: ${matches.length} placeholder slot(s) pending real photos`);
      unresolvedCount += matches.length;
    }
  }

  if (unresolvedCount > 0) {
    console.warn(`\nTotal unresolved photo slots: ${unresolvedCount}`);
    console.warn('Placeholders are actively rendered with clear labels. Real photos needed in /assets/images/real.\n');
  } else {
    console.log('✅ All image slots have authentic photographs.\n');
  }
}

checkUnresolvedPhotos();
