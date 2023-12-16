import { createLogoutButton } from "./logoutBtn.mjs";

// Function to check if the user is logged in
export function isLoggedIn() {
    const userToken = localStorage.getItem('accessToken');
    return !!userToken;
}



// Function to update button and profile link based on user login status
export function updateButtonBasedOnLoginStatus() {
    document.addEventListener('DOMContentLoaded', () => {
        const loginListItem = document.getElementById('loginListItem');
        const profileLink = document.getElementById('profileLink');

        if (!loginListItem || !profileLink) {
            console.error('Login list item or profile link not found.');
            return;
        }

        if (isLoggedIn()) {
            const logoutButton = createLogoutButton();
            loginListItem.innerHTML = '';
            loginListItem.appendChild(logoutButton);

            profileLink.style.display = 'block'; // Show the profile link
        } else {
            profileLink.style.display = 'none'; // Hide the profile link
        }
    });
}

document.addEventListener('DOMContentLoaded', updateButtonBasedOnLoginStatus);

