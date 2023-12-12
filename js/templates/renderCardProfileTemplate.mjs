import { getProfileListings } from "../api/profile/getProfileListings.mjs";
// import { getProfileBids} from "../api/profile/getProfileBids.mjs"
import { postProfileTemplate } from "./cardProfileTemplate.mjs";
import { getProfileBiddings } from "../api/posts/postById.mjs";

export async function renderCardProfileTemplate(containerId, posts) {
    try {
        const container = document.querySelector(`#${containerId}`);
        
        if (!container) throw new Error(`Container with ID '${containerId}' not found.`);
        if (!Array.isArray(posts)) throw new Error('Posts retrieval failed or the data format is incorrect.');
        
        posts.forEach(post => container.append(postProfileTemplate(post)));
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function 'renderPostProfileTemplate' with the ID of the container element as 'auctionPosts'
// document.addEventListener('DOMContentLoaded', async() => {
//     const listings = await getProfileListings();
//     renderCardProfileTemplate('profilePosts', listings);
// });

// document.addEventListener('DOMContentLoaded', async() => {
//     const bids = await getProfileBiddings();
//     renderCardProfileTemplate('profileActiveBids', bids);
// });

