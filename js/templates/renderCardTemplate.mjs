import { postTemplate } from "./cardTemplate.mjs";
import { getPosts } from "../api/posts/getPost.mjs";

const postsPerPage = 12;
let currentPage = 1;
let postsData = []; // To store all fetched posts

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

        postsData = posts; // Store all posts data

        // Calculate start and end indices for posts based on the current page
        const startIndex = (currentPage - 1) * postsPerPage;
        const endIndex = startIndex + postsPerPage;

        const currentPosts = postsData.slice(startIndex, endIndex);

        // Clear the container before appending new posts
        container.innerHTML = "";

        currentPosts.forEach(post => {
            const postContent = postTemplate(post);
            container.append(postContent);
        });

        // Hide loader after rendering
        loader.style.display = "none";
    } catch (error) {
        console.error('Error:', error);
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const posts = await getPosts();
    renderCardTemplate('auctionPosts', posts);

    const btnPrev = document.getElementById("btnPrev");
    const btnNext = document.getElementById("btnNext");

    btnPrev.addEventListener("click", goToPreviousPage);
    btnNext.addEventListener("click", goToNextPage);
});

function goToPreviousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderCardTemplate('auctionPosts', postsData);
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(postsData.length / postsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderCardTemplate('auctionPosts', postsData);
    }
}



