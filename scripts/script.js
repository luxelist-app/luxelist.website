document.addEventListener("DOMContentLoaded", function () {
    // Hero Text Animation
    const heroText = document.querySelector(".hero-content h1");
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(20px)";
    setTimeout(() => {
        heroText.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        heroText.style.opacity = "1";
        heroText.style.transform = "translateY(0)";
    }, 500);

    // Smooth Scroll for Buttons
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Lazy Loading for Images
    const images = document.querySelectorAll("img");
    const options = {
        rootMargin: "0px",
        threshold: 0.1
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add("fade-in");
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
});
