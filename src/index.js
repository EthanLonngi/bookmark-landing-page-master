const $hamburgerIcon = document.querySelector(".hamburger");
const $headerNav = document.querySelector(".header__nav");
const $logo = document.querySelector(".header__icon-container");
const $sliderOptions = document.querySelectorAll(".slider__text-option");
const $sliderImage = document.querySelectorAll(".slider__image");
const $sliderContent = document.querySelectorAll(".slider__content-slide");
const $accordionOption = document.querySelectorAll(".accordion__content");

$hamburgerIcon.addEventListener("click", () => {
  $hamburgerIcon.classList.toggle("active");
  $headerNav.classList.toggle("active");
  $logo.classList.toggle("active");
});

$accordionOption.forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.toggle("active");
  });
});

function setActive(option) {
  $sliderOptions.forEach((element) => {
    if (parseInt(element.getAttribute("data-option")) === option)
      element.classList.add("active");
    else {
      element.classList.remove("active");
    }
  });
  $sliderImage.forEach((element) => {
    if (parseInt(element.getAttribute("data-option")) === option)
      element.classList.add("active");
    else {
      element.classList.remove("active");
    }
  });
  $sliderContent.forEach((element) => {
    if (parseInt(element.getAttribute("data-option")) === option)
      element.classList.add("active");
    else {
      element.classList.remove("active");
    }
  });
}

$sliderOptions.forEach((element) => {
  element.addEventListener("click", () => {
    let dataOption = 1;
    if (!element.classList.contains("active")) {
      dataOption = parseInt(element.getAttribute("data-option"));
      setActive(dataOption);
    }
  });
});
