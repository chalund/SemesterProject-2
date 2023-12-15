// import { removePost } from "../../api/posts/delete.mjs";

// export async function handleDeleteButtonClick(postData) {
//   const confirmation = window.confirm("Are you sure you want to delete this post?");
//   if (confirmation) {
//     try {
//       const postId = postData.id;

//       const deletedPost = await removePost(postId); // Pass the postID to removePost

//       if (deletedPost) {
//         // Remove post from UI or perform other actions if needed
//       }
//       // window.location.reload();

//     } catch (error) {
//       console.log("Error deleting post:", error);
//     }
// }
// }


import { removePost } from "../../api/posts/delete.mjs";

export async function handleDeleteButtonClick(postData) {
  try {
    const userConfirmed = window.confirm("Are you sure you want to delete this listing?");
    
    if (userConfirmed) {
        const deleteRequest = await removePost(postId);;
        const response = await fetch(deleteURL, deleteRequest);

        if (response.ok) {
            alert("You have successfully deleted this listing!");
            // window.location.replace("/index.html");
        } else {
            alert("You can't delete this post!");
        }
    } else {
        alert("You did not delete this listing!");
    
    }
} catch (error) {
    console.log(error);
}
}




