export function createPostFormInitializer() {
    const form = document.querySelector("#createPostForm");
    const imageList = document.getElementById("imageList");
    const tagsList = document.getElementById("tagsList");

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
        if (event.target.classList.contains("add-tags")) {
            const inputGroup = document.createElement("div");
            inputGroup.classList.add("input-group", "my-2");

            const input = document.createElement("input");
            input.name = "tags";
            input.type = "text";
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

            tagsList.appendChild(inputGroup);
        }
    });

    form.addEventListener("submit", event => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const media = formData.getAll("media");
    });
}