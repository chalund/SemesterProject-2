import { getPosts} from "../../api/posts/getPost.mjs";
import { renderCardTemplate } from "../../templates/renderCardTemplate.mjs";

export async function search(param) {
    try {
        const posts = await getPosts();
        // console.log("get active posts", posts)
        
        if (!param || param.trim() === '') {
            return posts; 
        }

        const lowercaseParam = param.toLowerCase(); 

        const searchPosts = posts.filter((element) => {
            const lowercaseTitle = (element?.title || '').toLowerCase();
            const lowercaseDescription = (element?.description || '').toLowerCase();
            const lowercaseTags = (element?.tags || []).join(' ').toLowerCase(); 

            return (
                lowercaseTitle.includes(lowercaseParam) ||
                lowercaseDescription.includes(lowercaseParam) ||
                lowercaseTags.includes(lowercaseParam)
            );
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
        // console.log(searchResults)

        const container = document.querySelector('#auctionPosts');

        
        if (container) {
            container.innerHTML = " "; 

        } else {
            console.error("Container element not found!");
        }

         const header = document.querySelector('#auctionHeader');
         if (header && searchTerm) {
             header.textContent = `Search Results (${searchResults.length})`;
         } else {
             header.textContent = 'Auction Listings'; 
         }

        renderCardTemplate('auctionPosts', searchResults);
    } catch (error) {
        console.error('Error during search:', error);
    }
}

const searchButton = document.getElementById('searchButton');
const searchInput = document.getElementById('searchInput');

searchButton.addEventListener('click', handleSearch);

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 

        handleSearch();
    }
});