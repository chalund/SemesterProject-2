import { createPost } from "../../api/posts/create.mjs";

export function createPostFormListener() {
    const form = document.querySelector("#createPostForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formElements = event.target;

        const title = document.querySelector('#title').value;
        const endsAt = document.querySelector('#endsAt').value;
        const body = document.querySelector('#body').value;
        const tags = document.querySelector('#tags').value;
        const media = document.querySelector('#media').value;

        console.log({title});
        const post = {
            title,
            endsAt,
            body,
            tags: [tags],
            media,
        }

        console.log("Post Object:", post);

        try {
            await createPost(post);
        
            // window.location.reload();
        } catch (error) {
            console.log("Error creating post:", error);
        }
    });
}