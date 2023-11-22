import { API_BASE_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = '/auction/listings';
const method = 'post';

export async function createPost(postData) {
    const createPostUrl = API_BASE_URL + action;

    const response = await authFetch(createPostUrl, {
        method,
        body: JSON.stringify(postData)
    })

    const post = await response.json()

    console.log(post)
}