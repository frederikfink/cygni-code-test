// import fetch from '../utils/fetchWithTimeout.js'
import fetch from 'node-fetch';

async function get(req, res) {

  const id = req.params.id;

  let response = await fetch(
    `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=28a501d82528fc0b2ef18b3429d4f916&photo_id=${id}&format=json&nojsoncallback=1`
  );

  let data = await response.json()

  let original_photo = data.sizes.size.filter(elem => elem.label == 'Original')[0];

  res.json(original_photo);

}

export default get