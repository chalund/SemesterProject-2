import { API_BASE_URL } from "../constants.mjs";

const action = "/api/v1/auction/auth/register";

export async function register(profile) {
    const registerUrl = `${API_BASE_URL}${action}`;
    console.log(registerUrl)

    try {
        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });

        if (response.status === 200 || response.status === 201) {
            const json = await response.json();
            alert("Welcome, you are now registered");
            window.location.replace("/profile/login/index.html");
            return json;
           

        } else if (response.status === 400) {
            alert("User already exists try a different username or email");

        }
    } catch(error) {
        console.log(error)
    }
}