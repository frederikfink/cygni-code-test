// import fetch from '../utils/fetchWithTimeout.js'
import fetch from 'node-fetch';

async function get(req, res) {

  console.log(req.params);

  let keyword = req.query.keyword;
  let page = req.query.page;
  
  let response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=28a501d82528fc0b2ef18b3429d4f916&text=${keyword}&format=json&nojsoncallback=1&per_page=100&page=${page}`
  );

  let data = await response.json()

  res.header('Access-Control-Allow-Origin', '*');
  res.json(data);
}

export default get