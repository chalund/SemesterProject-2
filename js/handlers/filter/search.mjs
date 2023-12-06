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


// Function to handle the search
export async function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim(); // Get the value from the search input and remove leading/trailing spaces

    try {
        const searchResults = await search(searchTerm); // Call the search function passing the search term

        // Update the search result count in the header
        const header = document.querySelector('#auctionHeader');
        if (header) {
         
        }

        // Render the search results in the auctionPosts container
        renderCardTemplate('auctionPosts', async () => searchResults);
    } catch (error) {
        console.error('Error during search:', error);
    }
}

// Event listener for the search button
const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', handleSearch);

