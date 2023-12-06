import { createLogoutButton } from "./logoutBtn.mjs";
import { load } from "../../api/storage/index.mjs";


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

export function profileInNav() {
    const profileInfo = document.querySelector("#navProfile");

    if (isLoggedIn()) {
        const avatar = load("avatar");
        const username = load("username");
        const credits = load("credits");

        if (avatar && username && credits && profileInfo) {
            const avatarElement = document.createElement('img');
            avatarElement.src = avatar;
            avatarElement.alt = 'User Avatar';
            avatarElement.height = '20';
            avatarElement.width = '20';
            avatarElement.classList.add('mx-2', 'rounded-circle');

            const usernameElement = document.createElement('span');
            usernameElement.classList.add("me-2")
            usernameElement.textContent = username;

            const lineElement = document.createElement('span');
            lineElement.textContent = '|';
            lineElement.style.margin = '0 8px'; // Adjust the margin as needed

            const creditsElement = document.createElement('span');
            creditsElement.textContent = credits + ' Credits';

            // Clear existing content and append new content to profileInfo
            profileInfo.innerHTML = '';
            profileInfo.appendChild(avatarElement);
            profileInfo.appendChild(usernameElement);
            profileInfo.appendChild(lineElement);
            profileInfo.appendChild(creditsElement);
        }
    } else {
        // If not logged in, clear the profileInfo content
        profileInfo.innerHTML = '';
    }
}

export function updateProfileAndButtons() {
    updateButtonBasedOnLoginStatus();
    if (isLoggedIn()) {
        profileInNav();
    }
}

document.addEventListener('DOMContentLoaded', updateProfileAndButtons);




