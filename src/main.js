import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';

const init = () => {
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const burgerIcon = document.querySelector('#burger');
    const closeIcon = document.querySelector('#close');
    const mobileNavList = document.querySelector('.nav-mobile-list');
    const mobileNavLinks = document.querySelectorAll('.nav-mobile-list .nav-link');
    const mobileBasketIcon = document.querySelector('.icon-basket-mobile-wrap');

    hamburgerButton.addEventListener('click', () => {
        mobileNavList.classList.toggle('active');
        closeIcon.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });

    mobileBasketIcon.addEventListener('click', () => {
        mobileNavList.classList.toggle('active');
        closeIcon.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNavList.classList.toggle('active');
            closeIcon.classList.toggle('active');
            burgerIcon.classList.toggle('active');
        });
    });
}

document.addEventListener('DOMContentLoaded', init);
