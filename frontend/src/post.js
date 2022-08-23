export const getOriginalSize = async ({ id }) => {

    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    });

    try {
        const data = await res.json();
        return post(data);
    } catch (error) {
        console.log("could not load image");
        return false;
    }

}

const post = (data) => {

    return (
        `<div id="open-modal" class="modal">
            <div class="modal__body">
                <div class="modal__header" >
                    ${data.width} x ${data.height}
                    <button class="btn" id="modal-close-btn">
                        close
                        <svg xmlns="http://www.w3.org/2000/svg" class="nav__search_btn_icon h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <img class="modal__img" src="${data.source}">
            </div>
        </div>`
    );
}

