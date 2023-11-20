Microservice and main project are running on 2 different ports therefore need to be compiled separately!

To compile Microservice: 
Navigate to the folder 
Npm install 
npm run start 

To compile Receiver example: 
Navigate to the folder 
Npm install 
npm run start 

Make sure to input key for the API in bookService.js file in the Microservice project!!
Sign up is free : https://developer.nytimes.com/get-started

To request data use GET request 

Note: make sure to unable express, axios, and path packages with npm

Example call:

app.get('/popular', async (req, res) => {
  try {
    // make a GET request to the sender microservice to fetch best sellers
    const response = await axios.get('http://localhost:3000/bestsellers');
    const books = response.data;

    // fill EJS template with the received data or you can also do visuals in the same file if you prefer
    res.render('popular', { books });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).send('Internal Server Error');
  }
});


Data will be received using JSON package. 

Example call( Note that I'm using a app.get to get data that was processed by bookService.js file that requested data from an API):

app.get('/bestsellers', async (req, res) => {
  try {
    const books = await bookService.fetchBestSellers();
    res.json(books);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


![UML](./UML.jpg)

