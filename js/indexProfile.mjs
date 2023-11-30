import { renderPostProfileTemplate } from "./templates/renderPostProfileTemplate.mjs";
import { updateProfileLayout } from "./api/profile/getProfile.mjs";
import { editProfileImage , editProfileImageModal } from "./api/profile/updateProfile.mjs";







import { createPostFormToggle } from "./handlers/createPost/hideCreatePostForm.mjs";
import { createPostFormInitializer } from "./handlers/createPost/createPostFormInitializer.mjs";

renderPostProfileTemplate('profilePosts'); //get posts
updateProfileLayout() // update profile image

createPostFormInitializer() // add more input for images
createPostFormToggle() // show/hide button for create form

import { clearInputListeners } from "./handlers/createPost/clearInput.mjs";
clearInputListeners() //works on modal

import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/logoutBtn.mjs";
updateButtonBasedOnLoginStatus()
