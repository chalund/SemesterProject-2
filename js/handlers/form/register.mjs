import { register } from "../../api/auth/register.mjs"; 

export function registerFormListener() {
    const form = document.querySelector('#registerForm');
    console.log(form)

        form.addEventListener("submit", async (event) => {
            event.preventDefault(); 
            
            const form = event.target
            const formData = new FormData(form); 
            const profile = Object.fromEntries(formData); 
            console.log(profile)
            
       register(profile)
        });
    }
