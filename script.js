const glassyButtons = document.querySelectorAll('.glassy-button');
glassyButtons.forEach((button) => {
    button.addEventListener('mousemove', (event) => {
        const centerX = button.offsetWidth / 2;
        const centerY = button.offsetHeight / 2;

        const offsetX = event.offsetX - centerX;
        const offsetY = event.offsetY - centerY;

        button.style.setProperty('--_x-motion', `${offsetX}px`);
        button.style.setProperty('--_y-motion', `${offsetY}px`);
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenElements_2 = document.querySelectorAll('.hidden-right');
hiddenElements_2.forEach((el) => observer.observe(el));

const hiddenElements_3 = document.querySelectorAll('.hidden-up');
hiddenElements_3.forEach((el) => observer.observe(el));
