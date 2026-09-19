/* =========================================================
   BEAN & BREW
   Premium Coffee Website
========================================================= */


/* =========================================================
   BUSINESS SETTINGS
========================================================= */

const WHATSAPP_NUMBER = "967770086747";


/* =========================================================
   MENU DATA
========================================================= */

const menuItems = [

    {
        id: 1,
        name: "Espresso",
        category: "coffee",
        price: 2.50,
        description:
            "Rich double espresso with a deep, balanced finish.",
        image:
            "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 2,
        name: "Americano",
        category: "coffee",
        price: 3.00,
        description:
            "Espresso softened with hot water for a clean finish.",
        image:
            "https://images.unsplash.com/photo-1551030173-122aabc4489c?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 3,
        name: "Cappuccino",
        category: "coffee",
        price: 4.00,
        description:
            "Espresso with silky milk and a layer of velvet foam.",
        image:
            "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 4,
        name: "Classic Latte",
        category: "coffee",
        price: 4.50,
        description:
            "Smooth espresso blended with steamed milk.",
        image:
            "https://images.unsplash.com/photo-1561882468-9110e03e0f78?auto=format&fit=crop&w=800&q=90"
    },

    /* ================= CHANGED ================= */

    {
        id: 5,
        name: "Dark Mocha",
        category: "coffee",
        price: 4.75,
        description:
            "Dark chocolate, espresso, and creamy steamed milk.",
        image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=900&q=90"
    },

    {
        id: 6,
        name: "Spanish Latte",
        category: "coffee",
        price: 4.75,
        description:
            "Espresso, steamed milk, and a touch of sweetened milk.",
        image:
            "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=900&q=90"
    },

    /* ================= END CHANGES ================= */

    {
        id: 7,
        name: "Matcha Latte",
        category: "non-coffee",
        price: 4.50,
        description:
            "Smooth ceremonial-style matcha with creamy milk.",
        image:
            "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 8,
        name: "Hot Chocolate",
        category: "non-coffee",
        price: 4.00,
        description:
            "Rich chocolate blended with warm, creamy milk.",
        image:
            "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 9,
        name: "Chai Latte",
        category: "non-coffee",
        price: 4.25,
        description:
            "Spiced chai with steamed milk and a warm finish.",
        image:
            "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 10,
        name: "Iced Latte",
        category: "cold",
        price: 4.50,
        description:
            "Chilled espresso with cold milk over ice.",
        image:
            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 11,
        name: "Iced Americano",
        category: "cold",
        price: 3.50,
        description:
            "Espresso and chilled water served over ice.",
        image:
            "https://images.unsplash.com/photo-1517959105821-eaf2591984ca?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 12,
        name: "Cold Brew",
        category: "cold",
        price: 4.50,
        description:
            "Slow-steeped coffee with a naturally smooth finish.",
        image:
            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 13,
        name: "Cheesecake",
        category: "dessert",
        price: 5.00,
        description:
            "Creamy classic cheesecake with a buttery biscuit base.",
        image:
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 14,
        name: "Chocolate Brownie",
        category: "dessert",
        price: 3.50,
        description:
            "Soft, rich chocolate brownie with a fudgy center.",
        image:
            "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 15,
        name: "Butter Croissant",
        category: "dessert",
        price: 3.25,
        description:
            "Golden, flaky pastry baked fresh for the morning.",
        image:
            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=90"
    },

    {
        id: 16,
        name: "Chocolate Cookie",
        category: "dessert",
        price: 2.75,
        description:
            "Soft-baked cookie with generous chocolate pieces.",
        image:
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=800&q=90"
    }

];


/* =========================================================
   ELEMENTS
========================================================= */

const loader =
    document.querySelector(".loader");

const navbar =
    document.querySelector(".navbar");

const menuToggle =
    document.querySelector(".menu-toggle");

const mobileNav =
    document.querySelector(".mobile-nav");

const mobileNavLinks =
    document.querySelectorAll(".mobile-nav-link");

const scrollProgress =
    document.querySelector(".scroll-progress");

const menuGrid =
    document.querySelector("#menuGrid");

const menuSearch =
    document.querySelector("#menuSearch");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const noResults =
    document.querySelector("#noResults");

const cartButton =
    document.querySelector("#cartButton");

