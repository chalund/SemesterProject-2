import { getProfile } from "./getProfile.mjs"; 
import { updateButtonBasedOnLoginStatus } from "../../handlers/buttons/userLoggedIn.mjs";
import { isLoggedIn } from "../../handlers/buttons/userLoggedIn.mjs";
import { load } from "../storage/index.mjs";

export function profileInNav(username, credits) {
    const profileInfo = document.querySelector("#navProfile");

    if (isLoggedIn() && profileInfo) {
        const avatar = load("avatar");

        if (username && credits) {
            const usernameElement = document.createElement('span');
            usernameElement.classList.add("me-2")
            usernameElement.textContent = username;

            const lineElement = document.createElement('span');
            lineElement.textContent = '|';
            lineElement.style.margin = '0 8px'; 

            const creditsElement = document.createElement('span');
            creditsElement.textContent = credits + ' Credits';

            profileInfo.innerHTML = '';
            profileInfo.appendChild(usernameElement);
            profileInfo.appendChild(lineElement);
            profileInfo.appendChild(creditsElement);
        }
    } else {
        
        profileInfo.innerHTML = '';
    }
}

export async function updateProfileAndButtons() {
    updateButtonBasedOnLoginStatus();

    if (isLoggedIn()) {
        try {
            const userData = await getProfile();

            if (userData) {
                const { name: username, credits } = userData;
                profileInNav(username, credits);
            }
        } catch (error) {
            console.error(error);
            // Handle errors as needed
        }
    }
}

document.addEventListener('DOMContentLoaded', updateProfileAndButtons);