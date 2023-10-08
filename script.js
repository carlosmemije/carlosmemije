document.addEventListener("DOMContentLoaded", function () {
    const headerImage = document.getElementById("header-image");
    const headerText = document.getElementById("header-text");
    const sections = document.querySelectorAll(".section");
    const dots = document.querySelectorAll(".dot");

    setTimeout(function () {
        headerImage.style.opacity = "1";
    }, 100);

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            window.scrollTo({
                top: sections[index].offsetTop,
                behavior: "smooth",
            });
        });
    });

    // Update dots on scroll
    window.addEventListener("scroll", () => {
        sections.forEach((section, index) => {
            const distance = Math.abs(
                section.getBoundingClientRect().top - window.innerHeight / 2
            );

            if (distance < 100) {
                dots.forEach((dot) => {
                    dot.classList.remove("active");
                });
                dots[index].classList.add("active");
            }
        });

        // Update the position of the line based on the active dot
        const activeDot = document.querySelector(".dot.active");
        if (activeDot) {
            const line = document.querySelector(".line");
            line.style.top = activeDot.offsetTop + "px";
        }
    });

    // Fade-in sections on scroll
    sections.forEach((section) => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    section.style.opacity = 1;
                    section.style.transform = "translateY(0)";
                }
            },
            {
                threshold: 0.3,
            }
        );
        observer.observe(section);
    });

    const glowingBackground = document.querySelector('.glowing-background');

    // Function to generate a random rgba color with 0.5 alpha
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgba(${r}, ${g}, ${b}, 0.35)`;
    }

    // Set the initial random background color
    glowingBackground.style.backgroundColor = getRandomColor();

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
