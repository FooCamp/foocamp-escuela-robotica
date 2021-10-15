export const handleBurgerMenu = () => {

    const burgerIcon = document.querySelector(".burger__icon");
    const closeIcon = document.querySelector(".close__icon");
    const navLinks = document.querySelector(".header__menu");

    burgerIcon.addEventListener("click", () => {
        navLinks.classList.add("open");
    });

    closeIcon.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
}