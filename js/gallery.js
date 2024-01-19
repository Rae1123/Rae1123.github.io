// gallery.js
let currentIndex = 0;
const totalImages = document.querySelectorAll('.gallery-item').length;

function showImage(index) {
    const gallery = document.querySelector('.gallery');
    const itemWidth = document.querySelector('.gallery-item').clientWidth;
    gallery.style.transform = `translateX(${-index * itemWidth}px)`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

// gallery.js
let slideIndex = 1;

function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName('mySlides');

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
}

function zoomImage(element) {
    element.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
}

function unzoomImage(element) {
    element.style.boxShadow = 'none';
}

function showModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    modal.style.display = 'block';
}

function hideModal() {
    document.getElementById('myModal').style.display = 'none';
}