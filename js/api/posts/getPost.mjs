import { API_BASE_URL } from "../constants.mjs"; 
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings";
const method = "get";

export async function getPosts() {
    const token = load("accessToken")
    const getPostUrl = `${API_BASE_URL}${action}`;

    try {
        const response = await fetch(getPostUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
            const data = await response.json();
            console.log(data)
            return data;
     
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function getPost(id) {
    const token = load("accessToken")
    const getPostUrl = `${API_BASE_URL}${action}/${id}`;

    try {
        const response = await fetch(getPostUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
            const data = await response.json();
            console.log(data)
            return data;
     
    } catch (error) {
        console.error(error);
        throw error;
    }
}


// document.addEventListener('click', async (event) => {
//     if (event.target.classList.contains('edit-btn')) {
//       const postId = event.target.id.replace('editBtn', '');
//       try {
//         const post = await getPost(postId);
//         await populateEditModal(post);
//       } catch (error) {
//         console.error('Error fetching or parsing data:', error);
//       }
//     }
//   });
  
//   async function populateEditModal(post) {
//     try {
//       // Populate form fields with retrieved post data
//       document.getElementById('title').value = post.title || ''; // Set a default value if 'title' is undefined
//       document.getElementById('endsAt').value = post.endsAt || ''; // Set a default value if 'endsAt' is undefined
//       document.getElementById('body').value = post.description || ''; // Use 'description' or 'body' based on your actual object property
//       document.getElementById('tags').value = post.tags.join(', ') || ''; // Convert array to string if 'tags' is an array, set a default value otherwise
  
//       // Show the modal
//       document.getElementById('editPostModal').style.display = 'block';
//     } catch (error) {
//       console.error('Error populating edit modal:', error);
//     }
//   }
  







