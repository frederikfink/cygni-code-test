import { searchFlickr } from './posts';
import { getOriginalSize } from './post';
import './style.css';

let page = 1;
let keyword = "porsche";
let isLoading = false;
let modal_active = false;

window.onload = ev => {
  init();
}

const init = async () => {

  let feed = document.getElementById('feed');

  // init images 
  handleSearch();

  // eventlistner scroll
  window.addEventListener('scroll', () => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight && !isLoading) {
      handleScrollBottom();
    }
  });

  // eventlistener searchbar btn
  document.getElementById('nav-search-btn').addEventListener('click', handleSearch);

  // eventlistener searchbar enter
  document.getElementById('nav-search-field').addEventListener('keypress', function (e) {
    if (e.key == "Enter") handleSearch();
  });

  // eventlistner posts
  document.getElementById("feed").addEventListener("click", async function (e) {
    if (e.target && e.target.nodeName == "IMG" && !modal_active) handlePostClick(e)
  });

  // eventlistener close post
  document.addEventListener('keydown', function (e) {
    if(e.key == "Escape") handleModalClose();
  });

}

const handleScrollBottom = async () => {
  updateLoadingState(true);
  page += 1;
  let photos = await searchFlickr({ keyword: keyword, page: page });
  if(photos)
  {
    feed.insertAdjacentHTML('beforeend', await photos.join(''));
  } else {
    page -= 1;
  }
  updateLoadingState(false);
}

const handleSearch = async () => {
  if (!isLoading) {
    updateLoadingState(true);

    // update global states
    keyword = document.getElementById('nav-search-field').value;
    page = 1;

    // fetch photos
    let photos = await searchFlickr({ keyword: keyword, page: page });
    feed.replaceChildren();
    if(photos) {
      feed.insertAdjacentHTML('beforeend', await photos.join(''));
    }

    // update dom
    document.getElementById('keyword').innerHTML = `:${keyword}`;

    // add eventlistners for posts
    document.getElementById("feed").addEventListener("click", async function (e) {
      if (e.target && e.target.nodeName == "IMG" && !modal_active) handlePostClick(e)
    });

    // update loading state
    updateLoadingState(false);
  }
}

const handlePostClick = async (e) => {

  modal_active = true;

  const id = e.target.id;
  const photo = await getOriginalSize({ id });

  if(photo) {
    container.insertAdjacentHTML('beforeend', photo);
    document.getElementById('modal-close-btn').addEventListener('click', handleModalClose);

  }

  modal_active = false;
}

const updateLoadingState = (isLoading) => {
  let spinner = document.getElementById('spinner');
  isLoading = isLoading;
  if (isLoading) spinner.hidden = false;
  else spinner.hidden = true;
}

const handleModalClose = () => {
  let modal = document.getElementById('open-modal');

  if(modal) modal.remove();
}
