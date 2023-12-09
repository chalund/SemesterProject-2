export function clearInputListeners() {
    function clearInput(event) {
        const input = event.target.closest('.input-group').querySelector('input');
        input.value = '';
        console.log('Input cleared');
    }

    document.addEventListener('DOMContentLoaded', function() {
        const clearButtons = document.querySelectorAll('.btn-clear');
        clearButtons.forEach(button => {
            button.addEventListener('click', clearInput);
        });

        // console.log(clearButtons);
        // console.log('Input listeners attached');
    });
}


