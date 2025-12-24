// ==============================
// FADE-IN ANIMATION ON SCROLL
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.services, .portfolio, .contact');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// ==============================
// MOBILE MENU TOGGLE
// ==============================
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('open');
});

// ==============================
// OPTIONAL: NAVBAR SCROLL EFFECT
// ==============================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
