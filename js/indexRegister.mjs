import { registerFormListener } from "./handlers/form/register.mjs"; 
import { clearInputListeners } from "./handlers/buttons/clearInput.mjs";
clearInputListeners()
registerFormListener()



function toggleValidationMessage(inputFieldId, validationMessageClass) {
    const input = document.querySelector(`#${inputFieldId}`);
    const validationMessage = document.querySelector(`.${validationMessageClass}`);

    input.addEventListener('input', () => {
        const isValid = input.checkValidity();

        if (isValid) {
            validationMessage.style.display = 'none';
        } else {
            validationMessage.style.display = 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    toggleValidationMessage('usernameReg', 'username-validation-message');
    toggleValidationMessage('emailReg', 'email-validation-message');
    toggleValidationMessage('passwordReg', 'password-validation-message');
    toggleValidationMessage('avatarReg', 'avatar-validation-message');
});
