import { handleDeleteButtonClick } from "../handlers/buttons/deleteBtn.mjs"; 
import { formatDate } from "../handlers/formatDate.mjs";

export function postProfileTemplate(postData) {

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-lg-4", "col-md-6", "my-3");

    const card = document.createElement("div");
    card.classList.add("card", "text-center", "p-2");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "delete-btn", "small");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-post-id", postData.id); 
    
    deleteBtn.addEventListener("click", (event) => {
        const postId = event.currentTarget.getAttribute("data-post-id"); 
    
        handleDeleteButtonClick({ id: postId }); 
      });
    
    if (postData.media && postData.media.length > 0) {
        const firstImage = postData.media[0];

        const image = document.createElement("img");
        image.classList.add("card-img-top", "profile-post", "mt-5");
        image.src = firstImage;
        image.alt = "Post Image";
        image.style.maxHeight = "200px";
        card.append(image);
    }

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = postData.title;
    cardBody.append(cardTitle);

    const description = document.createElement("p");
    description.textContent = postData.description || 'No description available';
    cardBody.append(description);

    const endsAt = document.createElement("h5");
    const endsAtDate = formatDate(postData.endsAt); 
    endsAt.textContent = `Ends at: ${endsAtDate}`;
    endsAt.classList.add("mt-3", "text-danger") 
    cardBody.appendChild(endsAt);

    card.append(deleteBtn)
    cardBody.append(endsAt);

    card.append(cardBody);
    cardContainer.append(card);

    return cardContainer;
}