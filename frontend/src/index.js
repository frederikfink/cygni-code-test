import _ from 'lodash';
import './style.css';

async function component() {
  let feed = document.getElementById('feed');
  
  const data = await fetch_data();
  
  const photos = data.photos.photo;

  photos.forEach(elem => {
  let node = `<div class="post">
    <img class="post__img" src="https://farm${elem.farm}.staticflickr.com/${elem.server}/${elem.id}_${elem.secret}.jpg" />
    <div class="post__details">
    <p class="post__title">${elem.title}</p>
    <p class="post__owner">
      <a class="post__owner_link" href="">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 post__owner_avatar" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      </a>
    </p>
    </div>
  </div>`;

  feed.innerHTML += node;

  })
  
  return feed;
  
}

async function fetch_data() {
  const res = await fetch("http://localhost:3000/test", {
    headers: { 'Content-Type': 'application/json' }
  });
  const data = await res.json();

  return data;
}

component().then((component) => {
  document.getElementById('container').appendChild(component);
});