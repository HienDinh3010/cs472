import http from 'http';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  const { url, method } = req;

  if (method === 'GET') {
    switch (url) {
      case '/image':
        try {
          const imagePath = path.join(__dirname, 'image.jpg');
          const data = await fs.readFile(imagePath);
          res.writeHead(200, { 'Content-Type': 'image/jpeg' });
          res.end(data);
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        }
        break;

      case '/pdf':
        try {
          const pdfPath = path.join(__dirname, 'document.pdf');
          const data = await fs.readFile(pdfPath);
          res.writeHead(200, { 'Content-Type': 'application/pdf' });
          res.end(data);
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        }
        break;

      case '/about':
        try {
          const txtPath = path.join(__dirname, 'about.txt');
          const data = await fs.readFile(txtPath, 'utf8');
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(data);
        } catch (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
        }
        break;

      case '/home':
      case '/':
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Welcome to my website');
        break;

      default:
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    res.end('Method Not Allowed');
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});