import { createLogoutButton } from "./logoutBtn.mjs";

export function isLoggedIn() {
    const userToken = localStorage.getItem('accessToken');
    return !!userToken;
}

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

            profileLink.style.display = 'block'; 
        } else {
            profileLink.style.display = 'none'; 
        }
    });
}

document.addEventListener('DOMContentLoaded', updateButtonBasedOnLoginStatus);

