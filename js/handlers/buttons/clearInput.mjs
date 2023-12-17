export function clearInputListeners() {
    function clearInput(event) {
        const input = event.target.closest('.input-group').querySelector('input');
        input.value = '';
    }

    document.addEventListener('DOMContentLoaded', function() {
        const clearButtons = document.querySelectorAll('.btn-clear');
        clearButtons.forEach(button => {
            button.addEventListener('click', event => {
                clearInput(event);
            });
        });
    });
}