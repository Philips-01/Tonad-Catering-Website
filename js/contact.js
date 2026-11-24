"use strict";

// Get the contact form.
const contactForm = document.getElementById("contactForm");

// Get the message element.
const formMessage = document.getElementById("formMessage");

// Listen for form submission.
contactForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing.
    event.preventDefault();

    // Get the customer's information.
    const customerName = document.getElementById("customerName").value.trim();
    const customerPhone = document.getElementById("customerPhone").value.trim();
    const customerEmail = document.getElementById("customerEmail").value.trim();
    const enquiryType = document.getElementById("enquiryType").value;
    const eventDate = document.getElementById("eventDate").value;
    const guestCount = document.getElementById("guestCount").value;
    const customerMessage = document.getElementById("customerMessage").value.trim();


    // Prepare the WhatsApp message.
    const whatsappMessage =
        "Hello TONAD Catering Services,\n\n" +

        "I would like to make an enquiry.\n\n" +

        "Name: " + customerName + "\n" +
        "Phone Number: " + customerPhone + "\n" +
        "Email: " + (customerEmail || "Not provided") + "\n" +
        "Enquiry Type: " + enquiryType + "\n" +
        "Event Date: " + (eventDate || "Not specified") + "\n" +
        "Number of Guests: " + (guestCount || "Not specified") + "\n\n" +

        "Message:\n" + customerMessage;


    // Create the WhatsApp link.
    const whatsappLink =
        "https://wa.me/2347065339385?text=" +
        encodeURIComponent(whatsappMessage);


    // Show a message before opening WhatsApp.
    formMessage.textContent =
        "Your enquiry is ready. Opening WhatsApp...";


    // Open WhatsApp.
    const whatsappWindow = window.open(
        whatsappLink,
        "_blank",
        "noopener,noreferrer"
    );

    // Check whether the browser allowed the new window.
    if (!whatsappWindow) {
        formMessage.textContent =
            "WhatsApp could not open automatically. Please allow pop-ups and try again.";
    }

});