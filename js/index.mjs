import { toggleLoginDisplay } from "./loginBtn.mjs";
toggleLoginDisplay()



import { registerFormListener } from "./handlers/register.mjs"; 
import { loginFormListener} from "./handlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";





const path = location.pathname;

if( path === '/profile/login/index.html') {
    loginFormListener ()
} else if (path === '/profile/register/index.html') {
    registerFormListener()
}




// createPost({
//     title: "Garmin Venu 2S",
//     media: "https://www.elkjop.no/image/dv_web_D180001002732020/286782/garmin-venu-2s-gps-smartklokke-rosegullhvit--pdp_zoom-3000--pdp_main-960.jpg",
//     endsAt: "2023-11-23T12:30:00.000Z",
// })
