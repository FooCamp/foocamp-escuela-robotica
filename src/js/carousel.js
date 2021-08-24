const carousel = document.querySelector(".carousel");
const slider = carousel.querySelector(".slider");
const dotsContainer = carousel.querySelector(".dots-list");
const dots = Array.from(dotsContainer.children);
const numberOfPages = dots.length
console.log(numberOfPages)

let currentIndex = 0;


// auto-play carousel logic
setInterval(() => {
  dots[currentIndex].classList.remove("active");
  currentIndex = currentIndex === numberOfPages - 1 ? 0 : currentIndex + 1;
  slider.style.transform = `translateX(${-100 * currentIndex}%)`;
  slider.style.transition = ".7s";
  dots[currentIndex].classList.add("active");
}, 8000);

// dots navigation carousel logic
const onClickDot = (event) => {
  dots[currentIndex].classList.remove("active");
  const targetDot = event.target;
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  currentIndex = targetIndex;
  slider.style.transform = `translateX(${-100 * currentIndex}%)`;
  slider.style.transition = ".7s";
  dots[currentIndex].classList.add("active");
};

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", onClickDot);
}
