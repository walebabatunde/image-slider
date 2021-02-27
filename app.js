let photoSlider = document.getElementById("photoSlider");
let photoSliderImages = document.querySelectorAll("img");
let prevButton = document.getElementById("prevImage");
let nextButton = document.getElementById("nextImage");

let counter = 1;

photoSlider.style.transform = "transformX(" + -900 * counter + "px)";

prevButton.addEventListener("click", function () {
  counter--;
  photoSlider.style.transition = "transform 0.5s ease-in-out";
  photoSlider.style.transform = "translateX(" + 900 * counter + "px)";
});

nextButton.addEventListener("click", function () {
  counter++;
  photoSlider.style.transition = "transform 0.5s ease-in-out";
  photoSlider.style.transform = "translateX(" + -900 * counter + "px)";
});

photoSlider.addEventListener("transitionend", function () {
  if (photoSliderImages[counter].id === "lastImageCopy") {
    counter = photoSliderImages.length - 2;
    photoSlider.style.transform = "translateX(" + -900 * counter + "px)";
  }
  if (photoSliderImages[counter].id === "firstImageCopy") {
    counter = photoSliderImages.length - counter;
    photoSlider.style.transform = "translateX(" + -900 * counter + "px)";
  }
});
