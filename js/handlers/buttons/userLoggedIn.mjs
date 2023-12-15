import { createLogoutButton } from "./logoutBtn.mjs";
import { load } from "../../api/storage/index.mjs";


// Function to check if the user is logged in
export function isLoggedIn() {
    const userToken = localStorage.getItem('accessToken');
    return !!userToken;
}


export function updateButtonBasedOnLoginStatus() {
    const loginListItem = document.getElementById('loginListItem');
    const profileLink = document.getElementById('profileLink');



    if (isLoggedIn()) {
        const logoutButton = createLogoutButton();
        loginListItem.innerHTML = '';
        loginListItem.append(logoutButton);
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








