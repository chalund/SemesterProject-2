// import { renderProductTemplate } from "./templates/renderProduct.mjs";
import { getPostId} from "./api/posts/postById.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs";
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs"; 

import { profileInNav } from "./api/profile/getProfileInNav.mjs";
profileInNav()

createLogoutButton()

import { clearInputListeners } from "./handlers/buttons/clearInput.mjs";
clearInputListeners()

import { toggleProfileLink } from "./handlers/buttons/profileBtn.mjs";
toggleProfileLink()


