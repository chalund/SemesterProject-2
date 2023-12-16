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

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  togglePasswordValidationMessage();
});

// Call the function when the DOM content is loaded, passing the form ID
// document.addEventListener('DOMContentLoaded', () => {
//   toggleValidationMessages('registerForm');
// });



// import { clearInputListeners } from "../buttons/clearInput.mjs";

// document.addEventListener("DOMContentLoaded", function() {
//     const inputs = document.querySelectorAll('.form-control');
  
//     inputs.forEach(input => {
//       input.addEventListener('input', function() {
//         if (this.value.trim() !== '') {
//           this.classList.remove('is-invalid'); // Remove the 'is-invalid' class when there's input
//           const feedbackId = this.getAttribute('aria-describedby');
//           const feedbackElement = document.getElementById(feedbackId);
//           if (feedbackElement) {
//             feedbackElement.style.display = 'none'; // Hide the feedback when there's input
//           }
//         } else {
//           this.classList.add('is-invalid'); // Add the 'is-invalid' class when there's no input
//           const feedbackId = this.getAttribute('aria-describedby');
//           const feedbackElement = document.getElementById(feedbackId);
//           if (feedbackElement) {
//             feedbackElement.style.display = 'block'; // Show the feedback when there's no input
//           }
//         }
//       });
//     });
//   });
  

// export function registerFormValidation() {
   
//         const usernameInput = document.getElementById('validationServerUsername');
//         const nameFeedback = document.getElementById('validationServerUsernameFeedback');
      
//         usernameInput.addEventListener('input', function() {
//           if (this.value.trim() !== '') {
//             nameFeedback.style.display = 'none'; // Hide the feedback when there's input
//           } else {
//             nameFeedback.style.display = 'block'; // Show the feedback when there's no input
//             clearInputListeners()
//           }
//         });
 
      
  
//         const emailInput = document.getElementById('validationServerEmail');
//         const emailFeedback = document.getElementById('validationServerEmailFeedback'); // Assuming there's a feedback element for email
        
//         emailInput.addEventListener('input', function() {
//           // Your validation logic for email (if needed)
//           // Example validation:
//           const emailPattern = /^[\w\-.]+@(stud\.)?noroff\.no$/;
//           if (emailPattern.test(this.value)) {
//             emailFeedback.style.display = 'none'; // Hide the feedback when the email is valid
//           } else {
//             emailFeedback.style.display = 'block'; // Show the feedback when the email is invalid
//           }
//         });
        
  
//         const passwordInput = document.getElementById('validationServerPassword');
//         const passwordFeedback = document.getElementById('validationServerPasswordFeedback');

      
//         passwordInput.addEventListener('input', function() {
//           // Your password validation logic here
//           // For example, check if the password length is at least 8 characters
//           if (this.value.length >= 8) {
//             passwordFeedback.style.display = 'none'; // Hide the feedback when the password is valid
//           } else {
//             passwordFeedback.style.display = 'block'; // Show the feedback when the password is invalid
//           }
//         });
      

        
  
//     const avatarInput = document.getElementById('validationServerAvatar');

  
//     avatarInput.addEventListener('input', function() {
//       // Your validation logic for avatar URL (if needed)
//       // Example: checking for a valid URL pattern
//       if (isValidURL(this.value)) {
//         avatarButton.style.display = 'none';
//       } else {
//         avatarButton.style.display = 'block';
//       }
//     });
  
//     // Function to validate URL format
//     function isValidURL(url) {
//       // Regular expression pattern for a valid URL
//       const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
//       return urlPattern.test(url);
//     }
//   }
  
//   // Call the function when the DOM content is loaded
//   document.addEventListener("DOMContentLoaded", registerFormValidation);
  