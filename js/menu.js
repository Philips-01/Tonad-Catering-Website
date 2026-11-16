"use strict";

// Get the elements we need.
const searchInput = document.getElementById("menuSearch");
const filterButtons = document.querySelectorAll(".filter-button");
const menuItems = document.querySelectorAll(".menu-item");
const noResults = document.getElementById("noResults");

// Store the selected category.
let selectedCategory = "all";


// FUNCTION: Display the matching food items.

function filterMenu() {

    const searchValue = searchInput.value.toLowerCase();

    let visibleItems = 0;

    menuItems.forEach(function(item) {

        const foodName = item.dataset.name;
        const foodCategory = item.dataset.category;

        const matchesSearch = foodName.includes(searchValue);

        const matchesCategory =
            selectedCategory === "all" ||
            foodCategory.split(" ").includes(selectedCategory);

        if (matchesSearch && matchesCategory) {

            item.classList.remove("hidden");
            visibleItems++;

        } else {

            item.classList.add("hidden");

        }

    });

    // Show a message if nothing matches.
    if (visibleItems === 0) {
        noResults.classList.add("show");
    } else {
        noResults.classList.remove("show");
    }

}


// SEARCH FUNCTIONALITY

searchInput.addEventListener("input", function() {

    filterMenu();

});


// CATEGORY FILTER BUTTONS

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the category from the clicked button.
        selectedCategory = button.dataset.filter;

        // Remove active class from all buttons.
        filterButtons.forEach(function(filterButton) {
            filterButton.classList.remove("active");
        });

        // Highlight the selected button.
        button.classList.add("active");

        // Update the food items.
        filterMenu();

    });

});


// WHATSAPP ENQUIRY BUTTONS

const enquiryButtons = document.querySelectorAll(".menu-order-button");

enquiryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const foodName = button.dataset.food;

        const message =
            "Hello TONAD Catering Services, I would like to enquire about " +
            foodName + ". Please provide more information and pricing.";

        const whatsappLink =
            "https://wa.me/2347065339385?text=" +
            encodeURIComponent(message);

        window.open(whatsappLink, "_blank");

    });

});