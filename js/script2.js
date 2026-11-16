"use strict";

/* =========================================
   TONAD CATERING SERVICES
   Main JavaScript
========================================= */


/* ---------- Website configuration ---------- */

const TONAD_CONFIG = {
    brandName: "TONAD CATERING SERVICES",

    /*
       Add the real business WhatsApp number here.

       Nigerian number format:
       234 followed by the phone number without
       the first zero.

       Example format: "2348012345678"
       The number above is only an example format.
    */

    whatsappNumber: ""
};


/* ---------- Select page elements ---------- */

const siteNotice = document.getElementById("siteNotice");
const currentYear = document.getElementById("currentYear");

let noticeTimer;


/* ---------- Show a notification ---------- */

function showNotice(message) {
    if (!siteNotice) {
        return;
    }

    siteNotice.textContent = message;
    siteNotice.classList.add("show");

    window.clearTimeout(noticeTimer);

    noticeTimer = window.setTimeout(() => {
        siteNotice.classList.remove("show");
    }, 5000);
}


/* ---------- WhatsApp integration ---------- */

function openWhatsApp(message) {
    const number = TONAD_CONFIG.whatsappNumber.replace(/\D/g, "");

    /*
       If no real number has been configured,
       show a helpful message instead of opening
       a broken WhatsApp link.
    */

    if (!number) {
        showNotice(
            "WhatsApp ordering is not connected yet. " +
            "The website owner needs to add TONAD's real WhatsApp number."
        );

        return;
    }

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL =
        `https://wa.me/${number}?text=${encodedMessage}`;

    window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
    );
}


/* ---------- Connect all WhatsApp buttons ---------- */

const whatsappButtons = document.querySelectorAll("[data-whatsapp]");

whatsappButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const message = button.dataset.whatsapp;

        if (!message) {
            showNotice("Please contact TONAD for more information.");
            return;
        }

        openWhatsApp(message);
    });
});


/* ---------- Close mobile navigation after selection ---------- */

const navigation = document.getElementById("mainNavigation");

if (navigation) {
    const navigationLinks = navigation.querySelectorAll(".nav-link");

    navigationLinks.forEach((link) => {
        link.addEventListener("click", () => {
            /*
               Bootstrap manages the opening and closing
               of the responsive navigation menu.
            */

            if (
                window.innerWidth < 992 &&
                navigation.classList.contains("show")
            ) {
                const collapse = bootstrap.Collapse.getOrCreateInstance(
                    navigation
                );

                collapse.hide();
            }
        });
    });
}


/* ---------- Update the footer year ---------- */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/* ---------- Reveal sections on scroll ---------- */

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (
    "IntersectionObserver" in window &&
    !prefersReducedMotion
) {
    document.documentElement.classList.add("js-reveal");

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    document.querySelectorAll(".reveal").forEach((element) => {
        revealObserver.observe(element);
    });
}