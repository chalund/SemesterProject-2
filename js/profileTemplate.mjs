export function postTemplate(postData) {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-md-4", "mt-3");

    const card = document.createElement("div");
    card.classList.add("card", "text-center", "p-2");

    // Check if media array exists and has images
    if (postData.media && postData.media.length > 0) {
        const firstImage = postData.media[0]; // Get the first image from the media array

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = firstImage; // Assuming each image URL is a string in the media array
        image.alt = "Post Image";
        image.style.maxHeight = "200px"; // Set the maximum height for the image
        card.append(image);
    }

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = postData.title;
    cardBody.append(cardTitle);

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
    bidAmount.textContent = "$186"; // Replace this with actual bid amount from postData
    amount.append(bidAmount);
    BidDiv.append(amount);

    cardBody.append(BidDiv);

    const actionDiv = document.createElement("div");
    const viewButton = document.createElement("a");
    viewButton.href = "#";
    viewButton.classList.add("btn", "btn-danger", "mt-3");
    viewButton.textContent = "View";

    const editButton = document.createElement("a");
    editButton.href = "#";
    editButton.classList.add("btn", "btn-danger", "mt-3", "ms-2"); // Adding margin to separate buttons
    editButton.textContent = "Edit";

    actionDiv.append(viewButton);
    actionDiv.append(editButton);
    cardBody.append(actionDiv);

    card.append(cardBody);
    cardContainer.append(card);
    
    return cardContainer;
}