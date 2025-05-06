let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const track = document.querySelector('.carousel-track');
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});

function nextSlide() {
    let newIndex = (currentSlide + 1) % totalSlides;
    showSlide(newIndex);
}

setInterval(nextSlide, 5000);

// ==

const tabs = document.querySelectorAll('.filter-tab');
const groups = document.querySelectorAll('.product-group');

tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active from all
        tabs.forEach(t => t.classList.remove('active'));

        // Add active to current
        this.classList.add('active');

        // Hide all groups
        groups.forEach(group => {
            group.classList.add('d-none');
            group.classList.remove('zoom-in');
        });

        // Show the selected group with zoom animation
        const target = this.getAttribute('data-target');
        const selected = document.querySelector(`.product-group[data-category="${target}"]`);
        if (selected) {
            selected.classList.remove('d-none');
            // Force reflow to restart animation
            void selected.offsetWidth;
            selected.classList.add('zoom-in');
        }
    });
});



// script.js

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("mainNavbar");
    if (window.scrollY > 50) {
        navbar.classList.add("show-on-scroll");
    } else {
        navbar.classList.remove("show-on-scroll");
    }
});




