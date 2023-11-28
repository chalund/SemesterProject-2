import { API_BASE_URL} from "../constants.mjs";
import { load } from "../storage/index.mjs";


const action = "/api/v1/auction/listings";
const method = "PUT";

export async function updatePost(postData) {
    const updatePostUrl = `${API_BASE_URL}/${action}/${postData.id}`;
    const token = load("accessToken");
    console.log(updatePostUrl)
    
    try{
    const response = await fetch(updatePostUrl, {
        method ,
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${token}`,
            
        },
        body: JSON.stringify(postData),
    })
        if (response.ok) {
            const post = await response.json();
            console.log(post);
    
            return post;
        } else {
            console.error("Failed to update the post.");
            return null;
        }

    }catch(error){
        console.log(error)
    }
}



