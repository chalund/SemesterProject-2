import { postTemplate } from "./cardTemplate.mjs";
import { getPosts } from "../api/posts/getPost.mjs";

export async function renderCardTemplate(containerId, posts) {
    try {
        const loader = document.querySelector(".loader");
        const container = document.querySelector(`#${containerId}`);

        if (!container) {
            throw new Error(`Container with ID '${containerId}' not found.`);
        }

        if (!Array.isArray(posts)) {
            throw new Error('Posts retrieval failed or the data format is incorrect.');
        }

        posts.forEach(post => {
            const postContent = postTemplate(post);
            container.append(postContent);
        });

        loader.style.display = "none";
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const posts = await getPosts();
    renderCardTemplate('auctionPosts', posts);
});