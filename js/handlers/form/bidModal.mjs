import { addBid } from "../../api/posts/postById.mjs";
import { closeBidModal } from "../buttons/closeModal.mjs";
import { clearInputListeners } from "../buttons/clearInput.mjs";
import { isLoggedIn } from "../buttons/userLoggedIn.mjs";

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
    
                if (/^\d+$/.test(bidAmount)) {
                    if (errorElement) {
                        errorElement.remove();
                        errorElement = null;
                    }
    
                    await addBid(postId, bidAmount);
                    const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
                    myModal.hide();
    
                    alert("Your bid has been added successfully");
                    window.location.reload();
                } else {
                    if (!errorElement) {
                        errorElement = document.createElement('div');
                        errorElement.textContent = 'You must add a valid numeric bid amount';
                        errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
                        bidAmountInput.parentElement.appendChild(errorElement);
                    }
                }
            } catch (error) {
                console.error('Error adding bid:', error);
            }
        }
    };
    
    document.addEventListener('click', clickHandler);
    closeBidModal();
}

// document.addEventListener('DOMContentLoaded', () => {
//     const postId = ''; 
//     bidModal(postId);
// });
