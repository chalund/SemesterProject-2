import { fetchToken } from "../fetchToken.mjs";
import { API_BASE_URL } from "../constants.mjs";

const action = "/api/v1/auction/listings";
const activePosts = "?_active=true";


export async function getPosts() {
    const getPostURL = `${API_BASE_URL}${action}?sort=created`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const getPosts = await response.json();

        return getPosts; 
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}


export async function getActivePosts() {
    const getPostURL = `${API_BASE_URL}${action}${activePosts}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const getActivePosts = await response.json();

        return getActivePosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}