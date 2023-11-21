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

