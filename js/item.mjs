import { getProfileListings } from "./api/profile/getProfileListings.mjs";
import { postProfileTemplate } from "./templates/profileTemplate.mjs"

export async function renderPostProfileTemplate(containerId) {
    try {
        const posts = await getProfileListings();
        const container = document.querySelector(`#${containerId}`);
        
        if (!container) throw new Error(`Container with ID '${containerId}' not found.`);
        if (!Array.isArray(posts)) throw new Error('Posts retrieval failed or the data format is incorrect.');
        
        posts.forEach(post => container.append(postProfileTemplate(post)));
    } catch (error) {
        console.error('Error:', error);
    }
}

// Call the function 'renderPostProfileTemplate' with the ID of the container element as 'auctionPosts'
renderPostProfileTemplate('profilePosts');