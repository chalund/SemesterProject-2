// import { API_BASE_URL } from "../../api/constants.mjs";
// import { load } from "../../api/storage/index.mjs";
// import { getPostId } from "../../api/posts/postById.mjs";

// const action = 'api/v1/auctions/'




// export async function addBid(postId, bidAmount) {
//     const token = load('accessToken');
//     const username = load('username');
//     const bidUrl = `${API_BASE_URL}/${action}/${id}${username}/bids`; // Replace with your actual bid endpoint

//     try {
//         const data = {
//             amount: bidAmount,
   
//         };

//         const response = await fetch(bidUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 Authorization: `Bearer ${token}`,
//             },
//             body: JSON.stringify(data),
//         });

//         if (response.ok) {
//             const newBid = await response.json();
//             // Optionally handle success (e.g., close the modal)
//             console.log('Bid added:', newBid);
//             return newBid;
//         } else {
//             console.error('Failed to add bid.');
//             throw new Error('Failed to add bid');
//         }
//     } catch (error) {
//         console.error('Error adding bid:', error);
//         throw error;
//     }
// }


// export function bidModal(postId) {
//     const bidButton = document.querySelector('.bid-button');
//     const saveBidBtn = document.getElementById('save-bid-btn');
//     const bidAmountInput = document.getElementById('bidAmount');
//     let errorShown = false;

    

//     bidButton.addEventListener('click', (event) => {
//         event.preventDefault();
//         const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
//         myModal.show();
//     });

//     saveBidBtn.addEventListener('click', async (event) => {
//         event.preventDefault();
    
//         const bidAmount = bidAmountInput.value.trim();
    
//         try {
//             if (bidAmount !== '') {
//                 // Add bid if a valid amount is provided
//                 await addBid(postId, bidAmount); // Pass the postId as the first argument
                    
//                 // Optionally, close the modal or perform any other action on success
//                 console.log('Bid added successfully!');
                
//                 // Close modal after bid is added
//                 const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
//                 myModal.hide();
//             } else {
//                 if (!errorShown) {
//                     const errorElement = document.createElement('div');
//                     errorElement.textContent = 'You must add a bid amount';
//                     errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
//                     bidAmountInput.parentElement.appendChild(errorElement);

//                     // Set errorShown to true to indicate that the error is displayed
//                     errorShown = true;
//                 }
//             }
//         } catch (error) {
//             // Handle any errors from the addBid function
//             console.error('Error adding bid:', error);
//             // Optionally, display an error message to the user or perform error handling
//         }
//     });
// }

// // Call the function when the DOM content is loaded
// document.addEventListener('DOMContentLoaded', bidModal);







// export function handleBidButtonClick() {
//     const bidButton = document.querySelector('.bid-button');

//     bidButton.addEventListener('click', (event) => {
//         event.preventDefault();
//         const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
//         myModal.show();
//     });

//     const closeButton = document.querySelector('.btn-secondary'); // Assuming the Close button has a class of btn-secondary
//     closeButton.addEventListener('click', () => {
//         const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
//         myModal.hide();
//         window.location.reload(); // Reload the page
//     });
// }