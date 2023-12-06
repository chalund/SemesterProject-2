import { getActivePosts } from "../../api/posts/getPost.mjs";

export async function search(param, page = 1, perPage = 20) {
    try {
        const posts = await getActivePosts();

        // Check if the search term is empty or undefined
        if (!param || param.trim() === '') {
            // Return all posts if the search term is empty
            return paginate(posts, page, perPage);
        }

        const lowercaseParam = param.toLowerCase();

        const searchPosts = posts.filter((element) => {
            const lowercaseTitle = (element?.title || '').toLowerCase();
            return lowercaseTitle.includes(lowercaseParam);
        });

        return paginate(searchPosts, page, perPage);
    } catch (error) {
        console.error("Error fetching posts:", error);
        throw error;
    }
}

function paginate(array, page, perPage) {
    const startIndex = (page - 1) * perPage;
    const endIndex = startIndex + perPage;
    return array.slice(startIndex, endIndex);
}
