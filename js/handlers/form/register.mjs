import { register } from "../../api/auth/register.mjs"; 

export function registerFormListener() {
    const form = document.querySelector('#registerForm');
    console.log(form)

        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // Prevents the default form submission behavior
            
            const form = event.target
            const formData = new FormData(form); // Collects form data
            const profile = Object.fromEntries(formData); // Converts form data into an object
            console.log(profile)
            
       register(profile)
        });
    }
