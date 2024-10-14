// Convert lab 9 to lab 10:
// Step 1: Generate package.json "npm init -y"
// Step 2: In package.json file, add {"type":"module"}
// Step 3: Install express "npm install express"
// Step 4: Install nodemon "npm install nodemon"
// Step 5: In package.json file, at script, add {"start": "nodemon Question1.js"}
// To run application: "npm start"
import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/image', async (req, res) => {
  try {
    const imagePath = path.join(__dirname, 'image.jpg');
    const data = await fs.readFile(imagePath);
    res.contentType('image/jpeg').send(data);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

app.get('/pdf', async (req, res) => {
  try {
    const pdfPath = path.join(__dirname, 'document.pdf');
    const data = await fs.readFile(pdfPath);
    res.contentType('application/pdf').send(data);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

app.get('/about', async (req, res) => {
  try {
    const txtPath = path.join(__dirname, 'about.txt');
    const data = await fs.readFile(txtPath, 'utf8');
    res.contentType('text/plain').send(data);
  } catch (err) {
    res.status(500).send('Internal Server Error');
  }
});

app.get(['/', '/home'], (req, res) => {
  res.send('Welcome to my website');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});