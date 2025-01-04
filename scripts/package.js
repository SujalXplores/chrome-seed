import archiver from 'archiver';
import fs, { createWriteStream } from 'fs';
import { readFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const releasesDir = join(__dirname, '..', 'releases');
if (!fs.existsSync(releasesDir)) {
  fs.mkdirSync(releasesDir, { recursive: true });
}

async function createZip() {
  const manifest = JSON.parse(
    await readFile(join(__dirname, '../public/manifest.json'), 'utf-8')
  );
  const version = manifest.version;
  const zipPath = join(__dirname, `../releases/v${version}.zip`);
  const output = createWriteStream(zipPath);
  const archive = archiver('zip', {
    zlib: { level: 9 },
  });

  output.on('close', () => {
    console.log(`Archive created: ${zipPath}`);
    console.log(`Total bytes: ${archive.pointer()}`);
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  archive.directory(join(__dirname, '../dist/'), false);
  await archive.finalize();
}

createZip().catch(console.error);
