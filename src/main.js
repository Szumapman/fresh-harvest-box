import 'modern-normalize/modern-normalize.css';
import './styles/main.scss';

const isValidEmail = value =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const isValidCardNumber = value =>
    /^[0-9\s]{13,19}$/.test(value.trim());

const showError = (input, message) => {
    input.classList.add('error');
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-message';
    errorSpan.textContent = message;
    input.parentNode.appendChild(errorSpan);
};

const validateField = (input, isValid, message) => {
    if (!isValid(input.value)) {
        showError(input, message);
        return false;
    } else {
        input.classList.remove('error');
        return true;
    }
};

const clearErrors = () => {
    document.querySelectorAll('.error-message').forEach(e => e.remove());
};

const toggleMobileNav = (mobileNavList, closeIcon, burgerIcon) => {
    mobileNavList.classList.toggle('active');
    closeIcon.classList.toggle('active');
    burgerIcon.classList.toggle('active');
};

const init = () => {
    const hamburgerButton = document.querySelector('#hamburger-menu');
    const burgerIcon = document.querySelector('#burger');
    const closeIcon = document.querySelector('#close');
    const mobileNavList = document.querySelector('.nav-mobile-list');
    const mobileNavLinks = document.querySelectorAll('.nav-mobile-list .nav-link');
    const mobileBasketIcon = document.querySelector('.icon-basket-mobile-wrap');
    const basketIcon = document.querySelector('.icon-basket');

    const contactForm = document.getElementById('contacts-form');
    const contactEmailInput = document.getElementById('contact-email');
    const thankYouModal = document.getElementById('thank-you');
    const closeThankYouModal = document.getElementById('close-thank-you-modal');

    const orderButton = document.getElementById('open-your-order');
    const yourOrderModal = document.getElementById('your-order');
    const closeYourOrderModal = document.getElementById('close-your-order');
    const yourOrderForm = document.querySelector('.your-order-form');

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const cardInput = document.getElementById('card');
    const commentInput = document.getElementById('comment');
    const checkboxes = document.querySelectorAll('.your-order-checkbox-input');

    const toggleNav = () => toggleMobileNav(mobileNavList, closeIcon, burgerIcon);
    hamburgerButton.addEventListener('click', toggleNav);
    mobileBasketIcon.addEventListener('click', toggleNav);
    mobileNavLinks.forEach(link => link.addEventListener('click', toggleNav));

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        if (!isValidEmail(contactEmailInput.value)) {
            contactEmailInput.classList.add('error');
        } else {
            contactEmailInput.classList.remove('error');
            contactForm.reset();
            thankYouModal.classList.remove('is-hidden');
            document.body.classList.add('no-scroll');
        }
    });

    closeThankYouModal.addEventListener('click', () => {
        thankYouModal.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
    });

    [mobileBasketIcon, basketIcon, orderButton].forEach(btn => {
        btn.addEventListener('click', () => {
            yourOrderModal.classList.remove('is-hidden');
            document.body.classList.add('no-scroll');
        });
    })

    closeYourOrderModal.addEventListener('click', () => {
        yourOrderModal.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
        checkboxes.forEach(cb => cb.checked = false);
    });

    yourOrderForm.addEventListener('submit', e => {
        e.preventDefault();
        clearErrors();

        let formIsValid = true;
        const selectedProducts = [];

        formIsValid &= validateField(nameInput, val => val.trim().length > 1, 'Enter your name.');
        formIsValid &= validateField(emailInput, isValidEmail, 'Enter a valid email.');
        formIsValid &= validateField(cardInput, isValidCardNumber, 'Enter a valid card number (13-19 digits).');

        const atLeastOneChecked = Array.from(checkboxes).some(cb => cb.checked);
        if (!atLeastOneChecked) {
            alert('Please select at least one fruit basket.');
            formIsValid = false;
        }

        if (formIsValid) {
            checkboxes.forEach(cb => {
                if (cb.checked) {
                    selectedProducts.push(cb.name);
                }
            });
            // send form data to server
            // example printing to console ;)
            const summary = `
                ✅ Thank you for your order!
                👤 Name: ${nameInput.value}
                📧 E-mail: ${emailInput.value}
                💳 Card: ${cardInput.value}
                📝 Comment: ${commentInput.value || '---'}
                🧺 Selected ${selectedProducts.length > 1 ? "baskets" : "basket"}: ${selectedProducts.join(', ')}
            `;
            console.log(summary);
            yourOrderForm.reset();
            yourOrderModal.classList.add('is-hidden');
            thankYouModal.classList.remove('is-hidden');
        }
    });
};

document.addEventListener('DOMContentLoaded', init);
