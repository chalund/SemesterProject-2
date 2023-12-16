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
    }

}








