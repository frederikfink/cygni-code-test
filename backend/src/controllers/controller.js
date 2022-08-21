import fetch from '../utils/fetchWithTimeout.js'

async function get(req, res, next) {
  try {
    let res = await fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=28a501d82528fc0b2ef18b3429d4f916&text=starwars&format=json",
      {}, 400
      );
    return res;
  } catch (err) {
    console.error(`Error while getting programming languages`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json({ 'message': 'ok' });
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
}

async function update(req, res, next) {
  try {
    res.json({ 'message': 'ok' });
  } catch (err) {
    console.error(`Error while updating programming language`, err.message);
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    res.json({ 'message': 'ok' });
  } catch (err) {
    console.error(`Error while deleting programming language`, err.message);
    next(err);
  }
}

export default get