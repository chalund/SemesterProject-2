import { renderCardTemplate } from "./templates/renderCardTemplate.mjs";
import { getActivePosts } from "./api/posts/getPost.mjs";
import { updateButtonBasedOnLoginStatus , isLoggedIn} from "./handlers/buttons/logoutBtn.mjs";



renderCardTemplate('auctionPosts', getActivePosts)
updateButtonBasedOnLoginStatus()

import { load } from "./api/storage/index.mjs";


export function viewProfile() {
    if (isLoggedIn()) {
        const avatar = load("avatar");
        const username = load("username");
        const credits = load("credits");
        const profileInfo = document.querySelector("#navProfile");

        // Check if all data is available before updating the profile info
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
        const profileInfo = document.querySelector("#navProfile");
        profileInfo.innerHTML = '';
    }
}

// Call the function to update the profile when the page loads
document.addEventListener('DOMContentLoaded', viewProfile);
;



