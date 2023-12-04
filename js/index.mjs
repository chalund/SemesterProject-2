
//login and register
import { registerFormListener } from "./handlers/form/register.mjs"; 
import { loginFormListener} from "./handlers/form/login.mjs";
import { clearInputListeners } from "./handlers/createPost/clearInput.mjs";

import { renderCardTemplate } from "./templates/renderCardTemplate.mjs";
import { getActivePosts } from "./api/posts/getPost.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/logoutBtn.mjs";



renderCardTemplate('auctionPosts', getActivePosts)


const path = location.pathname;

clearInputListeners()

if( path === '/profile/login/index.html') {
    loginFormListener ()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}else if (path === '/listings/register/index.html') {
    updateButtonBasedOnLoginStatus()
}