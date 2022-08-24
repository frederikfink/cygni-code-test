// import fetch from '../utils/fetchWithTimeout.js'
import fetch from 'node-fetch';
import dotenv from 'dotenv';

async function get(req, res) {

    dotenv.config({ path: './.env' });
    const api_key = process.env.API_KEY;

    const id = req.params.id;

    let response = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=${api_key}&photo_id=${id}&format=json&nojsoncallback=1`
    );

    let data = await response.json()

    let original_photo = data.sizes.size.filter(elem => elem.label == 'Original')[0];

    res.json(original_photo);

}

export default get