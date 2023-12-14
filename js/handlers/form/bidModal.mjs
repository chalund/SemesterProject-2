import { addBid } from "../../api/posts/postById.mjs";
import { closeBidModal } from "../buttons/closeModal.mjs";
import { clearInputListeners } from "../buttons/clearInput.mjs";

export function bidModal(postId) {
    const bidButtonHandler = (event) => {
        const bidButton = event.target.closest('.bid-button');
        if (bidButton) {
            event.preventDefault();
            const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
            myModal.show();
            
            // Call clearInputListeners after the modal is shown
            clearInputListeners();
        }
    };

    const saveBidHandler = async (event) => {
        const saveBidBtn = event.target.closest('#save-bid-btn');
        if (saveBidBtn) {
            event.preventDefault();
            const bidAmountInput = document.getElementById('bidAmount'); // Ensure bidAmountInput is available here
            const bidAmount = bidAmountInput.value.trim();
            let errorElement = bidAmountInput.parentElement.querySelector('.text-danger');
    
            try {
                if (/^\d+$/.test(bidAmount)) {
                    // Remove any existing error elements
                    if (errorElement) {
                        errorElement.remove();
                        errorElement = null;
                    }
    
                    // Add bid if a valid amount is provided
                    await addBid(postId, bidAmount); // Pass the postId as the first argument
    
                    // Optionally, close the modal or perform any other action on success
                    console.log('Bid added successfully!');
    
                    // Close modal after bid is added
                    const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
                    myModal.hide();
    
                    alert("Your bid has been added successfully");
    
                    window.location.reload();
                } else {
                    if (!errorElement) {
                        // Add new error element only if it doesn't exist
                        errorElement = document.createElement('div');
                        errorElement.textContent = 'You must add a valid numeric bid amount';
                        errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
                        bidAmountInput.parentElement.appendChild(errorElement);
                    }
                }
            } catch (error) {
                // Handle any errors from the addBid function
                console.error('Error adding bid:', error);
                // Optionally, display an error message to the user or perform error handling
            }
        }
    };
    
    

    // Attach the event listeners to the document
    document.addEventListener('click', bidButtonHandler);
    document.addEventListener('click', saveBidHandler);

    closeBidModal()
 

}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const postId = ''; // Set the postId here
    bidModal(postId);
});