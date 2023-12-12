import { getPosts } from "../../api/posts/getPost.mjs"; 
import { postTemplate } from "../../templates/cardTemplate.mjs"; 
const filterPostContainer = document.querySelector("#auctionPosts")

export async function fetchAndFilterPosts() {
  try {
    const posts = await getPosts(); 

    const filterBtn = document.querySelectorAll(".dropdown-item");
    filterBtn.forEach((tab) => {
      tab.addEventListener("click", () => {
        filterBtn.forEach((tab) => {
          tab.classList.remove("active");
        });

        tab.classList.add("active");

        const tabVal = tab.getAttribute("data-filter")
        if (tabVal === "newest") {
            filterNewest(posts);
          } else if (tabVal === "oldest") {
            filterOldest(posts);
          } else if (tabVal === "endsToday") {
            filterPostsEndsToday(posts);
          } else if (tabVal === "viewAll") {
            showAllPosts(posts);
          }
      });
    });
    console.log(posts);
    return posts;

  } catch (error) {
    console.log("Error fetching posts:", error);
    throw error; 
  }
}

export function appendCountElement(container, count) {
  if (count !== undefined) {
    const countElement = createCountElement(count);
    countElement.classList.add("text-center", "bg-primary", "text-white");
    container.append(countElement);
  }
}

export function createCountElement(count) {
  const countDiv = document.createElement("div");
  countDiv.classList.add("card", "text-center", "mb-3");

  const countElement = document.createElement("p");
  countElement.textContent = `Number of Posts: ${count}`;

  countDiv.append(countElement);
  return countDiv;
}


export function createTitleElement(title, count) {
  const titleDiv = document.createElement("div");
  titleDiv.classList.add("card", "text-center", "mb-3", "bg-primary", "text-white");

  const titleElement = document.createElement("h2");
  titleElement.textContent = title;

  titleDiv.append(titleElement);

  appendCountElement(titleDiv, count);

  return titleDiv;
}


export function filterNewest(posts) {
    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.created).getTime();
      const dateB = new Date(b.created).getTime();
      return dateB - dateA; // Sort in descending order for newest first
    });
  
    filterPostContainer.innerHTML = " ";
  
    const titleDiv = createTitleElement("Newest", sortedPosts.length);
    filterPostContainer.append(titleDiv);
  
    sortedPosts.forEach((post) => {
      const postElement = postTemplate(post);
      filterPostContainer.append(postElement);
    });
  }

  export function filterOldest(posts) {
    const sortedPosts = posts.sort((a, b) => {
      const dateA = new Date(a.created).getTime();
      const dateB = new Date(b.created).getTime();
      return dateA - dateB; // Sort in ascending order for oldest first
    });
  
    filterPostContainer.innerHTML = " ";
  
    const titleDiv = createTitleElement("Oldest", sortedPosts.length);
    filterPostContainer.append(titleDiv);
  
    sortedPosts.forEach((post) => {
      const postElement = postTemplate(post);
      filterPostContainer.append(postElement);
    });
  }
  

  export async function filterPostsEndsToday(postsResponse) {
    const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format

    const postsEndingToday = postsResponse.filter(post => {
        const postEndDate = post.endsAt.split('T')[0]; // Extract the date part from "endsAt" field
        return postEndDate === today; // Check if the post's end date matches today's date
    });

    // Sort postsEndingToday by their end date in ascending order
    const sortedPostsEndingToday = postsEndingToday.sort((a, b) => {
        const dateA = new Date(a.endsAt).getTime();
        const dateB = new Date(b.endsAt).getTime();
        return dateA - dateB;
    });

    return sortedPostsEndingToday;
}

export function showAllPosts(posts) {
// console.log("All Posts:", posts);
  filterPostContainer.innerHTML = "";

  const titleDiv = createTitleElement("All Posts", posts.length);
  filterPostContainer.append(titleDiv);

  posts.forEach((post) => {
    const postElement = postTemplate(post);
    filterPostContainer.append(postElement);
  });
}

fetchAndFilterPosts();
