export function createPostFormInitializer() {
    const form = document.querySelector("#createPostForm");
    const imageList = document.getElementById("imageList");

    form.addEventListener("click", event => {
        if (event.target.classList.contains("add-media")) {
            const inputGroup = document.createElement("div");
            inputGroup.classList.add("input-group", "my-2");

            const input = document.createElement("input");
            input.name = "media";
            input.type = "url";
            input.classList.add("form-control");
            inputGroup.appendChild(input);

            const clearButton = document.createElement("button");
            clearButton.innerHTML = "&times;";
            clearButton.classList.add("btn", "btn-light", "btn-clear");
            clearButton.type = "button";
            clearButton.addEventListener("click", () => {
                input.value = "";
            });
            inputGroup.appendChild(clearButton);

            imageList.appendChild(inputGroup);
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