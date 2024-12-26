let slideContainer      = document.querySelector('.slide-container');
let indicatorsContainer = document.getElementById('slide-indicators');
let slider              = document.querySelectorAll('.slider');
let prevBtn             = document.getElementById('prev-btn');
let nextBtn             = document.getElementById('next-btn');
let currentSlide        = 0;
const intervalTime      = 3000;
let autoScroll;

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

    currentSlide = (currentSlide + 1) % slider.length;
    showSlide()
}

function prevSlide() {
    hiddenSlide()
    if (currentSlide == 0) {
        currentSlide = slider.length -1;
    } else {
        currentSlide--;
    }

    currentSlide = (currentSlide - 1 + slider.length) % slider.length;
    showSlide()
}

function startAutoScroll() {
    autoScroll = setInterval(nextSlide, intervalTime);
}

function stopAutoScroll() {
    clearInterval(autoScroll);
}

nextBtn.addEventListener('click', nextSlide)
prevBtn.addEventListener('click', prevSlide)

slideContainer.addEventListener('mouseenter', stopAutoScroll);
slideContainer.addEventListener('mouseleave', startAutoScroll);

createIndicators();
startAutoScroll();