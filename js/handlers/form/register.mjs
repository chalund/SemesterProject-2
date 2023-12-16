import { register } from "../../api/auth/register.mjs"; 

export function registerFormListener() {
    const form = document.querySelector('#registerForm');

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevents the default form submission behavior
            
            const formData = new FormData(form); // Collects form data
            const profile = Object.fromEntries(formData); // Converts form data into an object
            
            try {
                const response = await register(profile); // Sends user data to the registration function

                // Stores the response data locally using localStorage
                localStorage.setItem('userData', JSON.stringify(response));

            } catch (error) {
                console.error('Registration failed:', error);
             
            }
        });
    }
}