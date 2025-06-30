import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';

const init = () => {
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const burgerIcon = document.querySelector('#burger');
    const closeIcon = document.querySelector('#close');
    const mobileNavList = document.querySelector('.nav-mobile-list');
    const mobileNavLinks = document.querySelectorAll('.nav-mobile-list .nav-link');
    const mobileBasketIcon = document.querySelector('.icon-basket-mobile-wrap');
    const contactForm = document.getElementById('contacts-form');
    const emailInput = document.getElementById('email');

    console.log('emailInput', emailInput);
    console.log('contactForm', contactForm);
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

    contactForm.addEventListener('submit', e => {
        console.log('error?');
        if (!emailInput.checkValidity()) {
            e.preventDefault();
            console.log('error');
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
