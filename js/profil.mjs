// Function to fetch post data by ID
async function fetchPostData(postId) {
    // Fetch the post data using the postId
    const response = await fetch(`/api/posts/${postId}`); // Adjust the URL based on your API endpoint
    if (response.ok) {
        return await response.json();
    } else {
        throw new Error('Failed to fetch post data');
    }
}

// Function to populate the modal with post data
async function populateEditModal(postId) {
    try {
        const postData = await fetchPostData(postId);

        // Populate form fields with post data
        document.getElementById('title').value = postData.title;
        document.getElementById('endsAt').value = postData.endsAt;
        document.getElementById('body').value = postData.body;
        document.getElementById('tags').value = postData.tags;
        document.getElementById('media').value = postData.media;

        // Show the modal after populating the fields
        const editPostModal = new bootstrap.Modal(document.getElementById('editPostModal'));
        editPostModal.show();
    } catch (error) {
        console.error('Error populating edit modal:', error);
    }
}

// Event listener when the modal is shown
document.getElementById('editPostModal').addEventListener('shown.bs.modal', function(event) {
    // Assuming you have the postId available when triggering the modal
    const postId = 'your-post-id'; // Replace 'your-post-id' with the actual post ID

    // Call the function to populate the modal with post data
    populateEditModal(postId);
});