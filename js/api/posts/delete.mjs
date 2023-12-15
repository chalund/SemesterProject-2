import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings"

export async function removePost(id) {
    const removePostUrl = `${API_BASE_URL}${action}/${id}`;
    const token = load("accessToken");

    // if (!id) {
    //     throw new Error("Delete requires a postID");
    // }
    
   
    const response = await fetch(removePostUrl, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,  
        },
    })

    const post = await response.json()

    return post;
    
  
}