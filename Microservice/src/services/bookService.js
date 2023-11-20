const axios = require('axios');

// Replace 'YOUR_API_KEY' with your New York Times API key
//see the link https://developer.nytimes.com/get-started
const apiKey = 'YOUR_KEY';

const endpoint = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json';

async function fetchBestSellers() {
  try {
    const response = await axios.get(endpoint, { params: { 'api-key': apiKey } });
    if (response.status === 200) {
      return response.data.results.books.slice(0, 10);
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    throw new Error(`Error: ${error.message}`);
  }
}

module.exports = {
  fetchBestSellers,
};
