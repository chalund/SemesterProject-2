import { API_BASE_URL } from "../constants.mjs";

const action = "/api/v1/auction/auth/register";
const method = "post";

export async function register(profile) {
    const registerUrl = API_BASE_URL + action;
    const body = JSON.stringify(profile)

    const response = await fetch( registerUrl, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()
    alert("Congrats, you are now registered")
    
    console.log(result)
    return result
}