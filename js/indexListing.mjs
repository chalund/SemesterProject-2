import * as filterFunctions from "./handlers/filter/filterBtn.mjs"
import * as searchFunction from "./handlers/filter/search.mjs"


//disse er lagt inn flere sider
import { updateButtonBasedOnLoginStatus } from "./handlers/buttons/logoutBtn.mjs";
import { clearInputListeners } from "./handlers/createPost/clearInput.mjs";


const path = location.pathname;

if( path === '/listing/index.html' ){
    filterFunctions.handleFilterAllPosts();
    filterFunctions.handleFilterNewPosts();
    filterFunctions.handleFilterEndsTodayPosts();
    filterFunctions.handleFilterPopularPost();
    searchFunction.search()
    searchFunction.handleSearch()

    //flere steder
    updateButtonBasedOnLoginStatus()
    clearInputListeners()
} 




