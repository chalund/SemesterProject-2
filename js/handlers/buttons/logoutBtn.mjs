// Function to create a logout button element
function createLogoutButton() {
    const logoutButton = document.createElement('a');
    logoutButton.href = "#"; // Set href to "#" or any suitable value
    logoutButton.className = "btn btn-danger my-2 my-sm-0 ms-2 d-none d-sm-block";
    logoutButton.textContent = "Logout";
    logoutButton.id = "logout"; // Set an ID for identification

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

// Function to check if the user is logged in (replace this with your authentication logic)
function isLoggedIn() {
    const userToken = localStorage.getItem('accessToken'); // Retrieve the user token from localStorage
    return !!userToken; // Return true if a token exists, indicating the user is logged in; otherwise, return false
}

// Function to update button based on user login status
function updateButtonBasedOnLoginStatus() {
    const loginListItem = document.getElementById('loginListItem');

    if (isLoggedIn()) {
        const logoutButton = createLogoutButton();
        loginListItem.innerHTML = ''; // Clear existing content
        loginListItem.appendChild(logoutButton); // Append the logout button
    } else {
        // Handle case when user is not logged in (if needed)
    }
}

// Call the function to update button when the page loads
document.addEventListener('DOMContentLoaded', updateButtonBasedOnLoginStatus);




