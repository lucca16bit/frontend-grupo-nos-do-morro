let slider      = document.querySelectorAll('.slider');
let prevBtn     = document.getElementById('prev-btn');
let nextBtn     = document.getElementById('next-btn');

let currentSlide = 0;

function hiddenSlide() {
    slider.forEach(item => item.classList.remove('on'));
}

function showSlide() {
    slider[currentSlide].classList.add('on');
}

function nextSlide() {
    hiddenSlide()
    if (currentSlide == slider.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlide()
}

function prevSlide() {
    hiddenSlide()
    if (currentSlide == 0) {
        currentSlide = slider.length -1;
    } else {
        currentSlide--;
    }
    showSlide()
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)