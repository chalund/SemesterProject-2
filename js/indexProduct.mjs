// import { renderProductTemplate } from "./templates/renderProduct.mjs";
import { getPostId} from "./api/posts/postById.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs";
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs"; 



// import { createBidFormListener } from "./handlers/form/addBid.mjs"; 
// createBidFormListener()

// import { renderProductTemplate } from "./templates/renderProduct.mjs";
// renderProductTemplate('viewProduct', getPostId)
createLogoutButton()


