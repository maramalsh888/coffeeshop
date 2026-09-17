/* =========================
   PAGE LOADER
========================= */

const loader = document.querySelector(".loader");

window.addEventListener("load", () => {

    setTimeout(() => {
        loader.classList.add("hide");
    }, 900);

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateNavbar, {
    passive: true
});

updateNavbar();


/* =========================
   SCROLL PROGRESS
========================= */

const scrollProgress =
    document.querySelector(".scroll-progress");


function updateScrollProgress() {

    const scrollTop = window.scrollY;

    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress =
        documentHeight > 0
            ? (scrollTop / documentHeight) * 100
            : 0;

    scrollProgress.style.width =
        `${progress}%`;

}


window.addEventListener("scroll", updateScrollProgress, {
    passive: true
});

updateScrollProgress();


/* =========================
   MOBILE MENU
========================= */

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileNavLinks =
    document.querySelectorAll(".mobile-nav-link");


function closeMobileMenu() {

    navbar.classList.remove("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
    );

}


menuToggle.addEventListener("click", () => {

    const isOpen =
        navbar.classList.toggle("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );

    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close navigation"
            : "Open navigation"
    );

});


mobileNavLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* =========================
   REVEAL ANIMATIONS
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "active"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navLinks =
    document.querySelectorAll(
        ".desktop-nav .nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) {
                    return;
                }

                const currentId =
                    entry.target.getAttribute("id");


                navLinks.forEach(link => {

                    link.classList.remove(
                        "active"
                    );

                    const linkTarget =
                        link.getAttribute("href");

                    if (
                        linkTarget ===
                        `#${currentId}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    }

                });

            });

        },
        {
            rootMargin:
                "-40% 0px -50% 0px",
            threshold: 0
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================
   CLOSE MOBILE MENU
   WHEN CLICKING OUTSIDE
========================= */

document.addEventListener("click", (event) => {

    const clickedInsideNavbar =
        navbar.contains(event.target);

    if (
        !clickedInsideNavbar &&
        navbar.classList.contains("menu-open")
    ) {

        closeMobileMenu();

    }

});


/* =========================
   ESCAPE KEY
========================= */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navbar.classList.contains("menu-open")
    ) {

        closeMobileMenu();

    }

});