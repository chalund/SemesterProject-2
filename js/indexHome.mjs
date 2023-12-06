import { renderCardTemplate } from "./templates/renderCardTemplate.mjs";
import { getActivePosts } from "./api/posts/getPost.mjs";
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs"; 
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs";

import * as filterFunctions from "./handlers/filter/filterBtn.mjs"
import * as searchFunction from "./handlers/filter/search.mjs"


    filterFunctions.handleFilterAllPosts();
    filterFunctions.handleFilterNewPosts();
    filterFunctions.handleFilterEndsTodayPosts();
    filterFunctions.handleFilterPopularPost();
    searchFunction.search()
    searchFunction.handleSearch()



renderCardTemplate('auctionPosts', getActivePosts)
updateButtonBasedOnLoginStatus()
createLogoutButton()
