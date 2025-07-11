document.addEventListener("DOMContentLoaded", function () {

    // 1. Hamburger Menu Toggle
    const menuBtn = document.querySelector(".menu-button");
    const nav = document.querySelector(".nav");

    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("active-nav");
        nav.style.display = nav.classList.contains("active-nav") ? "flex" : "none";
    });

    // 2. Smooth Scroll
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute("href");
            if (targetId.startsWith("#")) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Dark Mode Toggle
    const toggle = document.createElement("button");
    toggle.innerText = "🌙";
    toggle.style.position = "fixed";
    toggle.style.bottom = "20px";
    toggle.style.right = "20px";
    toggle.style.padding = "0.5rem 1rem";
    toggle.style.borderRadius = "5px";
    toggle.style.border = "none";
    toggle.style.cursor = "pointer";
    toggle.style.backgroundColor = "#333";
    toggle.style.color = "#fff";
    document.body.appendChild(toggle);

    let isDark = false;
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        isDark = !isDark;
        toggle.innerText = isDark ? "☀️" : "🌙";
    });

    // 4. Scroll To Top Button
    const scrollBtn = document.createElement("button");
    scrollBtn.innerText = "↑ Top";
    scrollBtn.style.position = "fixed";
    scrollBtn.style.bottom = "70px";
    scrollBtn.style.right = "20px";
    scrollBtn.style.padding = "0.5rem 1rem";
    scrollBtn.style.display = "none";
    scrollBtn.style.borderRadius = "5px";
    scrollBtn.style.border = "none";
    scrollBtn.style.cursor = "pointer";
    scrollBtn.style.backgroundColor = "#6366f1";
    scrollBtn.style.color = "#fff";
    document.body.appendChild(scrollBtn);

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 5. Navbar Background Change on Scroll
    const header = document.querySelector(".header-content");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(255,255,255,0.9)";
            scrollBtn.style.display = "block";
        } else {
            header.style.backgroundColor = "transparent";
            scrollBtn.style.display = "none";
        }
    });

    // 6. Fade In on Scroll
    const revealElements = document.querySelectorAll(".content-left, .company-container, .testimonial-container");

    function fadeInOnScroll() {
        revealElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transition = "opacity 1s ease-in";
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); // trigger once on load

    // 7. Typing Text Effect
    const sectionTitle = document.querySelector(".section-title");
    const originalText = sectionTitle.innerText;
    sectionTitle.innerText = "";

    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            sectionTitle.innerText += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // 8. Contact Button Scroll
    const contactBtn = document.querySelector(".contact-button");
    contactBtn?.addEventListener("click", () => {
        const testimonials = document.querySelector(".testimonial-container");
        testimonials?.scrollIntoView({ behavior: "smooth" });
    });

});
