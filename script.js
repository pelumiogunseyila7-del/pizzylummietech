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

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });


    /* Close mobile menu when a link is clicked */

    mainNav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            mainNav.classList.remove("open");

            menuToggle.innerHTML =
                '<i class="bi bi-list"></i>';

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================================================
   DARK MODE
   ========================================================= */

const themeToggle =
    document.getElementById("themeToggle");


function updateThemeIcon() {

    if (!themeToggle) {
        return;
    }

    const icon =
        themeToggle.querySelector("i");

    const isDark =
        document.documentElement.classList.contains("dark-mode");


    if (icon) {

        icon.className = isDark
            ? "bi bi-sun-fill"
            : "bi bi-moon-stars-fill";

    }


    themeToggle.setAttribute(
        "aria-label",
        isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
    );


    themeToggle.setAttribute(
        "title",
        isDark
            ? "Switch to light mode"
            : "Switch to dark mode"
    );

}


/* Load saved theme */

const savedTheme =
    localStorage.getItem("pizzylummie-theme");


if (savedTheme === "dark") {

    document.documentElement.classList.add("dark-mode");

} else {

    document.documentElement.classList.remove("dark-mode");

}


updateThemeIcon();


/* Toggle theme */

if (themeToggle) {

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


/* =========================================================
   PROJECT IMAGE LIGHTBOX
   ========================================================= */

function openLightbox(imageSrc) {

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");


    if (!lightbox || !lightboxImage) {
        return;
    }


    lightboxImage.src = imageSrc;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    const lightbox =
        document.getElementById("lightbox");


    const lightboxImage =
        document.getElementById("lightboxImage");


    if (!lightbox) {
        return;
    }


    lightbox.classList.remove("active");

    document.body.style.overflow = "auto";


    if (lightboxImage) {
        lightboxImage.src = "";
    }

}


/* Close lightbox when clicking outside image */

const lightbox =
    document.getElementById("lightbox");


if (lightbox) {

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            closeLightbox();

        }

    });

}


/* Close lightbox with ESC */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeLightbox();

    }

});


/* =========================================================
   PREVENT LIGHTBOX IMAGE FROM CLOSING IT
   ========================================================= */

const lightboxImage =
    document.getElementById("lightboxImage");


if (lightboxImage) {

    lightboxImage.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

        }
    );

}
