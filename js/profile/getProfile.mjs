// import { API_BASE_URL } from "../api/constants.mjs";
// import { authFetch } from "../api/authFetch.mjs";

// const action = "/api/v1/auction/profiles"

// export async function getProfiles() {
//     const getProfilesUrl = `${API_BASE_URL}${action}`;

//     const response = await authFetch(getProfilesUrl);
//     const readProfile = await response.json();
//     console.log(readProfile)

// }

// getProfiles()

console.log("getProfile.mjs")

import { API_BASE_URL } from "../api/constants.mjs";
import { authFetch } from "../api/authFetch.mjs";

const action = "/api/v1/auction/profiles"

export async function fetchUserProfile() {
    const getProfileUrl = `${API_BASE_URL}${action}`;

    try {
        const response = await authFetch(getProfileUrl); // Replace this with your API endpoint

        if (response.ok) {
            const userData = await response.json();
            console.log(userData)
            return userData;

        } else {
            throw new Error('Failed to fetch user data');
        }
    } catch (error) {
        console.error('Error fetching user profile:', error);
        // Handle the error (display message, retry logic, etc.)
        return null;
    }
}