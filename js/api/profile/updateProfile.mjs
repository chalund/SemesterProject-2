import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs"; 

const action = "api/v1/auction/profiles"

export async function editProfileImage(avatarUrl) {
    const token = load("accessToken");
    const username = load("username");
    const editProfileImageUrl = `${API_BASE_URL}/${action}/${username}/media`; // Replace with your actual user info endpoint
  
    try {
        const data = {
            avatar: avatarUrl
        };

        const response = await fetch(editProfileImageUrl, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const getProfile = await response.json();
            // console.log(getProfile);
            return getProfile;
        } else {
            console.error('Failed to update avatar.');
            throw new Error('Failed to update avatar');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export function editProfileImageModal() {
    const saveChangesBtn = document.querySelector('#save-btn');
    const avatarInput = document.getElementById('avatar');
    let errorShown = false;

    saveChangesBtn.addEventListener('click', async function() {
        const avatarUrl = avatarInput.value.trim();

        try {
            if (avatarUrl !== '') {
                // Reset errorShown flag if a valid URL is provided
                errorShown = false;

                await editProfileImage(avatarUrl);

                location.reload();
                // Optionally, add code here to handle success (e.g., close the modal)
            } else {
                // Show error message for missing avatar URL only if not already shown
                if (!errorShown) {
                    const errorElement = document.createElement('div');
                    errorElement.textContent = 'You must add a URL';
                    errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
                    avatarInput.parentElement.appendChild(errorElement);

                    // Set errorShown to true to indicate that the error is displayed
                    errorShown = true;
                }
            }
        } catch (error) {
            // Handle any errors from the editProfileImage function
            console.error('Error updating avatar:', error);
            // Optionally, display an error message to the user or perform error handling
        }
    });
}

// Call the function when the DOM content is loaded
document.addEventListener('DOMContentLoaded', editProfileImageModal);