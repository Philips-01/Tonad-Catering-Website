
"use strict";


// Get the copyright year element.
const yearElement = document.getElementById("currentYear");

// Display the current year.
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
