import { closeBidModal } from "../../handlers/buttons/closeModal.mjs";

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
            const bidAmountInput = document.getElementById('bidAmount'); 
            const bidAmount = bidAmountInput.value.trim();
            let errorShown = false; 

            try {
                if (bidAmount !== '') {
                    await addBid(postId, bidAmount); 

                    // console.log('Bid added successfully!');

                    const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
                    myModal.hide();

                    window.location.reload();
                } else {
                    if (!errorShown) {
                        const errorElement = document.createElement('div');
                        errorElement.textContent = 'You must add a bid amount';
                        errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
                        bidAmountInput.parentElement.appendChild(errorElement);

                        errorShown = true;
                    }
                }
            } catch (error) {
                console.error('Error adding bid:', error);
            }
        }
    };

    document.addEventListener('click', bidButtonHandler);
    document.addEventListener('click', saveBidHandler);

    closeBidModal()

}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const postId = ''; 
    bidModal(postId);
});