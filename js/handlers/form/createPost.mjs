import { createPost } from "../../api/posts/create.mjs";

export async function createPostFormListener() {
    const form = document.querySelector("#createPostForm");
    const imageList = document.getElementById("imageList");
    const tagsList = document.getElementById("tagsList");

    const mediaInputs = document.querySelectorAll('input[name="media"]');
    const tagInputs = document.querySelectorAll('input[name="tags"]');

    
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
             
            }
        });

        form.addEventListener("submit", async (event) => {
            event.preventDefault();
            const formElements = event.target;
        
            const title = document.querySelector('#title').value;
            const endsAt = document.querySelector('#endsAt').value;
            const body = document.querySelector('#body').value;

            const media = Array.from(document.querySelectorAll('input[name="media"]'))
                            .map(input => input.value)
                            .filter(value => value !== '');
        
            const tags = Array.from(document.querySelectorAll('input[name="tags"]'))
                            .map(input => input.value)
                            .filter(value => value !== '');
        
            const post = {
                title,
                endsAt,
                body,
                tags,
                media
            };
        
            try {
                const response = await createPost(post);
                // console.log("Post added successfully:", response);
                window.location.reload();
            } catch (error) {
                console.log("Error creating post:", error);
            }
        });
}
