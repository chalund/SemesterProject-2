import { renderCardProfileTemplate } from "./templates/renderCardProfileTemplate.mjs"; 




import { createPostFormToggle } from "./handlers/createPost/hideCreatePostForm.mjs";
createPostFormToggle() // show/hide button for create form

import { createPostFormInitializer } from "./handlers/createPost/createPostFormInitializer.mjs";
createPostFormInitializer() // add more input for images/tags


import { editProfileImage , editProfileImageModal } from "./api/profile/updateProfileAvatar.mjs";
import { updateProfileLayout } from "./api/profile/getProfile.mjs";
updateProfileLayout() // update profile image


import { clearInputListeners } from "./handlers/buttons/clearInput.mjs";
clearInputListeners() //works on modal

import { updateButtonBasedOnLoginStatus, profileInNav } from "./handlers/buttons/userLoggedIn.mjs"; 
updateButtonBasedOnLoginStatus()
profileInNav()


import { createPostFormListener } from "./handlers/form/createPost.mjs";

createPostFormListener()


import { getProfileBiddings } from "./api/posts/postById.mjs"; 
import { getProfileListings } from "./api/profile/getProfileListings.mjs";

document.addEventListener('DOMContentLoaded', async() => {
    const listings = await getProfileListings();
    renderCardProfileTemplate('profilePosts', listings);
});

document.addEventListener('DOMContentLoaded', async() => {
    const bids = await getProfileBiddings();
    renderCardProfileTemplate('profileActiveBids', bids);
});