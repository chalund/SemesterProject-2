import { API_BASE_URL } from "../constants.mjs"; 
import * as storage from "../storage/index.mjs";

const action = "/api/v1/auction/auth/login";
const method = "post";


export async function login(profile) {
    const loginUrl = `${API_BASE_URL}${action}`;

    try{
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });

        if (response.ok) {
            const { accessToken, email, name, avatar } = await response.json();

            storage.save("accessToken", accessToken);
            storage.save("email", email);
            storage.save("username", name);
            storage.save("profileImage", avatar)

            window.location.replace("/index.html");
         

        } else {
            alert("Login failed. Please check your username and password."); 
        }
        
    } catch(error) {
        console.log(error)
    }
}