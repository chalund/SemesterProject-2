
//login and register
import { registerFormListener } from "./handlers/form/register.mjs"; 
import { loginFormListener} from "./handlers/form/login.mjs";
import { clearInputListeners } from "./handlers/createPost/clearInput.mjs";



const path = location.pathname;

clearInputListeners()

if( path === '/profile/login/index.html') {
    loginFormListener ()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}
