import { renderCardProfileTemplate } from "./templates/renderCardProfileTemplate.mjs"; 
import { getProfileListings } from "./api/profile/getProfileListings.mjs";

document.addEventListener('DOMContentLoaded', async() => {
    const listings = await getProfileListings();
    renderCardProfileTemplate('profilePosts', listings);
});

import { editProfileImage , editProfileImageModal } from "./api/profile/updateProfileAvatar.mjs";
import { updateProfileLayout } from "./api/profile/getProfile.mjs";
import { createPostFormInitializer } from "./handlers/createPost/createPostFormInitializer.mjs";
import { createPostFormToggle } from "./handlers/createPost/hideCreatePostForm.mjs";
import { createPostFormListener } from "./handlers/form/createPost.mjs";
createPostFormListener() // create form
createPostFormToggle() // show/hide button for create form
createPostFormInitializer() // add more input for images/tags
updateProfileLayout() // update profile image


import { clearInputListeners } from "./handlers/buttons/clearInput.mjs";
clearInputListeners() //clear fields in forms


import { profileInNav } from "./api/profile/getProfileInNav.mjs";
profileInNav() // show profile usrname & credits in nav

import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs"; 
updateButtonBasedOnLoginStatus()

import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs";
createLogoutButton()

