"use strict";

/* ======================================
   TONAD CATERING SERVICES
   Menu Page JavaScript
====================================== */

const menuCards = document.querySelectorAll(".menu-food-card");
const filterButtons = document.querySelectorAll(".menu-filter");
const searchInput = document.getElementById("menuSearch");
const resultCount = document.getElementById("menuResultCount");
const emptyState = document.getElementById("menuEmptyState");
const resetButton = document.getElementById("resetMenu");

let activeCategory = "all";

/* Update the visible menu cards. */

function filterMenu() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    let visibleItems = 0;

    menuCards.forEach((card) => {
        const category = card.dataset.category;
        const searchableText = card.dataset.name.toLowerCase();
        const dishName = card.querySelector("h3").textContent.toLowerCase();

        const matchesCategory =
            activeCategory === "all" || category === activeCategory;

        const matchesSearch =
            searchableText.includes(searchTerm) ||
            dishName.includes(searchTerm);

        const shouldShow = matchesCategory && matchesSearch;

        card.hidden = !shouldShow;

        if (shouldShow) {
            visibleItems++;
        }
    });

    /* Update the result message. */

    if (resultCount) {
        resultCount.textContent =
            `Showing ${visibleItems} ${visibleItems === 1 ? "item" : "items"}`;
    }

    /* Display a message when no items match. */

    if (emptyState) {
        emptyState.hidden = visibleItems !== 0;
    }
}

/* Handle category button clicks. */

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.filter;

        filterButtons.forEach((item) => {
            const isActive = item === button;

            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        filterMenu();
    });
});

/* Handle searches as the user types. */

if (searchInput) {
    searchInput.addEventListener("input", filterMenu);
}

/* Reset the filters and search. */

function resetMenu() {
    activeCategory = "all";

    if (searchInput) {
        searchInput.value = "";
    }

    filterButtons.forEach((button) => {
        const isActive = button.dataset.filter === "all";

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    filterMenu();
}

if (resetButton) {
    resetButton.addEventListener("click", resetMenu);
}

/* Send an enquiry for a selected dish to WhatsApp. */

document.querySelectorAll(".menu-order-button").forEach((button) => {
    button.addEventListener("click", () => {
        const dishName = button.dataset.dish;

        const message =
            `Hello TONAD CATERING SERVICES, I am interested in ${dishName}. ` +
            "Please let me know if it is available, the available portions, " +
            "and the current price.";

        const whatsappURL =
            `https://wa.me/2348181164290?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank", "noopener,noreferrer");
    });
});

/* Show the initial menu. */

filterMenu();