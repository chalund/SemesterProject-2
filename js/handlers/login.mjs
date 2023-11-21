import { login } from "../auth/login.mjs";

export function loginFormListener() {
    const form = document.querySelector('#loginForm');

        if (form) {
            form.addEventListener("submit", async (event) => {
                event.preventDefault();
            
                const form = event.target
                const formData = new FormData(form);
                const profile = Object.fromEntries(formData);
                console.log("testing login")
                //send to api
                login(profile)
        });
    }
}

