// import { productTemplate } from "./productTemplate.mjs"; 
// import { getPostId } from "../api/posts/postById.mjs"; 


// export async function renderProductTemplate(containerId, getPostsFunction) {
//     try {
//         const posts = await getPostsFunction();
//         console.log(posts)
//         const container = document.querySelector(`#${containerId}`);

//         if (!container) {
//             throw new Error(`Container with ID '${containerId}' not found.`);
//         }

//         if (!Array.isArray(posts)) {
//             throw new Error('Posts retrieval failed or the data format is incorrect.');
//         }

//         container.innerHTML = ''; // Clear existing content before rendering new posts

//         posts.forEach(post => {
//             const postContent = postTemplateTest(post);
//             container.append(postContent);
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }
// document.addEventListener('DOMContentLoaded', () => {
//     renderProductTemplate('viewProduct', getPostId);
// });