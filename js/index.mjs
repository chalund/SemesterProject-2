// import { toggleLoginDisplay } from "./loginBtn.mjs";
// toggleLoginDisplay()



import { registerFormListener } from "./handlers/register.mjs"; 
import { loginFormListener} from "./handlers/login.mjs";





const path = location.pathname;

if( path === '/profile/login/index.html') {
    loginFormListener ()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}



