import { createBid } from "../../api/posts/addBid.mjs";

export function createBidFormListener() {
    const form = document.querySelector(".addBidForm");
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formElements = event.target;

        const bidValue = document.querySelector('.bidSearch').value;
        // Assuming 'post' is available or fetched somewhere in your code
        const postId = post.id; // Adjust this line to get the correct postId
        
        alert("Are you sure you want to add this bid?")

        try {
            // Pass postId and bidValue to createBid function
            await createBid(postId, bidValue);
        
            // Optionally reload the window after successful bid creation
            // window.location.reload();
        } catch (error) {
            console.log("Error creating post:", error);
        }
    });
}