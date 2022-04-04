import '../scss/main.scss';
import { handleBurgerMenu } from './handleBurgerMenu';
import { initCarousel } from '../js/carousel';
import { initLetsLearnCategories } from './letsLearnCategories';

handleBurgerMenu();
initCarousel();
initLetsLearnCategories('#letsLearnCategories');