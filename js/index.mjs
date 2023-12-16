// import { renderCardTemplate } from "./templates/renderCardProfileTemplate.mjs";
import { getActivePosts } from "./api/posts/getPost.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs"; 
import { createLogoutButton} from "./handlers/buttons/logoutBtn.mjs";
import { clearInputListeners } from "./handlers/buttons/clearInput.mjs";
clearInputListeners()


import * as searchFunction from "./handlers/search/search.mjs"
searchFunction.search()
searchFunction.handleSearch()

updateButtonBasedOnLoginStatus()
createLogoutButton()


import { profileInNav } from "./api/profile/getProfileInNav.mjs";
profileInNav()
