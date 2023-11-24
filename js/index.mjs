console.log("js/index")
//login and register
import { registerFormListener } from "./handlers/register.mjs"; 
import { loginFormListener} from "./handlers/login.mjs";
//for profile page
import { createPostFormInitializer , createPostFormToggle } from "./handlers/createPost/hideCreatePostForm.mjs";
import { logout } from "./handlers/logout.mjs";
import { updateProfileLayout } from "./api/posts/getProfile.mjs";
import { clearInputListeners } from "./handlers/createPost/clearInput.mjs";
import { editProfileImage , editProfileImageModal } from "./api/posts/updateProfile.mjs";

const path = location.pathname;

//login and register
if( path === '/profile/login/index.html') {
    loginFormListener ()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}

//profile page
if( path === '/profile/index.html') {
    createPostFormInitializer()
    createPostFormToggle()
    logout()
    updateProfileLayout() 
    clearInputListeners() 

    editProfileImage()
    editProfileImageModal()
}
