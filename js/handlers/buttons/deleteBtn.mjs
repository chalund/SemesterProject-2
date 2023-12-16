import { removePost } from "../../api/posts/delete.mjs";

export async function handleDeleteButtonClick(postData) {
  const confirmation = window.confirm("Are you sure you want to delete this post?");
  if (confirmation) {
    try {
      const postId = postData.id;

      const deletedPost = await removePost(postId); 

      window.location.reload();
    } catch (error) {
      console.log("Error deleting post:", error);
      window.location.reload(); 
    }
  } else { 
     window.location.reload(); 
  }
}