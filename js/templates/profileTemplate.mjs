import { handleDeleteButtonClick } from "../handlers/buttons/deleteBtn.mjs"; 

export function postProfileTemplate(postData) {

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-lg-4", "col-md-6", "my-3");

    const card = document.createElement("div");
    card.classList.add("card", "text-center", "p-2");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "delete-btn", "small");
    deleteBtn.textContent = "Delete";
    deleteBtn.setAttribute("data-post-id", postData.id); // Add a custom attribute to store post ID
    deleteBtn.addEventListener("click", handleDeleteButtonClick); // Add click event listener
    
    deleteBtn.addEventListener("click", (event) => {
        const postId = event.currentTarget.getAttribute("data-post-id"); // Extract post ID from custom attribute
    
        handleDeleteButtonClick({ id: postId }); // Pass an object with the 'id' property to handleDeleteButtonClick
      });


    if (postData.media && postData.media.length > 0) {
        const firstImage = postData.media[0];

        const image = document.createElement("img");
        image.classList.add("card-img-top" , "profile-post");
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

    const BidDiv = document.createElement("div");
    BidDiv.classList.add("row", "align-items-center");

    const colTextEnd = document.createElement("div");
    colTextEnd.classList.add("col", "text-end");
    const currentBid = document.createElement("p");
    currentBid.classList.add("mb-0");
    currentBid.textContent = "Current bid";
    colTextEnd.append(currentBid);
    BidDiv.append(colTextEnd);

    const amount = document.createElement("div");
    amount.classList.add("col", "text-start");
    const bidAmount = document.createElement("h4");
    bidAmount.classList.add("mb-0");
    bidAmount.textContent = `$${postData.amount || '0'}`;
    amount.append(bidAmount);
    BidDiv.append(amount);

    cardBody.append(BidDiv);

    const viewButton = document.createElement("a");
    viewButton.href = "listing/item.html";
    viewButton.classList.add("btn", "btn-primary", "mt-3");
    viewButton.textContent = "View";

    const endsAt = document.createElement("h5");
    const endsAtDate = new Date(postData.endsAt); // Convert endsAt string to a Date object
    const formattedDate = endsAtDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    endsAt.textContent = `Ends at: ${formattedDate}`;
    endsAt.classList.add("mt-3", "text-danger") // Set the formatted date
    cardBody.appendChild(endsAt);

    card.append(deleteBtn)
    cardBody.append(viewButton);
    cardBody.append(endsAt);

    card.append(cardBody);
    cardContainer.append(card);

 

    
    return cardContainer;
}




// export function renderPostTemplate(postData, parent) {
//     parent.append(postTemplate(postData))
// }

// export function renderPostTemplates(postDataList, parent) {
//     parent.append(...postDataList.map(postTemplate))
// }

