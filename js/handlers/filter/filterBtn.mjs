import { getActivePosts, getPostsEndsToday, getPostsCreatedToday, getPostsWithBids } from '../../api/posts/getPost.mjs';

import { renderCardTemplate } from "../../templates/renderCardTemplate.mjs";
renderCardTemplate('auctionPost', getActivePosts);



// Function to change the header
export function changeHeader(newHeaderText) {
    const header = document.querySelector('#auctionHeader');
    if (header) {
        header.textContent = newHeaderText;
    }
}

// Function to handle filter for all active posts
export async function handleFilterAllPosts() {
    try {
        changeHeader('Auction');
        renderCardTemplate('auctionPost', getActivePosts);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for new posts
export async function handleFilterNewPosts() {
    try {
        changeHeader('New Auction Posts');
        renderCardTemplate('auctionPost', getPostsCreatedToday);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for posts ending today
export async function handleFilterEndsTodayPosts() {
    try {
        changeHeader('Auction ends today Posts');
        renderCardTemplate('auctionPost', getPostsEndsToday);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for popular posts
export async function handleFilterPopularPost() {
    try {
        changeHeader('Popular auction posts');
        renderCardTemplate('auctionPost', getPostsWithBids);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Adding event listeners to the respective functions
document.querySelector('#filterAllPosts').addEventListener('click', handleFilterAllPosts);
document.querySelector('#filterNewPosts').addEventListener('click', handleFilterNewPosts);
document.querySelector('#filterEndsTodayPosts').addEventListener('click', handleFilterEndsTodayPosts);
document.querySelector('#filterPopularPost').addEventListener('click', handleFilterPopularPost);