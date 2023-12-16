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

                errorShown = false;

                await editProfileImage(avatarUrl);

                location.reload();
            } else {

                if (!errorShown) {
                    const errorElement = document.createElement('div');
                    errorElement.textContent = 'You must add a URL';
                    errorElement.classList.add('input-group', 'text-danger', 'fw-bold', 'mt-2');
                    avatarInput.parentElement.appendChild(errorElement);

                    errorShown = true;
                }
            }
        } catch (error) {
            console.error('Error updating avatar:', error);
        }
    });
}

document.addEventListener('DOMContentLoaded', editProfileImageModal);