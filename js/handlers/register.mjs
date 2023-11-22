import { register } from "../api/auth/register.mjs"; 

export function registerFormListener() {
    const form = document.querySelector('#registerForm');

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevents the default form submission behavior
            
            const formData = new FormData(form); // Collects form data
            const profile = Object.fromEntries(formData); // Converts form data into an object
            
            try {
                const response = await register(profile); // Sends user data to the registration function
                
                // Logs the profile data to the console
                console.log(profile);
                
                // Stores the response data locally using localStorage
                localStorage.setItem('userData', JSON.stringify(response));
                
                // Redirects the user to the profile page after successful registration
                window.location.href = '/profile/index.html';
            } catch (error) {
                // Handles any errors that might occur during registration
                console.error('Registration failed:', error);
                // You can display an error message to the user or handle the error in another way
            }
        });
    }
}

// export function registerFormListener() {
//     const form = document.querySelector('#registerForm');

//     if (form) {
//         form.addEventListener("submit", async (event) => {
//             event.preventDefault();
        
//             const form = event.target
//             const formData = new FormData(form);
//             const profile = Object.fromEntries(formData);
//             console.log("testing")
//             //send to api
//             register(profile)

//     });
// }
// }
