console.log("js/index")
//login and register
import { registerFormListener } from "./handlers/form/register.mjs"; 
import { loginFormListener} from "./handlers/form/login.mjs";
//for profile page
import { createPostFormToggle } from "./handlers/createPost/hideCreatePostForm.mjs";
import { logout } from "./handlers/logout.mjs";
import { updateProfileLayout } from "./api/profile/getProfile.mjs";
import { clearInputListeners } from "./handlers/createPost/clearInput.mjs";
import { editProfileImage , editProfileImageModal } from "./api/profile/updateProfile.mjs";
import { renderPostProfileTemplate } from "./item.mjs";
//index and listings
import { renderPostCardTemplate} from "./script.mjs" 




const path = location.pathname;

//login and register
if( path === '/profile/login/index.html') {
    loginFormListener ()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}

//profile page
if( path === '/profile/index.html') {
    // createPostFormInitializer()
    createPostFormToggle()
    logout()
    updateProfileLayout()

    clearInputListeners()
    editProfileImage()
    editProfileImageModal()
    renderPostProfileTemplate('profilePosts'); 
}

//Listing page (search)
if( path === '/listing/index.html') {
    renderPostCardTemplate('auctionPosts');
}

if( path === 'index.html' ) {
    renderPostCardTemplate('auctionPosts');
}
