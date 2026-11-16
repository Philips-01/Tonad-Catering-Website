
"use strict";

/* =====================================
   TONAD CATERING SERVICES
   Catering Services Page JavaScript
===================================== */

// Get all service enquiry buttons.
const serviceButtons = document.querySelectorAll(".service-enquiry");

// Add a click event to each button.
serviceButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the selected service name.
        const serviceName = button.dataset.service;

        // Prepare the WhatsApp message.
        const message =
            "Hello TONAD Catering Services, I would like to enquire about " +
            serviceName +
            ". Please provide more information and pricing.";

        // Create the WhatsApp link.
        const whatsappLink =
            "https://wa.me/2347065339385?text=" +
            encodeURIComponent(message);

        // Open WhatsApp in a new tab.
        window.open(whatsappLink, "_blank");

    });

});
