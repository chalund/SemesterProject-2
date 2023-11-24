
// Function to add event listeners for clearing input fields
export function clearInputListeners() {
    // Function to clear input field
    function clearInput(inputId) {
        document.getElementById(inputId).value = ''; // Clear the input value
    }

    // Add event listeners to clear buttons
    document.querySelectorAll('.btn-clear').forEach(button => {
        button.addEventListener('click', function() {
            const inputId = this.closest('.input-group').querySelector('input').id;
            clearInput(inputId); // Call the function to clear the input
        });
    });
}