const cartDrawer =
    document.querySelector("#cartDrawer");

const cartOverlay =
    document.querySelector("#cartOverlay");

const closeCart =
    document.querySelector("#closeCart");

const cartItems =
    document.querySelector("#cartItems");

const cartCount =
    document.querySelector("#cartCount");

const cartTotal =
    document.querySelector("#cartTotal");

const emptyCart =
    document.querySelector("#emptyCart");

const orderWhatsapp =
    document.querySelector("#orderWhatsapp");

const browseMenu =
    document.querySelector("#browseMenu");

const toast =
    document.querySelector("#toast");

const reservationForm =
    document.querySelector("#reservationForm");

const footerWhatsapp =
    document.querySelector("#footerWhatsapp");


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        if (loader) {
            loader.classList.add("hide");
        }

    }, 800);

});


/* =========================================================
   NAVBAR
========================================================= */

function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 40) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateNavbar,
    { passive: true }
);

updateNavbar();


/* =========================================================
   SCROLL PROGRESS
========================================================= */

function updateScrollProgress() {

    if (!scrollProgress) return;

    const scrollTop =
        window.scrollY;

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

window.addEventListener(
    "scroll",
    updateScrollProgress,
    { passive: true }
);

updateScrollProgress();


/* =========================================================
   MOBILE MENU
========================================================= */

function closeMobileMenu() {

    if (!navbar || !menuToggle) return;

    navbar.classList.remove("menu-open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation"
    );

    document.body.classList.remove("no-scroll");
}


if (menuToggle) {

    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                navbar.classList.toggle(
                    "menu-open"
                );

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

            document.body.classList.toggle(
                "no-scroll",
                isOpen
            );

        }
    );

}


mobileNavLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* =========================================================
   MENU FILTER
========================================================= */

let activeCategory = "all";


function getFilteredItems() {

    const searchTerm =
        menuSearch
            ? menuSearch.value
                .toLowerCase()
                .trim()
            : "";

    return menuItems.filter(item => {

        const categoryMatch =
            activeCategory === "all" ||
            item.category === activeCategory;

        const searchMatch =
            item.name
                .toLowerCase()
                .includes(searchTerm) ||

            item.description
                .toLowerCase()
                .includes(searchTerm);

        return (
            categoryMatch &&
            searchMatch
        );

    });

}


/* =========================================================
   CATEGORY NAME
========================================================= */

function formatCategory(category) {

    const names = {

        coffee: "Coffee",

        "non-coffee": "Non-Coffee",

        cold: "Cold",

        dessert: "Dessert"

    };

    return names[category] || category;

}


/* =========================================================
   RENDER MENU
========================================================= */

function renderMenu() {

    if (!menuGrid) return;

    const items =
        getFilteredItems();

    menuGrid.innerHTML = "";

    if (items.length === 0) {

        noResults?.classList.add("show");

        return;

    }

    noResults?.classList.remove("show");


    items.forEach(
        (item, index) => {

            const card =
                document.createElement("article");

            card.className =
                "menu-card reveal";

            card.innerHTML = `

                <div class="menu-image">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        loading="lazy"
                        decoding="async"
                    >

                    <span class="menu-number">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <span class="menu-category">
                        ${formatCategory(item.category)}
                    </span>

                </div>


                <div class="menu-info">

                    <div class="menu-info-top">

                        <h3>${item.name}</h3>

                        <span class="menu-price">
                            $${item.price.toFixed(2)}
                        </span>

                    </div>


                    <p class="menu-description">
                        ${item.description}
                    </p>


                    <button
                        class="add-cart"
                        data-id="${item.id}"
                    >
                        Add to order +
                    </button>

                </div>
            `;

            menuGrid.appendChild(card);

        }
    );


    observeRevealElements();

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });

            button.classList.add(
                "active"
            );

            activeCategory =
                button.dataset.category;

            renderMenu();

        }
    );

});


/* =========================================================
   SEARCH
========================================================= */

if (menuSearch) {

    menuSearch.addEventListener(
        "input",
        renderMenu
    );

}


/* =========================================================
   CART
========================================================= */

let cart =
    JSON.parse(
        localStorage.getItem(
            "beanBrewCart"
        )
    ) || [];


