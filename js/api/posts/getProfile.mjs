import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/profiles";
const method = "get";

// Function to fetch user info
async function getUserInfo() {
    const token = load("accessToken");
    const userInfoUrl = `${API_BASE_URL}${action}`; // Replace with your actual user info endpoint

    try {
        const response = await fetch(userInfoUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// Function to update profile layout with user info
async function updateProfileLayout() {
    try {
        const userData = await getUserInfo();

        // Update the HTML elements with user info
        const profileName = document.querySelector('.panel.profile-widget h4');
        const profileEmail = document.querySelector('.panel.profile-widget div:nth-child(3)');
        const profileCredits = document.querySelector('.panel.profile-widget div:nth-child(4)');

        if (profileName && profileEmail && profileCredits) {
            profileName.textContent = userData.name; // Update with the actual property names from your user data
            profileEmail.textContent = userData.email;
            profileCredits.textContent = `${userData.credits} credits`;
        }
    } catch (error) {
        console.error(error);
        // Handle errors as needed
    }
}

// Call the function to update the profile layout when the page loads or as needed
updateProfileLayout();