const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = process.env.PORT || 4000;

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/popular', async (req, res) => {
  try {
    // make a GET request to the sender microservice to fetch best sellers
    const response = await axios.get('http://localhost:3000/bestsellers');
    const books = response.data;

    // fill EJS template with the received data
    res.render('popular', { books });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Receiver Project is running at http://localhost:${port}/popular`);
});
