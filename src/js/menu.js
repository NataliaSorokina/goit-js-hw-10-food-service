import dishes from '../menu.json';
import dishesTemplate from '../templates/menu-items.hbs';

const menuBoard = document.querySelector('.js-menu');
const dishCardsMarkup = createDishCards(dishes);

menuBoard.insertAdjacentHTML('beforeend', dishCardsMarkup);

function createDishCards(dishes) {
    return dishesTemplate(dishes);
}