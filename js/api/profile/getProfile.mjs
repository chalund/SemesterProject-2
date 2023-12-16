import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/profiles";
const method = "get";

export async function getProfile(name) {
    const token = load("accessToken");
    const username = load("username")
    const getProfileUrl = `${API_BASE_URL}${action}/${username}`; 

    try {
        const response = await fetch(getProfileUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
        const getProfile = await response.json();
        // console.log(getProfile)
        return getProfile;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function updateProfileLayout() {
    try {
        const userData = await getProfile();

        const profileAvatar = document.querySelector('#profile-avatar');
        const profileUsername = document.querySelector('#profile-name');
        const profileEmail = document.querySelector('#profile-email');
        const profileCredits = document.querySelector('#profile-credits');
        const profileWins = document.querySelector('#profile-wins');

        if (profileAvatar && profileUsername && profileEmail && profileCredits && profileWins) {
            if (!userData.avatar) {
                profileAvatar.src = "../images/logo.png";
                profileAvatar.alt = "avatar";
            } else {
                profileAvatar.src = userData.avatar;
            }

            profileUsername.textContent = userData.name || '';
            profileEmail.textContent = userData.email || '';

            profileCredits.textContent = `${userData.credits || 0} credits`;

            if (userData.wins.length === 0) {
                profileWins.textContent = '0 Wins';
            } else {
                profileWins.textContent = `${userData.wins.length} Wins`;
            }
        }
    } catch (error) {
        console.error(error);
        // Handle errors as needed
    }
}