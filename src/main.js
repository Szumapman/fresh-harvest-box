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
    const thankYouModal = document.getElementById('thank-you');
    const closeThankYouModal = document.getElementById('close-thank-you-modal');

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
        if (!emailInput.checkValidity()) {
            e.preventDefault();
            emailInput.classList.add('error');
        } else {
            e.preventDefault();
            emailInput.value = '';
            emailInput.classList.remove('error');
            thankYouModal.classList.remove('is-hidden');
        }
    });

    closeThankYouModal.addEventListener('click', () => {
        thankYouModal.classList.add('is-hidden');
    });
}

document.addEventListener('DOMContentLoaded', init);
