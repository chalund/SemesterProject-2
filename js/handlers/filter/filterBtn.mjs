import { getActivePosts, getPostsEndsToday, getPostsCreatedToday, getPostsWithBids } from '../../api/posts/getPost.mjs';

import { renderPostCardTemplate } from "../../handlers/filter/renderFilterTemplate.mjs";
renderPostCardTemplate('auctionPosts', getActivePosts);



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
        changeHeader('All active Auction Posts');
        renderPostCardTemplate('auctionPosts', getActivePosts);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for new posts
export async function handleFilterNewPosts() {
    try {
        changeHeader('New Auction Posts');
        renderPostCardTemplate('auctionPosts', getPostsCreatedToday);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for posts ending today
export async function handleFilterEndsTodayPosts() {
    try {
        changeHeader('Auction ends today Posts');
        renderPostCardTemplate('auctionPosts', getPostsEndsToday);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to handle filter for popular posts
export async function handleFilterPopularPost() {
    try {
        changeHeader('Popular auction posts (most bids)');
        renderPostCardTemplate('auctionPosts', getPostsWithBids);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Adding event listeners to the respective functions
document.querySelector('#filterAllPosts').addEventListener('click', handleFilterAllPosts);
document.querySelector('#filterNewPosts').addEventListener('click', handleFilterNewPosts);
document.querySelector('#filterEndsTodayPosts').addEventListener('click', handleFilterEndsTodayPosts);
document.querySelector('#filterPopularPost').addEventListener('click', handleFilterPopularPost);

