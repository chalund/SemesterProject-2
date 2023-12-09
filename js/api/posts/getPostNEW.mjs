import { fetchToken } from "../fetchToken.mjs";
import { API_BASE_URL } from "../constants.mjs";

const action = "/api/v1/auction/listings";
const activePosts = "?_active=true";



async function fetchPosts(url) {
    try {
        const response = await fetchToken(url, {
            method: 'GET',
        });
        return await response.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

export async function getPosts() {
    const getPostURL = `${API_BASE_URL}${action}`;
    const posts = await fetchPosts(getPostURL);
    // console.log("All Posts:", posts); // Log fetched posts
    return posts;
}

export async function getActivePosts() {
    const getPostURL = `${API_BASE_URL}${action}${activePosts}`;
    const allPosts = await fetchPosts(getPostURL);
    // console.log("active Posts", allPosts)
    return  allPosts
}

export async function getPostsWithBids() {
    const getPostURL = `${API_BASE_URL}${action}${activePosts}`;
    const allPosts = await fetchPosts(getPostURL);
    const postsWithBids = allPosts.filter(post => post._count.bids > 0);
    console.log("Posts with Bids:", postsWithBids); // Log posts with bids
    return postsWithBids;
}

export async function getPostsCreatedToday() {
    const getPostURL = `${API_BASE_URL}${action}`;
    const postsResponse = await fetchPosts(getPostURL);

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const postsCreatedToday = postsResponse.filter(post => {
        const postCreationDate = post.created.split('T')[0]; // Extract the date part from "created" field
        return postCreationDate === today; // Check if the post's creation date matches today's date
    });

    console.log("Posts Created Today:", postsCreatedToday); // Log posts created today
    return postsCreatedToday;
}

export async function getPostsEndsToday() {
    const getPostURL = `${API_BASE_URL}${action}`;
    const postsResponse = await fetchPosts(getPostURL);

    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const postsEndingToday = postsResponse.filter(post => {
        const postEndDate = post.endsAt.split('T')[0]; // Extract the date part from "endsAt" field
        return postEndDate === today; // Check if the post's end date matches today's date
    });

    // Sort the auctions so that the ones ending first appear at the top
    postsEndingToday.sort((a, b) => {
        const dateA = new Date(a.endsAt).getTime();
        const dateB = new Date(b.endsAt).getTime();
        return dateA - dateB;
    });

    console.log("Posts Ending Today (Sorted by end date):", postsEndingToday); // Log sorted posts
    return postsEndingToday;
}

export async function getActivePostsNoTestTitle() {
    const getPostURL = `${API_BASE_URL}${action}${activePosts}`;
    const allPosts = await fetchPosts(getPostURL);

    const filteredPosts = allPosts.filter(post => {
        const title = post.title.toLowerCase();
        return !title.includes('test') && !title.includes('testing');
    });

    console.log("Filtered Posts (No 'test' in title):", filteredPosts); // Log filtered posts
    return filteredPosts;
}


