import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";
import { productTemplate } from "../../templates/productTemplate.mjs"; 


const action = "/api/v1/auction/listings";
const seller = "?_seller=true"
const bids = "?_bids=true"


window.addEventListener('DOMContentLoaded', async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const postId = queryParams.get('id');
    console.log('postId:', postId); // Log the postId
    if (postId) {
        try {
            const postData = await getPostId(postId);
            // Use the retrieved postData as needed
            console.log(postData);
            const template = productTemplate(postData)

            const postDetailsContainer = document.querySelector('#viewProduct');
            postDetailsContainer.append(template)

        } catch (error) {
            // Handle errors occurring during data retrieval
            console.error('Error fetching post data:', error);
        }
    }
});

export async function getPostId(id) {
    const getPostUrl = `${API_BASE_URL}${action}/${id}${bids}`;
    const token = load("accessToken");

    try {
        const response = await fetch(getPostUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });

        const postData = await response.json();
        
        return postData;
    } catch (error) {
        // Log and re-throw the error for handling outside this function
        console.error('Error in getPostId:', error);
        throw error;
    }
}

export async function getPostIdBids(id) {
    const getPostUrl = `${API_BASE_URL}${action}/${id}${bids}`;
    const token = load("accessToken");

    try {
        const response = await fetch(getPostUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });

        const postData = await response.json();
        
        return postData;
    } catch (error) {
        // Log and re-throw the error for handling outside this function
        console.error('Error in getPostId:', error);
        throw error;
    }
}