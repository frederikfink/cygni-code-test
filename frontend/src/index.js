import { searchFlickr } from './posts';
import './style.css';

let page = 1;
let keyword = "porsche";
let isLoading = false;

window.onload = ev => {
  init();
}

const init = async () => {

  let feed = document.getElementById('feed');
  
  updateLoadingState(true);
  
  let photos = await searchFlickr({ keyword: keyword, page: page });
  feed.innerHTML += await photos.join('');

  updateLoadingState(false);
  
  // eventlistener scroll bottom
  window.onscroll = async function () {
    
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && !isLoading) {
      updateLoadingState(true);
      
      page += 1;
      let photos = await searchFlickr({ keyword: keyword, page: page });
      feed.innerHTML += await photos.join('');
      
      updateLoadingState(false);
    }

  }

  // eventlistener searchbar btn
  document.getElementById('nav-search-btn').addEventListener('click', handleSearch);

  // eventlistener searchbar enter
  document.getElementById('nav-search-field').addEventListener('keypress', function (e) {
    if (e.key == "Enter") handleSearch();
  });

  // eventlistener post click
  let posts = document.getElementsByClassName('post');
  Array.from(posts).forEach(function(element) {
    element.addEventListener('click', handlePostClick);
  });
}

const handleSearch = async () => {
  if(!isLoading){
    updateLoadingState(true);
    
    // update global states
    keyword = document.getElementById('nav-search-field').value;
    page = 1;
    
    // fetch photos
    let photos = await searchFlickr({ keyword: keyword, page: page });
    feed.innerHTML = await photos.join();
    
    // update dom
    document.getElementById('keyword').innerHTML = `:${keyword}`;

    // update loading state
    updateLoadingState(false);
  }
}

const handlePostClick = (e) => {
  console.log(e);
}

const updateLoadingState = (isLoading) => {
  let spinner = document.getElementById('spinner');
  isLoading = isLoading;
  if(isLoading) spinner.hidden = false;
  else          spinner.hidden = true;
}