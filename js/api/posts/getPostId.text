import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/listings";
const method = "get";

export async function openEditModal(id) {
    try {
      const post = await getPosts(id);
  
      // Populate form fields with retrieved post data
      document.getElementById('title').value = post.title;
      document.getElementById('endsAt').value = post.endsAt;
      document.getElementById('body').value = post.body;
      document.getElementById('tags').value = post.tags;
      // You may have logic here to populate images or other media
  
      // Show the modal
      document.getElementById('editPostModal').style.display = 'block';
    } catch (error) {
      console.error('Error fetching or parsing data:', error);
    }
  }
  
  // Function to fetch post data from the API
  export async function getPosts(id) {
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
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  
  // Trigger the modal with a sample post ID (replace with your logic)
  const postIdToEdit = 1;
  openEditModal(postIdToEdit);
  