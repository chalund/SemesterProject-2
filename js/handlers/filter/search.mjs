import { getPosts } from "../../api/posts/getPost.mjs";
import { renderCardTemplate } from "../../templates/renderCardTemplate.mjs";

export async function search(param) {
    try {
        const posts = await getPosts();
        
        // Check if the search term is empty or undefined
        if (!param || param.trim() === '') {
            return posts; // Return all posts if the search term is empty
        }

        const lowercaseParam = param.toLowerCase(); 

        const searchPosts = posts.filter((element) => {
            const lowercaseTitle = (element?.title || '').toLowerCase(); 
            return lowercaseTitle.includes(lowercaseParam);
        });

        return searchPosts; 
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}


export async function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    try {
        const searchResults = await search(searchTerm);
        console.log(searchResults)

        const container = document.querySelector('#auctionPosts');
        console.log(container); // Check if container is null or the actual element
        
        if (container) {
            container.innerHTML = " "; // Set innerHTML only if container exists
            // Rest of your code...
        } else {
            console.error("Container element not found!");
        }

         // Update the search result count in the header if there's a search term
         const header = document.querySelector('#auctionHeader');
         if (header && searchTerm) {
             header.textContent = `Search Results (${searchResults.length})`;
         } else {
             header.textContent = 'Auction Listings'; // Default header text if no search term
         }

        // Render the search results in the auctionPosts container
        renderCardTemplate('auctionPosts', searchResults);
    } catch (error) {
        console.error('Error during search:', error);
    }
}

// Event listener for the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);

