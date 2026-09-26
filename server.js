// NOTE: File ini HANYA digunakan oleh preview container Google AI Studio agar dapat berjalan di port 3000.
// Di GitHub Pages, web ini tetap 100% statis murni (index.html, assets.js, asset/) tanpa server.
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets and files from the root directory
app.use(express.static(__dirname));

// Fallback to index.html for any remaining route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`DPS Rank Studio server running at http://0.0.0.0:${PORT}`);
});
