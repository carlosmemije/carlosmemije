document.addEventListener("DOMContentLoaded", function () {
    const headerImage = document.getElementById("header-image");
    const headerText = document.getElementById("header-text");
    const sections = document.querySelectorAll(".section");
    const dots = document.querySelectorAll(".dot");
    const glowingBackground = document.querySelector('.glowing-background');
    const navbar = document.getElementById('navbar');
    
    setTimeout(function () {
        headerImage.style.opacity = "1";
    }, 100);

    // Consolidated mousemove event listener
    document.addEventListener('mousemove', (e) => {
        const cursor = document.getElementById('cursor');
        const dot = document.getElementById('dot');

        const mouseX = e.clientX + window.pageXOffset;
        const mouseY = e.clientY + window.pageYOffset;

        cursor.style.transform = `translate(${mouseX - 10}px, ${mouseY - 545}px)`; // Adjust the value here
        dot.style.transform = `translate(-50%, -50%)`;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (mouseX - centerX) * 0.1;
        const deltaY = (mouseY - centerY) * 0.1;

        glowingBackground.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        glowingBackground.style.filter = `blur(${Math.abs(deltaX) + Math.abs(deltaY)}px)`;
    });

    // // Fade-in sections on scroll
    // sections.forEach((section) => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             if (entries[0].isIntersecting) {
    //                 section.style.opacity = 1;
    //                 section.style.transform = "translateY(0)";
    //             }
    //         },
    //         {
    //             threshold: 0.3,
    //         }
    //     );
    //     observer.observe(section);
    // });

    // Set the initial random background color
    glowingBackground.style.backgroundColor = getRandomColor();

    // Function to generate a random rgba color with 0.5 alpha
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.35)`;
    }

    // Function to respond to mouse movement
    function updateBackgroundAndMouse(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        const deltaX = (mouseX - centerX) * 0.1;
        const deltaY = (mouseY - centerY) * 0.1;

        glowingBackground.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        glowingBackground.style.filter = `blur(${Math.abs(deltaX) + Math.abs(deltaY)}px)`;
    }

    // Add an event listener to respond to mouse movement
    document.addEventListener('mousemove', updateBackgroundAndMouse);

    // Add an event listener to change the background color when the page is loaded or refreshed
    window.addEventListener('load', () => {
        changeBackgroundColor();
    });
});
