export function clearInputListeners() {
    // Function to clear input field
    function clearInput() {
        const inputs = document.querySelectorAll('input'); // Get all input elements
        inputs.forEach(input => {
            input.value = ''; // Clear the input value
        });
    }

    // Event listener attached to a parent element
    document.addEventListener('click', event => {
        if (event.target.classList.contains('btn-clear')) {
            clearInput(); // Call the function to clear all input fields
        }
    });
}
