import { createBid } from "../../api/posts/create.mjs"; 
import { isLoggedIn } from "../buttons/userLoggedIn.mjs";


export async function createBidFormListener() {
    const form = document.querySelector("#addBidForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();
        const formElements = event.target;

        const bidInput = formElements.querySelector('.bidSearch');
        const bidValue = bidInput.value.trim();

        const addBid = {
            amount: Number(bidValue),
        };

        try {
            const response = await createBid(addBid); 
            // console.log("Bid added successfully:", response);
            window.location.replace("/listing/product/index/html");
           
        } catch (error) {
            console.log("Error creating bid:", error);
            // Handle specific error cases and provide feedback to the user
        }
    });
}