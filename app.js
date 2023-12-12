const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Menyediakan file statis (HTML, CSS, gambar, dll.)
app.use(express.static('public'));

// Menjalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
