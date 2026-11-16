
"use strict";

// Get all promotion enquiry buttons.
const promotionButtons = document.querySelectorAll(".promotion-enquiry");

// Add a click event to each button.
promotionButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the selected package name.
        const offerName = button.dataset.offer;

        // Prepare the WhatsApp message.
        const message =
            "Hello TONAD Catering Services, I am interested in the " +
            offerName +
            ". Please provide more information about the package, availability and pricing.";

        // Create the WhatsApp link.
        const whatsappLink =
            "https://wa.me/2347065339385?text=" +
            encodeURIComponent(message);

        // Open WhatsApp.
        window.open(whatsappLink, "_blank");

    });

});