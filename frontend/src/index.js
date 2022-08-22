import { searchFlickr } from './posts';
import './style.css';

window.onload = ev => {
  init();
}

const init = async () => {
  let photos = await searchFlickr("cars");
  let feed = document.getElementById('feed');
  feed.innerHTML += await photos.join('');
 
  window.onscroll = async function () {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      let photos = await searchFlickr("cars");
      feed.innerHTML += await photos.join('');
    }
  }
  
}