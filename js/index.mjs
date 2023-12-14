// import { renderCardTemplate } from "./templates/renderCardProfileTemplate.mjs";
import { getActivePosts } from "./api/posts/getPost.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs"; 
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs";
import { clearInputListeners } from "./handlers/buttons/clearInput.mjs";
clearInputListeners()

// import * as filterFunctions from "./handlers/filter/filterBtn.mjs"
import * as searchFunction from "./handlers/filter/search.mjs"
// import { fetchAndFilterPosts } from "./handlers/filter/filterNew.mjs";


    // filterFunctions.handleFilterAllPosts();
    // filterFunctions.handleFilterNewPosts();
    // filterFunctions.handleFilterEndsTodayPosts();
    // filterFunctions.handleFilterPopularPost();
    searchFunction.search()
    searchFunction.handleSearch()



// renderCardTemplate('auctionPosts', getActivePosts)
updateButtonBasedOnLoginStatus()
createLogoutButton()

import { profileInNav } from "./api/profile/getProfileInNav.mjs";
profileInNav()

// import { fetchAndFilterPosts } from "./handlers/filter/filterNew.mjs";
// fetchAndFilterPosts()



