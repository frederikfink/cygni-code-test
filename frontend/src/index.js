import { searchFlickr } from './posts';
import './style.css';

let page = 1;
let keyword = "porsche";
let isLoading = false;

window.onload = ev => {
  init();
}

const init = async () => {

  let spinner = document.getElementById('spinner');
  let feed = document.getElementById('feed');
  
  spinner.hidden = false;
  
  let photos = await searchFlickr({ keyword: keyword, page: page });
  feed.innerHTML += await photos.join('');

  spinner.hidden = true;
  
  // eventlistener scroll bottom
  window.onscroll = async function () {
    
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && !isLoading) {
      spinner.hidden = false; isLoading = true;
      
      page += 1;
      let photos = await searchFlickr({ keyword: keyword, page: page });
      feed.innerHTML += await photos.join('');
      
      isLoading = false; spinner.hidden = true;
    }

  }

  // eventlistener searchbar btn
  document.getElementById('nav-search-btn').addEventListener('click', handleSearchBtnClick);

  // eventlistener searchbar enter
  document.getElementById('nav-search-field').addEventListener('keypress', function (e) {
    if (e.key == "Enter") handleSearchBtnClick();
  });

  // eventlistener post click
  let posts = document.getElementsByClassName('post');
  Array.from(posts).forEach(function(element) {
    element.addEventListener('click', handlePostClick);
  });
}

const handleSearchBtnClick = async () => {
  spinner.hidden = false; isLoading = true;

  keyword = document.getElementById('nav-search-field').value;
  page = 1;

  let photos = await searchFlickr({keyword: keyword, page: page});
  feed.innerHTML = await photos.join();

  document.getElementById('keyword').innerHTML = `:${keyword}`;
  isLoading = false; spinner.hidden = true;
}

const handlePostClick = (e) => {
  console.log(e);
}