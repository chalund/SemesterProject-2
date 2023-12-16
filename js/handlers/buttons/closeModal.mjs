export function closeBidModal() {
    const reloadPage = () => {
        window.location.reload();
    };

    const closeButtons = document.querySelectorAll('#bidModal .btn-closeModal');
    closeButtons.forEach(button => {
        button.addEventListener('click', reloadPage);
    });
}