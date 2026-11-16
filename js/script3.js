"use strict";

/* =====================================
   TONAD CATERING SERVICES
   Main JavaScript
===================================== */

const TONAD_CONFIG = {
    businessName: "TONAD CATERING SERVICES",
    whatsappNumber: "2348181164290"
};

/* Update the copyright year automatically. */

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Open WhatsApp with a prefilled message. */

function openWhatsApp(message) {
    const number = TONAD_CONFIG.whatsappNumber;

    const whatsappURL =
        `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank", "noopener,noreferrer");
}

/* Connect all elements carrying data-whatsapp. */

const whatsappElements = document.querySelectorAll("[data-whatsapp]");

whatsappElements.forEach((element) => {
    element.addEventListener("click", (event) => {
        event.preventDefault();

        const message = element.dataset.whatsapp;

        if (message) {
            openWhatsApp(message);
        }
    });
});