import { getProfile } from "./getProfile.mjs"; 
import { updateButtonBasedOnLoginStatus } from "../../handlers/buttons/userLoggedIn.mjs";
import { isLoggedIn } from "../../handlers/buttons/userLoggedIn.mjs";
import { load } from "../storage/index.mjs";

export function profileInNav(username, credits) {
    const profileInfo = document.querySelector("#navProfile");

    if (isLoggedIn() && profileInfo) {
        const avatar = load("avatar");

        if (username && credits) {
            const avatarElement = document.createElement('img');
            avatarElement.src = avatar || "../images/default-avatar.png"; // Replace with default avatar path
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
        // If not logged in or profileInfo not found, clear the profileInfo content
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