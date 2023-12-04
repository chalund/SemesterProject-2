import { fetchToken } from "../fetchToken.mjs";
import { API_BASE_URL } from "../constants.mjs";

const action = "/api/v1/auction/listings";
const activePosts = "?_active=true";


export async function getPosts() {
    const getPostURL = `${API_BASE_URL}${action}`;

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

export async function getPostsWithBids() {
    const getPostURL = `${API_BASE_URL}${action}`;

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


// export async function getPostsId(id) {
//     const getPostURL = `${API_BASE_URL}${action}/${id}`;

//     try {
//         const response = await fetchToken(getPostURL, {
//             method: 'GET',
//         });
//         const getPostsId = await response.json();
//         console.log("getPosts with id:", getPosts);
//         return getPostsId; // Return the fetched posts
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//         throw error;
//     }
// }




