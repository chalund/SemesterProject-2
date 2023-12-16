function togglePasswordValidationMessage() {
  const passwordInput = document.getElementById('passwordReg');
  const passwordValidationMessage = document.querySelector('.password-validation-message');

  passwordInput.addEventListener('input', () => {
      const isValid = passwordInput.checkValidity();

      if (isValid) {
          passwordValidationMessage.style.display = 'none';
      } else {
          passwordValidationMessage.style.display = 'block';
      }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  togglePasswordValidationMessage();
});