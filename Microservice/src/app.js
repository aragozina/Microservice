const express = require('express');
const bookService = require('./services/bookService');

const app = express();
const port = process.env.PORT || 3000;

app.get('/bestsellers', async (req, res) => {
  try {
    const books = await bookService.fetchBestSellers();
    res.json(books);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Sender Microservice is running at http://localhost:${port}`);
});
