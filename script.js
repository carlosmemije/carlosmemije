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

            const emailLink = document.getElementById("email-link");
        const emailText = emailLink.querySelector(".email-text");

        const email = "carlosmemije25@gmail.com";

        // detect mobile
        const isMobile = window.matchMedia("(hover: none)").matches;

        // hover behavior (desktop only)
        if (!isMobile) {
            emailLink.addEventListener("mouseenter", () => {
                emailText.textContent = email;
            });

            emailLink.addEventListener("mouseleave", () => {
                emailText.textContent = "EMAIL";
            });
        }

        // click behavior (both desktop + mobile)
        emailLink.addEventListener("click", (e) => {
            e.preventDefault();

            navigator.clipboard.writeText(email);

            // on mobile, show email since no hover
            if (isMobile) {
                emailText.textContent = email;

                setTimeout(() => {
                    emailText.textContent = "EMAIL";
                }, 3000);
            }

            // animate icon
            emailLink.classList.add("copied");
            setTimeout(() => emailLink.classList.remove("copied"), 500);

            showToast("Email copied to clipboard");
        });

                function showToast(message) {
            const toast = document.createElement("div");
            toast.className = "toast";
            toast.textContent = message;

            document.body.appendChild(toast);

            setTimeout(() => toast.classList.add("show"), 10);

            setTimeout(() => {
                toast.classList.remove("show");
                setTimeout(() => toast.remove(), 300);
            }, 2000);
        }

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
