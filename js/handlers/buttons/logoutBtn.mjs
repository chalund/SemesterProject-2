// authFunctions.js (authFunctions module)

// Function to create a logout button element
export function createLogoutButton() {
    const logoutButton = document.createElement('a');
    logoutButton.href = "#";
    logoutButton.className = "btn btn-danger my-2 my-sm-0 ms-2 d-none d-sm-block";
    logoutButton.textContent = "Logout";
    logoutButton.id = "logout";

    logoutButton.addEventListener("click", () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        
        if (confirmLogout) {
            localStorage.clear();
            window.location.replace("/profile/login/index.html");
        } else {
            console.log("Canceled logout");
        }
    });

    return logoutButton;
}

// Function to check if the user is logged in
export function isLoggedIn() {
    const userToken = localStorage.getItem('accessToken');
    return !!userToken;
}

// Function to update button based on user login status
export function updateButtonBasedOnLoginStatus() {
    const loginListItem = document.getElementById('loginListItem');
    const profileLink = document.getElementById('profileLink');

    if (isLoggedIn()) {
        const logoutButton = createLogoutButton();
        loginListItem.innerHTML = '';
        loginListItem.appendChild(logoutButton);
        profileLink.classList.remove('disabled');
        profileLink.removeAttribute('tabindex');
        profileLink.removeAttribute('aria-disabled');
        profileLink.href = "/profile/index.html"; // Update the href if needed
    } else {
        profileLink.classList.add('disabled');
        profileLink.setAttribute('tabindex', '-1');
        profileLink.setAttribute('aria-disabled', 'true');
        profileLink.href = "#"; // Set a default or non-clickable link if user is not logged in
    }

    // Check if the user is on the profile page and set it active
    if (window.location.pathname.endsWith('/profile/index.html')) {
        profileLink.classList.add('active'); // You may need to define CSS for the 'active' class
    } else {
        profileLink.classList.remove('active');
    }
}

// Call the function to update button when the page loads
document.addEventListener('DOMContentLoaded', updateButtonBasedOnLoginStatus);





