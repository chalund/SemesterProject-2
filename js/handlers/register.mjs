import { register } from "../auth/register.mjs";

export function registerFormListener() {
    const form = document.querySelector('#registerForm');

    if (form) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();
        
            const form = event.target
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData);
            console.log("testing")
            //send to api
            register(profile)

    });
}
}
