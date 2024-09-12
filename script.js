// script.js

function moveSlide(step, sliderId) {
    const slider = document.getElementById(sliderId);
    const slideContainer = slider.querySelector('.slide-container');
    const slides = slideContainer.getElementsByClassName('slide');
    const totalSlides = slides.length;

    // Get current position of the slide container
    const currentMarginLeft = parseFloat(getComputedStyle(slideContainer).marginLeft) || 0;

    // Calculate new position
    const slideWidth = slides[0].clientWidth;
    const newMarginLeft = currentMarginLeft - (step * slideWidth);

    // Adjust slide position
    slideContainer.style.marginLeft = `${Math.max(Math.min(newMarginLeft, 0), -((totalSlides - 1) * slideWidth))}px`;
}

// Example of using the function:
// Move to the next slide
document.querySelectorAll('.next').forEach(button => {
    button.addEventListener('click', () => moveSlide(1, button.closest('.portfolio-slider').id));
});

// Move to the previous slide
document.querySelectorAll('.prev').forEach(button => {
    button.addEventListener('click', () => moveSlide(-1, button.closest('.portfolio-slider').id));
});





document.addEventListener('DOMContentLoaded', () => {
    // Select all anchor links that start with #
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent the default jump to the section

            // Get the target element's ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});




function fade(){
    var fade = document.getElementById('fade');
    var fade1 = document.getElementById('fade1');
    var fade2 = document.getElementById('fade2');
    fade.classList.add('visible');
    fade1.classList.add('visible');
    fade2.classList.add('visible');
}
window.onload = fade;



