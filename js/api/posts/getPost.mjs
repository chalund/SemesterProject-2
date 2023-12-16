import { fetchToken } from "../fetchToken.mjs";
import { API_BASE_URL } from "../constants.mjs";

const action = "/api/v1/auction/listings";
const activePosts = "?_active=true";


export async function getPosts() {
    const getPostURL = `${API_BASE_URL}${action}?sort=created`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const getPosts = await response.json();
        // console.log("getPosts:", getPosts);
        return getPosts; // Return the fetched posts
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function sortPostsByCreationDate() {
    const getPostURL = `${API_BASE_URL}${action}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const posts = await response.json();

        const sortedPosts = posts.sort((a, b) => {
            const dateA = new Date(a.created).getTime();
            const dateB = new Date(b.created).getTime();
            return dateA - dateB;
        });

        return sortedPosts;
    } catch (error) {
        console.error("Error fetching or sorting posts:", error);
        throw error;
    }
}


export async function getPostsWithBids() {
    const getPostURL = `${API_BASE_URL}${action}${activePosts}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const allPosts = await response.json();

        // Filter posts with bids greater than 0
        const postsWithBids = allPosts.filter(post => post._count.bids > 0);

        // console.log("Posts with bids:", postsWithBids);
        return postsWithBids; // Return the fetched posts with bids
    } catch (error) {
        console.error('Error fetching posts with bids:', error);
        throw error;
    }
}



export async function getPostsCreatedToday() {
    const action = "/api/v1/auction/listings";
    const getPostURL = `${API_BASE_URL}${action}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const postsResponse = await response.json();

        // Filter posts that were created today
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        const postsCreatedToday = postsResponse.filter(post => {
            const postCreationDate = post.created.split('T')[0]; // Extract the date part from "created" field
            return postCreationDate === today; // Check if the post's creation date matches today's date
        });

        // console.log("PostsCreatedToday:", postsCreatedToday);
        return postsCreatedToday; // Return posts created today
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getPostsSortedByBidsEnding() {
    const action = "/api/v1/auction/listings";
    const getPostURL = `${API_BASE_URL}${action}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const postsResponse = await response.json();

        // Separate posts with bids and without bids
        const postsWithBids = postsResponse.filter(post => post.bids.length > 0);
        const postsWithoutBids = postsResponse.filter(post => post.bids.length === 0);

        // Sort posts with bids by bid end time ascending
        postsWithBids.sort((a, b) => {
            const aBidEndTime = new Date(a.bids[0].endTime).getTime();
            const bBidEndTime = new Date(b.bids[0].endTime).getTime();
            return aBidEndTime - bBidEndTime;
        });

        // Combine posts with bids sorted by bid end time and posts without bids
        const sortedPosts = [...postsWithBids, ...postsWithoutBids];

        // console.log("Sorted Posts:", sortedPosts);
        return sortedPosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}



export async function getPostsEndsToday() {
    const action = "/api/v1/auction/listings";
    const getPostURL = `${API_BASE_URL}${action}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const postsResponse = await response.json();

        // Filter posts that have an "endsAt" date of today
        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

        const postsEndingToday = postsResponse.filter(post => {
            const postEndDate = post.endsAt.split('T')[0]; // Extract the date part from "endsAt" field
            return postEndDate === today; // Check if the post's end date matches today's date
        });

        // console.log("PostsEndingToday:", postsEndingToday);
        return postsEndingToday; // Return posts ending today
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}


export async function getActivePostsSearch() {
    const getPostURL = `${API_BASE_URL}${action}${activePosts}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const allPosts = await response.json();

        // Filter posts to exclude titles containing 'test' or 'testing'
        const filteredPosts = allPosts.filter(post => {
            const title = post.title.toLowerCase();
            return !title.includes('test') && !title.includes('testing');
        });

        // console.log("filteredPosts" ,filteredPosts);
        return filteredPosts; // Return the filtered posts
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getActivePosts() {
    const getPostURL = `${API_BASE_URL}${action}${activePosts}`;

    try {
        const response = await fetchToken(getPostURL, {
            method: 'GET',
        });
        const getActivePosts = await response.json();
        // console.log("getActivePosts" , getActivePosts);
        return getActivePosts; // Return the fetched posts
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}