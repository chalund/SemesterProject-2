import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/profiles";
const bids = "/bids"
const method = "get";


export async function getProfileBids(name) {
    const token = load("accessToken");
    const username = load("username")
    const getProfileBidsUrl = `${API_BASE_URL}${action}/${username}${bids}`; // Replace with your actual user info endpoint

    try {
        const response = await fetch(getProfileBidsUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
        const getProfileBids = await response.json();
        console.log(getProfileBids)
        return getProfile;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
