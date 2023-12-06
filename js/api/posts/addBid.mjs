import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings";
const bid = "/bids"
const method = "POST";


window.addEventListener('DOMContentLoaded', async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const postId = queryParams.get('id');
    console.log('postId:', postId); // Log the postId
    if (postId) {
        try {
            const postData = await createBid(postId);
            // Use the retrieved postData as needed
            console.log(postData);
 

        } catch (error) {
            // Handle errors occurring during data retrieval
            console.error('Error fetching post data:', error);
        }
    }
});


export async function createBid(id) {
    const token = load("accessToken");
    const createBidUrl = `${API_BASE_URL}${action}/${id}${bid}`;

    try {
        // Create a bid object with necessary details
        const bidData = {
            // Include details about the bid (e.g., price, bidder information, etc.)
            // Example:
            price: 100, // Replace with actual bid price
            bidderId: "your_user_id", // Replace with actual user ID
            // Add any other necessary details for the bid
        };

        const response = await fetch(createBidUrl, {
            method,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(bidData), // Stringify the bid object
        });

        const postData = await response.json();
        console.log(postData);
        return postData;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
