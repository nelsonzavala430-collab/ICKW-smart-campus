// js/main.js

let currentSlideIndex = 0;
let slideInterval;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) currentSlideIndex = 0;
    if (index < 0) currentSlideIndex = slides.length - 1;

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === currentSlideIndex) {
            slide.classList.add('active');
        }
    });

    dots.forEach((dot, i) => {
        dot.classList.remove('active-dot');
        if (i === currentSlideIndex) {
            dot.classList.add('active-dot');
        }
    });
}

function moveSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
    resetTimer();
}

function currentSlide(index) {
    currentSlideIndex = index;
    showSlide(currentSlideIndex);
    resetTimer();
}

function startTimer() {
    slideInterval = setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 5000);
}

function resetTimer() {
    clearInterval(slideInterval);
    startTimer();
}

// Iniciar el temporizador al cargar la página
startTimer();