const burgerButton = document.querySelector('.burgerButton');
const burgerMeny = document.querySelector('.burgerNav');

burgerButton.addEventListener('click', () => {
    burgerMeny.classList.toggle('hidden');
});