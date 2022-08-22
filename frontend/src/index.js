import { searchFlickr } from './posts';
import './style.css';

window.onload = ev => {
  init();
}

const init = async () => {
  let page = 1;

  let photos = await searchFlickr({keyword: "porsche", page: page});
  let feed = document.getElementById('feed');
  feed.innerHTML += await photos.join('');
 
  window.onscroll = async function () {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      page += 1;
      let photos = await searchFlickr({keyword: "porsche", page: page});
      feed.innerHTML += await photos.join('');
    }
  }
}