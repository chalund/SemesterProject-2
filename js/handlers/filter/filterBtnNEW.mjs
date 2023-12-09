import { getActivePosts , getPostsCreatedToday, getPostsEndsToday, getPostsWithBids} from '../../api/posts/getPost.mjs';

import { renderCardTemplate } from "../../templates/renderCardTemplate.mjs";
renderCardTemplate('auctionPosts');



// Function to change the header
export function changeHeader(newHeaderText) {
    const header = document.querySelector('#auctionHeader');
    if (header) {
        header.textContent = newHeaderText;
    }
}

export function clearContainer() {
    const container = document.querySelector('#auctionPosts'); // Corrected ID spelling
    if (container) {
        container.innerHTML = '';
    }
}

// Function to handle filter for all active posts
export async function handleFilterAllPosts() {
    try {
        changeHeader('All Auction ');
        clearContainer()
        renderCardTemplate('auctionPosts', getActivePosts);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for new posts
export async function handleFilterNewPosts() {
    try {
        changeHeader('New Auction Posts');
        clearContainer()
        renderCardTemplate('auctionPosts', getPostsCreatedToday);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for posts ending today
export async function handleFilterEndsTodayPosts() {
    try {
        changeHeader('Auction ends today Posts');
        clearContainer()
        const postsEndToday = await getPostsEndsToday(); // Fetch data by calling the function
        renderCardTemplate('auctionPosts', postsEndToday); // Pass the fetched data to renderCardTemplate
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for popular posts
export async function handleFilterPopularPost() {
    try {
        changeHeader('Popular auction posts');
        renderCardTemplate('auctionPosts', getPostsWithBids);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Adding event listeners to the respective functions
document.querySelector('#filterAllPosts').addEventListener('click', handleFilterAllPosts);
document.querySelector('#filterNewPosts').addEventListener('click', handleFilterNewPosts);
document.querySelector('#filterEndsTodayPosts').addEventListener('click', handleFilterEndsTodayPosts);
document.querySelector('#filterPopularPost').addEventListener('click', handleFilterPopularPost);

