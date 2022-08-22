export const searchFlickr = async ({ keyword = "cars" }) => {

    const res = await fetch("http://localhost:3000/test", {
        headers: { 'Content-Type': 'application/json' }
    });

    const data = await res.json();

    const photosData = data.photos.photo;

    const photos = photosData.map(photo => post({...photo}));

    return photos;
}

const post = ({ farm, server, id, secret, title }) => {
    const image_url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;

    return (
        `<div class="post">
            <img class="post__img" src="${image_url}" />
            <div class="post__details">
            <p class="post__title">${title}</p>
            <p class="post__owner">
                <a class="post__owner_link" href="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 post__owner_avatar" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>
            </p>
            </div>
        </div>`
    );
}