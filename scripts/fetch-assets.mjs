// Downloads the raster images exported from Figma into public/assets/images.
// Usage: npm run assets            (skips files that already exist)
//        npm run assets -- --force (re-download everything)
import { mkdir, readFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'public', 'assets', 'images');
const force = process.argv.includes('--force');

const { images } = JSON.parse(
  await readFile(path.join(root, 'scripts', 'assets-manifest.json'), 'utf8')
);

await mkdir(outDir, { recursive: true });

let failed = 0;
for (const [name, url] of Object.entries(images)) {
  const file = path.join(outDir, name);
  const exists = await access(file).then(() => true, () => false);
  if (exists && !force) {
    console.log(`skip     ${name}`);
    continue;
  }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    await writeFile(file, Buffer.from(await res.arrayBuffer()));
    console.log(`saved    ${name}`);
  } catch (err) {
    failed += 1;
    console.error(`FAILED   ${name} (${err.message})`);
  }
}

if (failed) {
  console.error(`\n${failed} asset(s) failed. Re-export them from Figma into public/assets/images.`);
  process.exit(1);
}
console.log('\nAll assets ready.');
