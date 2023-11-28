import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/profiles";
const method = "get";


export async function getProfile(name) {
    const token = load("accessToken");
    const username = load("username")
    const getProfileUrl = `${API_BASE_URL}${action}/${username}`; // Replace with your actual user info endpoint

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
        // console.log(userData)

        // Update the HTML elements with user info
        const profileAvatar = document.querySelector('#profile-avatar');
        const profileUsername = document.querySelector('#profile-name');
        const profileEmail = document.querySelector('#profile-email');
        const profileCredits = document.querySelector('#profile-credits');
        const profileWins = document.querySelector('#profile-wins')
        const profileListings = document.querySelector('#profile-listings')

        if (profileAvatar && profileUsername && profileEmail && profileCredits && profileWins) {
            if (!userData.avatar) {
                profileAvatar.src = "../images/logo.png";
                profileAvatar.alt = "avatar";
            } else {
                profileAvatar.src = userData.avatar;
            }
            
            profileUsername.textContent = userData.name;
            profileEmail.textContent = userData.email;

            profileCredits.textContent = `${userData.credits} credits`;

            if (userData.wins.length === 0) {
                profileWins.textContent = '0 Wins'; // If wins array length is 0, display '0'
              } else {
                profileWins.textContent = `${userData.wins.length} Wins`; // Display the actual count of wins
              }
            
              if(userData._count.listings === 0) {
                profileListings.textContent = `You have no listings at the moment`
              } else {
                profileListings.textContent = `${userData._count.listings}`
              }
         
            }
            

    } catch (error) {
        console.error(error);
        // Handle errors as needed
    }
}