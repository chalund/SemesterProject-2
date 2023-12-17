import { addBid, getPostId } from "../../api/posts/postById.mjs";
import { closeBidModal } from "../buttons/closeModal.mjs";
import { clearInputListeners } from "../buttons/clearInput.mjs";
import { isLoggedIn } from "../buttons/userLoggedIn.mjs";
import { findLatestBidAmount } from "../latestBidder.mjs";

export function bidModal(postId) {
    const clickHandler = async (event) => {
        const bidButton = event.target.closest('.bid-button');
        const saveBidBtn = event.target.closest('#save-bid-btn');
        
        if (bidButton) {
            event.preventDefault();
            const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
            myModal.show();
            clearInputListeners();
        }

        if (saveBidBtn) {
            event.preventDefault();
            const bidAmountInput = document.getElementById('bidAmount');
            const bidAmount = bidAmountInput.value.trim();
            let errorElement = bidAmountInput.parentElement.querySelector('.text-danger');
    
            try {
                if (!isLoggedIn()) {
                    alert('You must be logged in to place a bid.');
                    window.location.reload();
                    return; 
                }
    
                if (!bidAmount) {
                    displayErrorMessage('You must add a valid numeric bid amount');
                    return;
                }

                if (/^\d+$/.test(bidAmount)) {
                    if (errorElement) {
                        errorElement.remove();
                        errorElement = null;
                    }

                    const postData = await getPostId(postId);
                    const latestBidAmount = findLatestBidAmount(postData.bids);

                    if (bidAmount <= latestBidAmount) {
                        displayErrorMessage('Your bid must be higher than the current bid');
                        return;
                    }
    
                    await addBid(postId, bidAmount);
                    const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
                    myModal.hide();
    
                    alert("Your bid has been added successfully");
                    window.location.reload();
                    console.log(addBid)
                } else {
                    displayErrorMessage('You must add a valid numeric bid amount');
                }
            } catch (error) {
                console.error('Error adding bid:', error);
            }
        }
    };

    const displayErrorMessage = (message) => {
        const bidAmountInput = document.getElementById('bidAmount');
        let errorElement = bidAmountInput.parentElement.querySelector('.text-danger');
        
        if (errorElement) {
            errorElement.textContent = message;
        } else {
            errorElement = document.createElement('div');
            errorElement.textContent = message;
            errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
            bidAmountInput.parentElement.appendChild(errorElement);
        }
    };
    
    document.addEventListener('click', clickHandler);
    closeBidModal();
}


