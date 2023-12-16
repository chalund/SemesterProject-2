import { API_BASE_URL } from "../constants.mjs"; 
import * as storage from "../storage/index.mjs";

const action = "/api/v1/auction/auth/login";

export async function login(profile) {
    const loginUrl = `${API_BASE_URL}${action}`;
    console.log(loginUrl)

    try{
        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });

        if (response.ok) {
            const { accessToken, email, name, avatar, credits } = await response.json();
            console.log({ accessToken, email, name, avatar, credits })
            storage.save("accessToken", accessToken);
            storage.save("email", email);
            storage.save("username", name);
            storage.save("avatar", avatar)
            storage.save("credits" ,credits)
            
            window.location.replace(`/profile/index.html`);

        } else {
            alert("Login failed. Please check your username and password."); 
        }
        
    } catch(error) {
        console.log(error)
    }
}