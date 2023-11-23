import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings";
const method = "get";

export async function getPosts() {
    const token = load("accessToken")
    const getPostUrl = `${API_BASE_URL}${action}`;

    try {
        const response = await fetch(getPostUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
            const data = await response.json();
            console.log(data)
            return data;
     
    } catch (error) {
        console.error(error);
        throw error;
    }
}