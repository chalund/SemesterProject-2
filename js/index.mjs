
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






//for profile page
// import { createPostFormToggle } from "./handlers/createPost/hideCreatePostForm.mjs";

// import { updateProfileLayout } from "./api/profile/getProfile.mjs";
// import { clearInputListeners } from "./handlers/createPost/clearInput.mjs";
// import { editProfileImage , editProfileImageModal } from "./api/profile/updateProfile.mjs";
//profile page
// if( path === '/profile/index.html') {
//     // createPostFormInitializer()
//     createPostFormToggle()
 
//     updateProfileLayout()

//     clearInputListeners()
//     editProfileImage()
//     editProfileImageModal()
//     renderPostProfileTemplate('profilePosts'); 
// }


