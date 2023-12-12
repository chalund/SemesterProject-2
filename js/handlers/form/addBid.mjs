import { createBid } from "../../api/posts/create.mjs"; 


export async function createBidFormListener() {
    
    const form = document.querySelector("#addBidForm");

    // Adding event listener for form submission
    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formElements = event.target;

        // Find the input element inside the form elements
        const bidInput = formElements.querySelector('.bidSearch');
        const bidValue = bidInput.value.trim();

        const addBid = {
            amount: Number(bidValue),
        };

        try {
            const response = await createBid(addBid); // Pass addBid object to createBid function
            // Bid creation successful
            console.log("Bid added successfully:", response);
            window.location.replace("/listing/product/index/html");
            // add to page
            //show message
           
        } catch (error) {
            console.log("Error creating bid:", error);
            // Handle specific error cases and provide feedback to the user
        }
    });
}