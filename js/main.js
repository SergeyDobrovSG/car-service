// let garageItem = Array.from(document.querySelectorAll('.garage_item'));

// // garage_active

// for (let i = 0; i < garageItem.length; i++) {
//   garageItem[i].addEventListener('click', selectItem);
// }

// function selectItem() {
//   if (this.classList.contains('garage_active')) {
//   } else {
//     console.log(2);
//   }
// }

const slider = document.querySelectorAll('.garage_slider-img');

const circle = document.querySelectorAll('.garage_circle');

let currentSliderIndex = 0;

function hideSlider() {
  slider.forEach((item, index) => {
    item.classList.remove('block');
    circle[index].classList.remove('garage_circle-active');
  });

  // slider[currentSliderIndex].classList.remove('block');
  // circle[currentSliderIndex].classList.remove('garage_circle-active');
}

// function hideSlider() {
//   slider.forEach((item, index) => {
//     item.classList.remove('block');

//     circle[index].classList.remove('garage_circle-active');
//   });
// }

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

// Ваш код выглядит в целом правильно, но проблема, которую вы описали, возникает из-за того, что вы не удаляете класс garage_circle-active у других кругов (которые не были выбраны). Давайте исправим это.

// В функции hideSlider вы убираете класс block, но нужно также добавить логику для удаления класса garage_circle-active у всех кругов, кроме текущего.

// Вот исправленный код:

// const slider = document.querySelectorAll('.garage_slider-img');
// const circle = document.querySelectorAll('.garage_circle');

// let currentSliderIndex = 0;

// function showSlider() {
//   slider[currentSliderIndex].classList.add('block');
//   circle[currentSliderIndex].classList.add('garage_circle-active');
// }

// function paginationCircle() {
//   circle.forEach((item, index) => {
//     item.addEventListener('click', () => changeSlide(index));
//   });
// }
// paginationCircle();

// function changeSlide(slideIndex) {
//   currentSliderIndex = slideIndex;
//   hideSlider();
//   showSlider();
// }

// Изменения, которые я внес:

// В функции hideSlider добавил цикл, который проходит по всем элементам slider и circle, удаляя класс garage_circle-active у всех кругов.

// Теперь, когда вы выбираете один из элементов с классом garage_circle, класс garage_circle-active будет правильно удаляться с других элементов.
