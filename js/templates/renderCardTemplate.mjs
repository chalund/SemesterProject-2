import { postTemplate } from "./cardTemplate.mjs"
import { getPosts} from "../api/posts/getPost.mjs"; 

export async function renderCardTemplate(containerId, getPostsFunction) {
    try {
        const posts = await getPosts();
        // console.log(posts)
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
    } catch (error) {
        console.error('Error:', error);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    renderCardTemplate('auctionPosts', getPosts)
});
