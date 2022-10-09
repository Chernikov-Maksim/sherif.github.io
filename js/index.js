const menu = document.querySelector('.menu')

const burger = document.querySelector('.burger')


function showMenu() {
    burger.onclick = function() {
        menu.classList.toggle('menuActive')
        burger.classList.toggle('burgerActive')
    }
}

showMenu()


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
    autoplay: {
        delay: 1500,
    },
    loop: true,
});