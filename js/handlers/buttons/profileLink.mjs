import { isLoggedIn } from "./userLoggedIn.mjs";

export function toggleProfileLink() {
    const profileLink = document.getElementById('profileLink');

    if (!isLoggedIn()) {
        profileLink.classList.add('d-none'); 
    } else {
        profileLink.classList.remove('d-none');
    }
}

document.addEventListener("DOMContentLoaded", toggleProfileLink);