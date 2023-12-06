// import { renderProductTemplate } from "./templates/renderProduct.mjs";
import { getPostId} from "./api/posts/postById.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs";
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs"; 



import { createBid } from "./api/posts/addBid.mjs"; 
createBid()

// renderProductTemplate('viewProduct', getPostId)
createLogoutButton()

