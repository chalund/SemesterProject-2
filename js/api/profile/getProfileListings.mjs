import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/profiles";
const method = "get";

export async function getProfileListings(name) {
    const token = load("accessToken");
    const username = load("username")
    const getProfileListingUrl = `${API_BASE_URL}${action}/${username}/listings`; // Replace with your actual user info endpoint

    try {
        const response = await fetch(getProfileListingUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
        const profileListings = await response.json();
    
        return profileListings;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
