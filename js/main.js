const slider = document.querySelectorAll('.garage_slider-img');

const circle = document.querySelectorAll('.garage_circle');

let currentSliderIndex = 0;

function hideSlider() {
  slider.forEach((item, index) => {
    item.classList.remove('block');
    circle[index].classList.remove('garage_circle-active');
  });
}

function showSlider() {
  slider[currentSliderIndex].classList.add('block');
  circle[currentSliderIndex].classList.add('garage_circle-active');
}

function paginationCircle() {
  circle.forEach((item, index) => {
    item.addEventListener('click', () => changeSlide(index));
  });
}
paginationCircle();

function changeSlide(slideIndex) {
  hideSlider();
  currentSliderIndex = slideIndex;
  showSlider();
}
