(function () {
    const burger = document.querySelector('.burger__active')
    const burgerClosed = document.querySelector('.header__burger_closed')
    const mobileNavigation = document.querySelector('.mobile-nav')
    burger.addEventListener('click', () => {
        mobileNavigation.classList.remove('mobile_nav__off')
    });
    burgerClosed.addEventListener('click', () => {
        mobileNavigation.classList.add('mobile_nav__off')
    })
}())
