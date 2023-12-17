import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";
import { productTemplate } from "../../templates/productTemplate.mjs"; 
import { bidModal } from "../../handlers/form/bidModal.mjs";


const action = "/api/v1/auction/listings";
const bids = "?_bids=true"
const bid = "bids"


window.addEventListener('DOMContentLoaded', async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const postId = queryParams.get('id');

    if (postId) {
        try {
            const postData = await getPostId(postId);
  
            const template = productTemplate(postData);

            const postDetailsContainer = document.querySelector('#viewProduct');
            postDetailsContainer.append(template);

            bidModal(postId);
           
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

        console.error('Error in getPostId:', error);
        throw error;
    }
}

export async function addBid(postId, bidAmount) {
    const token = load('accessToken');
    const bidUrl = `${API_BASE_URL}${action}/${postId}/${bid}`;

    try {
        const data = {
            amount: Number(bidAmount)
        };

        const response = await fetch(bidUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const newBid = await response.json()
            return newBid;

        } else {
            throw new Error('Failed to add bid');
        }
    } catch (error) {
  
        throw error;
    }
}

