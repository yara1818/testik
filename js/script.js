const dropdown  = document.querySelector(".dropdown");
const dropdownMenu = document.querySelector('.dropdown__menu');
dropdown.addEventListener('click', (e) => {
    // dropdownMenu.style.display = 'block'
    if (dropdownMenu.style.display == 'none') {
        dropdownMenu.style.display = 'block'
    } else {
        dropdownMenu.style.display = 'none'
    }
});
const inputLink = document.querySelector('.modal__input-input');
const buttonInput = document.querySelector('.nav__links-img');
const modalInput = document.querySelector('.modal__input');
const modalInputExit = document.querySelector('.modal__input-exit-img');
const buttonRegister = document.querySelector('.modal__register-btn');
const modalRegister = document.querySelector('.modal__register');
const ExitmodalRegister = document.querySelector('.modal__register-exit');
const input = document.querySelector('.modal__input-register');
const dropdowncard = document.querySelector('.cards__choice__nav-btn__dropdown');
const dropdowncardMenu = document.querySelector('.cards__choice__nav-btn__dropdown__menu');

dropdowncard.addEventListener('click', (e) => {
    if (dropdowncardMenu.style.display == 'none') {
        dropdowncardMenu.style.display = 'block'
    } else {
        dropdowncardMenu.style.display = 'none'
    }
});

buttonInput.addEventListener('click', (e) => {
             modalRegister.style.display = 'block'
     });
modalInputExit.addEventListener('click', (e) => {
    modalInput.style.display = 'none'
});

ExitmodalRegister.addEventListener('click', (e) => {
    modalRegister.style.display = 'none'
});

inputLink.addEventListener('click', (e) => {
    modalInput.style.display = 'block'
    modalRegister.style.display = 'none'
});

input.addEventListener('click', (e) => {
    modalInput.style.display = 'none'
    modalRegister.style.display = 'block'
});

$('.cards__carusel-carusel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "<img src='img/icons/arrow-left.png' class='prev arrow' alt='1'>",
    nextArrow: "<img src='img/icons/arrow-right.png' class='next arrow' alt='2'>",
    autoplay: true,
    speed: 1000,
    // prevArrow: "<img src='img/icons/arrow--left.png' class='prev arrow' alt='1'>",
    // nextArrow: "<img src='img/icons/arrow-right.png' class='next arrow' alt='2'>"
  });

// ExitmodalRegister.addEventListener('click', (e) => {
//     modalRegister.style.display = 'none'
// });

// registerLink.addEventListener('click', (e) => {
//     modalRegister.style.display = 'block'
// });

// input.addEventListener('click', (e) => {
//     modalRegister.style.display = 'none'
//     modalInput.style.display = 'block'
// });
