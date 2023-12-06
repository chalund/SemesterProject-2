import { renderCardTemplate } from "./templates/renderCardTemplate.mjs";
import { getActivePosts } from "./api/posts/getPost.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs"; 
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs";




renderCardTemplate('auctionPosts', getActivePosts)
updateButtonBasedOnLoginStatus()
createLogoutButton()
