import { removePost } from "../../api/posts/delete.mjs";

export async function handleDeleteButtonClick(postData) {
  const confirmation = window.confirm("Are you sure you want to delete this post?");
  if (confirmation) {
    try {
      const postId = postData.id;
      console.log("Post ID to delete:", postId);

      const deletedPost = await removePost(postId); // Pass the postID to removePost

      if (deletedPost) {
        // Remove post from UI or perform other actions if needed
      }
      window.location.reload();

    } catch (error) {
      console.log("Error deleting post:", error);
    }
  } else {
    // If the user clicks Cancel, do nothing
  }
}
