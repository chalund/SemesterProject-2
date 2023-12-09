export function handleBidButtonClick() {
    const bidButton = document.querySelector('.bid-button');

    bidButton.addEventListener('click', (event) => {
        event.preventDefault();
        const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
        myModal.show();
    });

    const closeButton = document.querySelector('.btn-secondary'); // Assuming the Close button has a class of btn-secondary
    closeButton.addEventListener('click', () => {
        const myModal = new bootstrap.Modal(document.getElementById('bidModal'));
        myModal.hide();
        window.location.reload(); // Reload the page
    });
}