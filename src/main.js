import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';

const init = () => {
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const burgerIcon = document.querySelector('#burger');
    const closeIcon = document.querySelector('#close');
    const mobileNavList = document.querySelector('.nav-mobile-list');

    hamburgerButton.addEventListener('click', () => {
        mobileNavList.classList.toggle('active');
        closeIcon.classList.toggle('active');
        burgerIcon.classList.toggle('active');
    });
}

document.addEventListener('DOMContentLoaded', init);
