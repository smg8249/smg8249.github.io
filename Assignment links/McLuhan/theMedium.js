const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const images = slider.getElementsByTagName("img");
let currentImageIndex = 0;

prevBtn.addEventListener("click", showPreviousImage);
nextBtn.addEventListener("click", showNextImage);

function showPreviousImage() {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
  images[currentImageIndex].style.display = "block";
}

function showNextImage() {
  images[currentImageIndex].style.display = "none";
  currentImageIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
  images[currentImageIndex].style.display = "block";
}

images[currentImageIndex].style.display = "block";
