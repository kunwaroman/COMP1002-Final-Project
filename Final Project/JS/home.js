const images = document.querySelectorAll('#slideshow img');
let currentImageIndex = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

setInterval(nextImage, 3000);