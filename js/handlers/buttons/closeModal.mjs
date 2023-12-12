export function closeBidModal() {
    const reloadPage = () => {
        window.location.reload();
    };
    
    // Attach an event listener to all elements with the class .btn-close within the #bidModal
    const closeButtons = document.querySelectorAll('#bidModal .btn-closeModal');
    closeButtons.forEach(button => {
        button.addEventListener('click', reloadPage);
    });
}