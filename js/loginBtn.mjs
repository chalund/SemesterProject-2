  // Function to toggle login button and link based on window width
  export function toggleLoginDisplay() {
    // Get references to the login button, link, and listings link
    const loginButton = document.getElementById("loginButton");
    const loginLink = document.getElementById("loginLink");
    const listingsLink = document.getElementById("listingsLink");

    // Check window width and toggle visibility accordingly
    if (window.innerWidth < 576) {
        loginButton.style.display = "none";
        loginLink.style.display = "inline-block";
    } else {
        loginButton.style.display = "inline-block";
        loginLink.style.display = "none";
    }

    // Add event listener to window resize for responsiveness
    window.addEventListener("resize", toggleLoginDisplay);
}

// Call the function initially
toggleLoginDisplay();


import * as storage from "./api/storage/index.mjs";

export function updateLoginButtonFromLocalStorage() {
    const loginButton = document.getElementById("loginButton");
    const loginLink = document.getElementById("loginLink");

    // Retrieve user data from local storage
    const userData = storage.load("username"); // Change "username" to the appropriate key
    
    if (userData) {
        const userIcon = `<i class="fas fa-user me-1"></i>`;
        const userContent = `${userIcon}${userData}`;
        
        loginButton.innerHTML = userContent;
        loginLink.style.display = "none"; // Hide the login link if user is logged in
    }
}

// Call the function to update login button based on local storage data
updateLoginButtonFromLocalStorage();

