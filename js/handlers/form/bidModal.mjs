import { addBid } from "../../api/posts/addBid.mjs";
import { closeBidModal } from "../buttons/closeModal.mjs";

export function bidModal(postId) {
    const bidButtonHandler = (event) => {
        const bidButton = event.target.closest('.bid-button');
        if (bidButton) {
            event.preventDefault();
            const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
            myModal.show();
        }
    };

    const saveBidHandler = async (event) => {
        const saveBidBtn = event.target.closest('#save-bid-btn');
        if (saveBidBtn) {
            event.preventDefault();
            const bidAmountInput = document.getElementById('bidAmount'); // Ensure bidAmountInput is available here
            const bidAmount = bidAmountInput.value.trim();
            let errorShown = false; // Initialize errorShown here or provide its context

            try {
                if (bidAmount !== '') {
                    // Add bid if a valid amount is provided
                    await addBid(postId, bidAmount); // Pass the postId as the first argument

                    // Optionally, close the modal or perform any other action on success
                    console.log('Bid added successfully!');

                    // Close modal after bid is added
                    const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
                    myModal.hide();

                    window.location.reload();
                } else {
                    if (!errorShown) {
                        const errorElement = document.createElement('div');
                        errorElement.textContent = 'You must add a bid amount';
                        errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
                        bidAmountInput.parentElement.appendChild(errorElement);

                        // Set errorShown to true to indicate that the error is displayed
                        errorShown = true;
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