import * as filterFunctions from "./handlers/filter/filterBtn.mjs"
import * as searchFunction from "./handlers/filter/search.mjs"


    filterFunctions.handleFilterAllPosts();
    filterFunctions.handleFilterNewPosts();
    filterFunctions.handleFilterEndsTodayPosts();
    filterFunctions.handleFilterPopularPost();
    searchFunction.search()
    searchFunction.handleSearch()


//on several pages

import { clearInputListeners } from "./handlers/buttons/clearInput.mjs"; 
clearInputListeners()


import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/userLoggedIn.mjs"; 
import { createLogoutButton } from "./handlers/buttons/logoutBtn.mjs"; 
updateButtonBasedOnLoginStatus()
createLogoutButton()