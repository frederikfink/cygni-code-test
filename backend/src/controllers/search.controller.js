// import fetch from '../utils/fetchWithTimeout.js'
import fetch from 'node-fetch';
import dotenv from 'dotenv';

async function get(req, res) {

  dotenv.config({ path: './.env' });
  const api_key = process.env.API_KEY;

  let keyword = req.query.keyword;
  let page = req.query.page;
  
  let response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&text=${keyword}&format=json&nojsoncallback=1&per_page=100&page=${page}`
  );

  let data = await response.json()

  res.json(data);
}

export default get