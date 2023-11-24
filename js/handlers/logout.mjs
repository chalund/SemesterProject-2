export function logout() {
    const logoutBtn = document.querySelector("#logout");

    logoutBtn.addEventListener("click", () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        
        if (confirmLogout) {
            localStorage.clear();
            window.location.replace("/profile/login/index.html");
        } else {
            console.log("Canceled logout");
        }
    });
}