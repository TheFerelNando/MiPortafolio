import { lazyLoadImages } from "./lazy_image.js"; //lazyLoadImages function is imported from lazy_image.js
lazyLoadImages();

emailjs.init("StmptXf846DT446jh"); //Use the public key for the USER ID

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_cp79zoi', 'Gmail', this) 
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
});

document.addEventListener('scroll', function() { //Parallax effect
    const parallaxElements = document.querySelectorAll('[data-speed]');
    parallaxElements.forEach(function(el) {
        const speed = el.getAttribute('data-speed');
        const rect = el.getBoundingClientRect();
        const offset = rect.top * speed / 4;
        el.style.backgroundPosition = 'center ' + -offset + 'px';
    });
});

document.querySelectorAll('.nav-link').forEach(link => { //Smooth-scrolling
    link.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var form = this; // Save a reference to the form

    emailjs.sendForm('service_cp79zoi', 'template_hf15gt1', this) 
        .then(function() {
            console.log('SUCCESS!');
            form.reset(); // Reset the form fields
        }, function(error) {
            console.log('FAILED...', error);
        });
});