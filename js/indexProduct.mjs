import { getPostId} from "./api/posts/postById.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs";
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs"; 
import { clearInputListeners } from "./handlers/buttons/clearInput.mjs";
import { profileInNav } from "./api/profile/getProfileInNav.mjs";


profileInNav()
createLogoutButton()
updateButtonBasedOnLoginStatus()
clearInputListeners()

