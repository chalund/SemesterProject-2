// import { renderProductTemplate } from "./templates/renderProduct.mjs";
import { getPostId } from "./api/posts/postById.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/logoutBtn.mjs";



// renderProductTemplate('viewProduct', getPostId)
updateButtonBasedOnLoginStatus()