const $carousel = document.querySelector(".carousel");
const $slider = $carousel.querySelector(".slider");
const $dotsContainer = $carousel.querySelector(".dots-list");
const $dots = Array.from($dotsContainer.children);
const numberOfPages = $dots.length


let currentIndex = 0;

// auto-play carousel logic
setInterval(() => {
  const newIndex = currentIndex === numberOfPages - 1 ? 0 : currentIndex + 1;
  showSlide(newIndex)
}, 8000);

// dots navigation carousel logic
const onClickDot = (event) => {
  const targetDot = event.target;
  const targetIndex = $dots.findIndex((dot) => dot === targetDot);
  showSlide(targetIndex)
};

const showSlide = (index) => {
  $dots[currentIndex].classList.remove("active");
  $slider.style.transform = `translateX(${-100 * index}%)`;
  $dots[index].classList.add("active");
  currentIndex = index;
}

$dots.forEach($dots => $dots.addEventListener("click", onClickDot))

