
import { getPosts } from "./api/posts/getPost.mjs"
import { postTemplate } from "./templates/cardTemplate.mjs"

// This function renders a list of posts in a specific area of a webpage.
export async function renderPostCardTemplate(containerId) {
    try {
        const posts = await getPosts();
        const container = document.querySelector(`#${containerId}`);

        // Check if the container element exists in the HTML.
        if (!container) {
            // If the container doesn't exist, stop and show an error message.
            throw new Error(`Container with ID '${containerId}' not found.`);
        }

        // Check if the data retrieved is in the correct format (an array of posts).
        if (!Array.isArray(posts)) {
            // If the data format is incorrect, stop and show an error message.
            throw new Error('Posts retrieval failed or the data format is incorrect.');
        }

        // Loop through each post and add its content to the container in the HTML.
        posts.forEach(post => {
            // Create HTML content for each post using a predefined template.
            const postContent = postTemplate(post);

            // Append the post content to the container in the webpage.
            container.append(postContent);
        });
    } catch (error) {
        // If there's an error in any step of the process, log it to the console.
        console.error('Error:', error);
    }
}

// To use this function, call it and provide the ID of the HTML element where you want to show the posts.
renderPostCardTemplate('auctionPosts');;


