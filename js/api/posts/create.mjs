import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings";
const method = "POST";

export async function createPost(postData) {
    const token = load("accessToken")
    const createPostUrl = `${API_BASE_URL}${action}`;

    try {
        const response = await fetch(createPostUrl, {
            method,
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(postData),
        });
            const post = await response.json();
            console.log(post)
            return post;
     
    } catch (error) {
        console.error(error);
        throw error;
    }
}