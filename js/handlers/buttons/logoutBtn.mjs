// Function to handle logout logic
function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
        localStorage.clear();
        window.location.replace("/profile/login/index.html");
    } else {
        console.log("Canceled logout");
    }
}

// Function to create a logout button element
export function createLogoutButton() {
    const logoutButton = document.createElement('a');
    logoutButton.href = "#";
    logoutButton.className = "btn btn-danger my-2 my-sm-0 ms-2 d-none d-sm-block";
    logoutButton.textContent = "Logout";
    logoutButton.id = "logout"; // ID for the logout button

    // Add the event listener to the logout button
    logoutButton.addEventListener("click", handleLogout);


    return logoutButton;
}

// // Function to create a logout link element
// export function createLogoutLink() {
//     const logoutLink = document.getElementById("logoutLinkSmall");

//     logoutLink.addEventListener("click", handleLogout);


// }



