// import { toggleLoginDisplay } from "./loginBtn.mjs";
// toggleLoginDisplay()

// import { API_BASE_URL } from "./constants.mjs";

import { registerFormListener } from "./handlers/register.mjs";
import { loginFormListener } from "./handlers/login.mjs";





const path = location.pathname;

if( path === '/Profile/login/index.html') {
    loginFormListener ()
} else if (path === '/Profile/register/index.html') {
    registerFormListener()
}