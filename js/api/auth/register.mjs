import { API_BASE_URL } from "../constants.mjs";

const action = "/api/v1/auction/auth/register";
const method = "post";

export async function register(profile) {
    const registerUrl = `${API_BASE_URL}${action}`;

    try {
        const response = await fetch(registerUrl, {
            method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
        });
        if (response.status === 200 || response.status === 201) {
            const json = await response.json();
            alert("Welcome, you are now registered");
            // window.location.replace("/index.html");
            return json;
        } else if (response.status === 400) {
            alert("User already exists try a different username or email");

            // clearRegistrationForm()

            // window.location.replace("/profile/register/index.html");
        }
    } catch(error) {
        console.log(error)
    }
}