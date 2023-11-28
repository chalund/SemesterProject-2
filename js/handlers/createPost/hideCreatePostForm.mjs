export function createPostFormInitializer() {
    const form = document.querySelector("#createPostForm");
    const imageList = document.getElementById("imageList");

    form.addEventListener("click", event => {
        if (event.target.classList.contains("add-media")) {
            const input = document.createElement("input");
            input.name = "media";
            input.type = "url";
            input.classList.add("form-control", "my-2");
            imageList.append(input);
        }
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const media = formData.getAll("media");
        console.log(media);
        // Perform further operations with the media URLs as needed
    });
}


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




