/* =========================================================
   PIZZYLUMMIETECH - MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", function () {

        mainNav.classList.toggle("open");

        const isOpen = mainNav.classList.contains("open");

        menuToggle.innerHTML = isOpen
            ? '<i class="bi bi-x-lg"></i>'
            : '<i class="bi bi-list"></i>';

    });

}


/* =========================================================
   DARK MODE
   ========================================================= */

const themeToggle =
    document.getElementById("themeToggle");

if (themeToggle) {

    const savedTheme =
        localStorage.getItem("pizzylummie-theme");

    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark-mode");
    }

    updateThemeIcon();

    themeToggle.addEventListener("click", function () {

        document.documentElement.classList.toggle("dark-mode");

        const isDark =
            document.documentElement.classList.contains("dark-mode");

        localStorage.setItem(
            "pizzylummie-theme",
            isDark ? "dark" : "light"
        );

        updateThemeIcon();

    });

}


function updateThemeIcon() {

    const themeToggle =
        document.getElementById("themeToggle");

    if (!themeToggle) return;

    const isDark =
        document.documentElement.classList.contains("dark-mode");

    themeToggle.innerHTML = isDark
        ? '<i class="bi bi-sun-fill"></i>'
        : '<i class="bi bi-moon-stars-fill"></i>';

}


/* =========================================================
   PROJECT LIGHTBOX
   ========================================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const projectImages =
    document.querySelectorAll(".project-image");


/* Open ANY project image */

projectImages.forEach(function (project) {

    project.addEventListener("click", function () {

        const image =
            project.querySelector("img");

        if (!image || !lightbox || !lightboxImage) {
            return;
        }

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});


/* Close lightbox */

function closeLightbox() {

    if (!lightbox) return;

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

    if (lightboxImage) {
        lightboxImage.src = "";
    }

}


/* Close when clicking the dark background */

if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

}


/* Close button */

const lightboxClose =
    document.querySelector(".lightbox-close");

if (lightboxClose) {

    lightboxClose.addEventListener("click", function () {

        closeLightbox();

    });

}


/* Close with ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});
