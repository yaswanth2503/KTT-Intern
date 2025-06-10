const express = require('express');
const multer = require('multer');
const { Pool } = require('pg');
const path = require('path');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'postgres',          // <-- change this
  host: 'localhost',
  database: 'samplewarrantytracker',      // <-- change this
  password: 'root',  // <-- change this
  port: 5432,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) console.error('DB connection error:', err);
  else console.log('DB connected:', res.rows[0].now);
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(express.static(path.join(__dirname, 'public')));

// Upload multiple images (name="images" in form)
app.post('/upload', upload.array('images', 10), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).send('No files uploaded');
    }

    const buffersArray = req.files.map(file => file.buffer);
    const originalNames = req.files.map(f => f.originalname);

    // Save image names joined by comma, and images as bytea[]
    await pool.query(
      'INSERT INTO images (name, image) VALUES ($1, $2)',
      [originalNames.join(','), buffersArray]
    );

    res.send('Multiple images saved successfully!');
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).send('Error saving images');
  }
});

// Get all entries with images metadata (id, names)
app.get('/images', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name FROM images ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching images');
  }
});

// Serve specific image from bytea[] by index (index 1-based)
app.get('/images/:id/:index', async (req, res) => {
  try {
    const id = req.params.id;
    const index = parseInt(req.params.index, 10);

    const result = await pool.query('SELECT image FROM images WHERE id = $1', [id]);
    if (result.rows.length === 0) return res.status(404).send('Image record not found');

    const imagesArray = result.rows[0].image;
    if (!imagesArray || index < 1 || index > imagesArray.length) {
      return res.status(404).send('Image not found at this index');
    }

    res.setHeader('Content-Type', 'image/jpeg'); // Change if images might be PNG etc.
    res.send(imagesArray[index - 1]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching image');
  }
});

// Handle favicon.ico requests silently
app.get('/favicon.ico', (req, res) => res.status(204).end());

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
