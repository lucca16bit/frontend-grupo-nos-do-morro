const galeriaContainer  = document.querySelector('.galeria-container');
const modalGalery       = document.querySelector('.modal');
const modalImg          = modalGalery.querySelector('img');
const closeButton       = modalGalery.querySelector('.close-button');
const headerGalery      = document.querySelector('header');



function toggleHeader(show) {
    if (show) {
        headerGalery.classList.remove('hidden');
    } else {
        headerGalery.classList.add('hidden');
    }
}

galeriaContainer.addEventListener('click', (e) => {
    const clickedItem = e.target.closest('.galeria-item');
    if (clickedItem) {
        const imgSrc = clickedItem.querySelector('img').src;
        modalImg.src = imgSrc;
        modalGalery.classList.add('active');
        toggleHeader(false);
    }
});

closeButton.addEventListener('click', () => {
    modalGalery.classList.remove('active');
    toggleHeader(true);
});

modalGalery.addEventListener('click', (e) => {
    if (e.target === modalGalery) {
        modalGalery.classList.remove('active');
        toggleHeader(true);
    }
});