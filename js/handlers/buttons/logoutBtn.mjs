export function createLogoutButton() {
    const logoutButton = document.createElement('a');
    logoutButton.href = "#";
    logoutButton.className = "btn btn-danger my-2 my-sm-0 ms-2";
    logoutButton.textContent = "Logout";
    logoutButton.id = "logout";

    logoutButton.addEventListener("click", () => {
        const confirmLogout = window.confirm("Are you sure you want to log out?");
        
        if (confirmLogout) {
            localStorage.clear();
            window.location.replace("/profile/login/index.html");
        } else {
            console.log("Canceled logout");
        }
    });

    return logoutButton;
}