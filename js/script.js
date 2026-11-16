"use strict";


// Get the copyright year element.
const yearElement = document.getElementById("currentYear");

// Display the current year.
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// Get all WhatsApp buttons.
const whatsappButtons = document.querySelectorAll("[data-whatsapp]");

// Open WhatsApp when a button is clicked.
whatsappButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const message = button.getAttribute("data-whatsapp");

        const whatsappLink =
            "https://wa.me/2347065339385?text=" +
            encodeURIComponent(message);

        window.open(whatsappLink, "_blank");

    });

});