function saveCart() {

    localStorage.setItem(
        "beanBrewCart",
        JSON.stringify(cart)
    );

}


function addToCart(id) {

    const item =
        menuItems.find(
            product => product.id === id
        );

    if (!item) return;


    const existing =
        cart.find(
            product => product.id === id
        );


    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({

            id: item.id,

            name: item.name,

            price: item.price,

            image: item.image,

            quantity: 1

        });

    }


    saveCart();

    renderCart();

    showToast(
        `${item.name} added to your order ✓`
    );


    /* Cart animation */

    if (cartButton) {

        cartButton.animate(
            [
                {
                    transform: "scale(1)"
                },
                {
                    transform: "scale(1.08)"
                },
                {
                    transform: "scale(1)"
                }
            ],
            {
                duration: 350,
                easing: "ease-out"
            }
        );

    }

}


function updateQuantity(
    id,
    amount
) {

    const item =
        cart.find(
            product => product.id === id
        );

    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        cart =
            cart.filter(
                product => product.id !== id
            );

    }


    saveCart();

    renderCart();

}


function removeFromCart(id) {

    cart =
        cart.filter(
            item => item.id !== id
        );

    saveCart();

    renderCart();

}


/* =========================================================
   RENDER CART
========================================================= */

function renderCart() {

    if (!cartItems) return;

    cartItems.innerHTML = "";


    if (cart.length === 0) {

        emptyCart.style.display =
            "flex";

    } else {

        emptyCart.style.display =
            "none";

    }


    let total = 0;

    let count = 0;


    cart.forEach(item => {

        total +=
            item.price *
            item.quantity;

        count +=
            item.quantity;


        const element =
            document.createElement("div");

        element.className =
            "cart-item";


        element.innerHTML = `

            <img
                src="${item.image}"
                alt="${item.name}"
                class="cart-item-image"
            >

            <div>

                <h4>
                    ${item.name}
                </h4>

                <p class="cart-item-price">
                    $${item.price.toFixed(2)}
                </p>

                <div class="quantity-controls">

                    <button
                        data-action="decrease"
                        data-id="${item.id}"
                        aria-label="Decrease quantity"
                    >
                        −
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        data-action="increase"
                        data-id="${item.id}"
                        aria-label="Increase quantity"
                    >
                        +
                    </button>

                </div>

            </div>

            <button
                class="remove-item"
                data-action="remove"
                data-id="${item.id}"
            >
                Remove
            </button>

        `;


        cartItems.appendChild(
            element
        );

    });


    if (cartCount) {

        cartCount.textContent =
            count;

    }


    if (cartTotal) {

        cartTotal.textContent =
            `$${total.toFixed(2)}`;

    }

}


/* =========================================================
   ADD TO CART EVENT
========================================================= */

document.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest(
                ".add-cart"
            );

        if (!button) return;

        const id =
            Number(button.dataset.id);

        addToCart(id);

    }
);


/* =========================================================
   CART CONTROLS
========================================================= */

if (cartItems) {

    cartItems.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button"
                );

            if (!button) return;


            const id =
                Number(button.dataset.id);

            const action =
                button.dataset.action;


            if (action === "increase") {

                updateQuantity(id, 1);

            }

            if (action === "decrease") {

                updateQuantity(id, -1);

            }

            if (action === "remove") {

                removeFromCart(id);

            }

        }
    );

}


/* =========================================================
   OPEN / CLOSE CART
========================================================= */

function openCart() {

    closeMobileMenu();

    cartDrawer?.classList.add("open");

    cartOverlay?.classList.add("open");

    document.body.classList.add(
        "no-scroll"
    );

}


function closeCartDrawer() {

    cartDrawer?.classList.remove(
        "open"
    );

    cartOverlay?.classList.remove(
        "open"
    );

    document.body.classList.remove(
        "no-scroll"
    );

}


cartButton?.addEventListener(
    "click",
    openCart
);

closeCart?.addEventListener(
    "click",
    closeCartDrawer
);

cartOverlay?.addEventListener(
    "click",
    closeCartDrawer
);


/* =========================================================
   BROWSE MENU
========================================================= */

