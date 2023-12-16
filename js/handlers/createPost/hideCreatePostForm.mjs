export function createPostFormToggle() {
    const toggleButton = document.getElementById("toggleForm");
    const form = document.getElementById("createPostForm");

    toggleButton.addEventListener("click", function () {
        if (form.classList.contains("hidden")) {
            form.classList.remove("hidden");
            toggleButton.textContent = "Hide Form";
        } else {
            form.classList.add("hidden");
            toggleButton.textContent = "Show Form";
        }
    });
}