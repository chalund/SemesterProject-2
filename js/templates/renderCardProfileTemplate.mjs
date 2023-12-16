import { postProfileTemplate } from "./cardProfileTemplate.mjs";

export async function renderCardProfileTemplate(containerId, posts) {
    try {
        const container = document.querySelector(`#${containerId}`);
        
        if (!container) throw new Error(`Container with ID '${containerId}' not found.`);
        if (!Array.isArray(posts)) throw new Error('Posts retrieval failed or the data format is incorrect.');
        
        posts.forEach(post => container.append(postProfileTemplate(post)));
    } catch (error) {
        console.error('Error:', error);
    }
}