browseMenu?.addEventListener(
    "click",
    () => {

        closeCartDrawer();

        document
            .querySelector("#menu")
            ?.scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =========================================================
   WHATSAPP ORDER
========================================================= */

function createOrderMessage() {

    if (cart.length === 0) {
        return null;
    }


    let message =
        "Hello Bean & Brew! ☕\n\n";

    message +=
        "I'd like to place an order:\n\n";


    cart.forEach(item => {

        message +=
            `• ${item.name} x${item.quantity} — $${(
                item.price *
                item.quantity
            ).toFixed(2)}\n`;

    });


    const total =
        cart.reduce(
            (
                sum,
                item
            ) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    message +=
        `\nTotal: $${total.toFixed(2)}`;

    message +=
        "\n\nPlease confirm my order. Thank you!";


    return message;

}


orderWhatsapp?.addEventListener(
    "click",
    () => {

        const message =
            createOrderMessage();


        if (!message) {

            showToast(
                "Your cart is empty."
            );

            return;

        }


        const url =
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                message
            )}`;


        window.open(
            url,
            "_blank",
            "noopener"
        );

    }
);


/* =========================================================
   RESERVATION
========================================================= */

if (reservationForm) {

    const dateInput =
        document.querySelector(
            "#reservationDate"
        );


    /* Prevent selecting past dates */

    if (dateInput) {

        const today =
            new Date();

        const year =
            today.getFullYear();

        const month =
            String(
                today.getMonth() + 1
            ).padStart(2, "0");

        const day =
            String(
                today.getDate()
            ).padStart(2, "0");


        dateInput.min =
            `${year}-${month}-${day}`;

    }


    reservationForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .querySelector(
                        "#guestName"
                    )
                    .value
                    .trim();


            const phone =
                document
                    .querySelector(
                        "#guestPhone"
                    )
                    .value
                    .trim();


            const date =
                document
                    .querySelector(
                        "#reservationDate"
                    )
                    .value;


            const time =
                document
                    .querySelector(
                        "#reservationTime"
                    )
                    .value;


            const guests =
                document
                    .querySelector(
                        "#guestCount"
                    )
                    .value;


            let message =
                "Hello Bean & Brew! ☕\n\n";


            message +=
                "I'd like to request a table reservation.\n\n";


            message +=
                `Name: ${name}\n`;

            message +=
                `Phone: ${phone}\n`;

            message +=
                `Date: ${date}\n`;

            message +=
                `Time: ${time}\n`;

            message +=
                `Guests: ${guests}\n\n`;

            message +=
                "Please confirm availability. Thank you!";


            const url =
                `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    message
                )}`;


            window.open(
                url,
                "_blank",
                "noopener"
            );

        }
    );

}


/* =========================================================
   FOOTER WHATSAPP
========================================================= */

footerWhatsapp?.addEventListener(
    "click",
    event => {

        event.preventDefault();


        const message =
            encodeURIComponent(
                "Hello Bean & Brew! I'd like to ask a question. ☕"
            );


        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
            "_blank",
            "noopener"
        );

    }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimeout;


function showToast(message) {

    if (!toast) return;


    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2500
        );

}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

let revealObserver;


function observeRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal:not(.observed)"
        );


    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                !entry.isIntersecting
                            ) {
                                return;
                            }


                            entry.target.classList.add(
                                "active"
                            );

                            entry.target.classList.add(
                                "observed"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );

    }


    elements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

}


observeRevealElements();


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

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
        entries => {

            entries.forEach(
                entry => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    const currentId =
                        entry.target.getAttribute(
                            "id"
                        );


                    navLinks.forEach(
                        link => {

                            link.classList.remove(
                                "active"
                            );


                            if (
                                link.getAttribute(
                                    "href"
                                ) ===
                                `#${currentId}`
                            ) {

                                link.classList.add(
                                    "active"
                                );

                            }

                        }
                    );

                }
            );

        },
        {
            rootMargin:
                "-40% 0px -50% 0px",

            threshold: 0
        }
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);


/* =========================================================
   CLOSE MOBILE MENU OUTSIDE
========================================================= */

document.addEventListener(
    "click",
    event => {

        if (!navbar) return;


        const clickedInsideNavbar =
            navbar.contains(
                event.target
            );


        if (
            !clickedInsideNavbar &&
            navbar.classList.contains(
                "menu-open"
            )
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeMobileMenu();

            closeCartDrawer();

        }

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

renderMenu();

renderCart();