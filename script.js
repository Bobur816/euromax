const slides = document.querySelectorAll(".slide");
const buttons = document.querySelector(".slider__buttons");
const btnPrev = document.querySelector(".slider-btn__prev");
const btnNext = document.querySelector(".slider-btn__next");
const dotsContainer = document.querySelector(".dots");

let curSLide = 0;
const firstSlide = 0;
const lastSlide = slides.length - 1;

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

function activateDot(slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"`)
    .classList.add("active");
}

function createDots() {
  slides.forEach((_, i) => {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
}
createDots();
activateDot(curSLide);

function moveSlide(slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
}

function handleNext() {
  curSLide = curSLide !== lastSlide ? curSLide + 1 : firstSlide;
  moveSlide(curSLide);
  activateDot(curSLide);
}

function handlePrev() {
  curSLide = curSLide !== firstSlide ? curSLide - 1 : lastSlide;
  moveSlide(curSLide);
  activateDot(curSLide);
}

btnNext.addEventListener("click", handleNext);

btnPrev.addEventListener("click", handlePrev);

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    moveSlide(slide);
    activateDot(slide);
  }
});

// setInterval(handleNext, 5000);

//_________________________________________________________________________________

//for news slider

const newsSlides = document.querySelectorAll(".news-slider__slide");
const newsBtnPrev = document.querySelector(".news-slider-btn__prev");
const newsBtnNext = document.querySelector(".news-slider-btn__next");

let newsCurSLide = 0;

const NewsFirstSlide = 0;
const newsLastSlide = newsSlides.length - 2;
newsSlides.forEach((el, i) => (el.style.transform = `translateX(${106 * i}%)`));

function moveSlideNews(slide) {
  newsSlides.forEach(
    (s, i) => (s.style.transform = `translateX(${106 * (i - slide)}%)`)
  );
}

function handleNextNews() {
  newsCurSLide =
    newsCurSLide !== newsLastSlide ? newsCurSLide + 1 : NewsFirstSlide;
  moveSlideNews(newsCurSLide);
}

function handlePrevNews() {
  newsCurSLide =
    newsCurSLide !== NewsFirstSlide ? newsCurSLide - 1 : newsLastSlide;
  moveSlideNews(newsCurSLide);
}

newsBtnPrev.addEventListener("click", handlePrevNews);

newsBtnNext.addEventListener("click", handleNextNews);
