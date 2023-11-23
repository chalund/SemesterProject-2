console.log("script.js")

import { getPosts } from "./api/posts/getPost.mjs"


import { postTemplate, renderPostTemplates } from "./cardTemplate.mjs";


async function getPostTemplate() {
    const posts = await getPosts()
    const container = document.querySelector("#auctionPosts")
    renderPostTemplates(posts, container)
}
getPostTemplate()
