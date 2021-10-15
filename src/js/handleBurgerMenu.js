export const handleBurgerMenu = () => {

    const burgerIcon = document.querySelector(".header__burger-icon");
    const closeIcon = document.querySelector(".header__close-icon");
    const navLinks = document.querySelector(".header__mobile-menu");

    burgerIcon.addEventListener("click", () => {
        navLinks.classList.add("open");
    });

    closeIcon.addEventListener("click", () => {
        navLinks.classList.remove("open");
    });
}