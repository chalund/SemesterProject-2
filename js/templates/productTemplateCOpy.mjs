function formatDate(postData) {
    const date = new Date(postData);
    return date.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
}

function calculateTotalBidsAmount(bids) {
    return bids.reduce((total, bid) => total + bid.amount, 0);
}



export function productTemplate(postData) {
    const container = document.createElement("div")
    container.classList.add("container", "my-0", "my-sm-5", "pb-5", "bg-info")

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("row");

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("col-sm-12", "col-md-12", "col-lg-6", "d-flex", "align-items-center", "justify-content-center");

    const imageContainerDiv = document.createElement("div");
    imageContainerDiv.classList.add("text-center", "mt-5", "pb-lg-4", "border");

    const productImages = document.createElement("div");
    productImages.classList.add("item-image");

    const mainImage = document.createElement("img");
    mainImage.src = postData.media[0]; // Assuming the image URL is at the first index of the media array
    mainImage.alt = "Main Product Image";
    productImages.appendChild(mainImage); 

    const productImageList = document.createElement("div");
    productImageList.classList.add("item-list");


    productImageList.appendChild(productImages);
    imageContainerDiv.appendChild(productImages);
    imageContainer.appendChild(productImages);
    cardContainer.append(imageContainer);

    const productContainer = document.createElement("div");
    productContainer.classList.add("col-sm-12", "col-md-12", "col-lg-6", "d-flex", "justify-content-center", "align-items-center");

    const productContainerDiv = document.createElement("div");
    productContainerDiv.classList.add("mt-5", "pb-4", "pb-sm-0", "border","border-black");

    const productInfoDiv = document.createElement("div");
    productInfoDiv.classList.add("product-info", "p-sm-4");
    

    const postCreated = document.createElement("p")
    const postCreatedDate = formatDate(postData.created)
    postCreated.textContent = `Created: ${postCreatedDate}`;
    postCreated.classList.add("mt-3", "text-primary") // Set the formatted date
    productContainerDiv.appendChild(postCreated)

    const productTitle = document.createElement("h1");
    productTitle.textContent = postData.title;
    productInfoDiv.appendChild(productTitle);



    const productDescription = document.createElement("p");
    productDescription.textContent = postData.description;
    productInfoDiv.appendChild(productDescription);

    const productDescription2 = document.createElement("p");
    productDescription.textContent = `postData.description`;
    productInfoDiv.appendChild(productDescription2);

    const currentBid = document.createElement("h3");
    const currentBidAmount = calculateTotalBidsAmount(postData.bids)
    currentBid.classList.add("my-3", "currentBid");
    currentBid.textContent = `Current bid: ${currentBidAmount} credits`;
    productInfoDiv.appendChild(currentBid);
    

    productContainerDiv.appendChild(productInfoDiv);

    const productTimeDiv = document.createElement("div");
    productTimeDiv.classList.add("product-time", "bg-light", "p-3");

    const timeLeftTitle = document.createElement("h4");
    timeLeftTitle.textContent = "Time left";
    productTimeDiv.appendChild(timeLeftTitle);
    

    const endsAt = document.createElement("h5");
    const endsAtDate = formatDate(postData.endsAt);
    endsAt.textContent = `Ends at: ${endsAtDate}`;
    endsAt.classList.add("mt-3", "text-danger");
    productContainerDiv.appendChild(endsAt);

    // Creating bid form and buy now button
    const bidFormDiv = document.createElement("div");
    bidFormDiv.classList.add("mt-4", "p-sm-4");

    const bidFormTitle = document.createElement("h4");
    bidFormTitle.textContent = "Your Bid:";
    bidFormDiv.appendChild(bidFormTitle);

    const bidForm = document.createElement("form");
    bidForm.classList.add("col-4", "d-flex");
    bidForm.setAttribute("role", "search");
    bidForm.innerHTML = `
        <input class="form-control me-2" type="search" aria-label="Search">
        <button class="btn btn-primary" type="submit">Bid</button>
    `;
    bidFormDiv.appendChild(bidForm);


    productContainerDiv.appendChild(bidFormDiv);
    productContainer.appendChild(productContainerDiv);
    cardContainer.appendChild(productContainer);


    const bidContainer = document.createElement("div");
    bidContainer.classList.add("col-12", "border", "p-3");
    
    const bidHistoryTitle = document.createElement("h3");
    bidHistoryTitle.textContent = "Bid history";
    bidContainer.appendChild(bidHistoryTitle);
    
    const bidLine = document.createElement("div");
    bidLine.classList.add("col-4", "py-1", "bg-primary");
    bidContainer.appendChild(bidLine);
    
    postData.bids.forEach(bid => {
    const bidEntry = document.createElement("div");
    bidEntry.classList.add("d-flex", "justify-content-start", "align-items-center", "mb-2"); // Added margin-bottom for spacing
    
    const bidDate = document.createElement("p");
    const bidDateCreated = formatDate(bid.created);
    bidDate.classList.add("me-3");
    bidDate.textContent = `${bidDateCreated}`;

    const bidUsername = document.createElement("p");
    bidUsername.classList.add("me-3");
    bidUsername.textContent = bid.bidderName;
    bidUsername.style.width = "155px"; // Set a fixed width

    const bidAmount = document.createElement("p");
    bidAmount.classList.add("me-3");
    bidAmount.textContent = `$${bid.amount}`;
    bidAmount.style.width = "100px"; // Set a fixed width

    bidEntry.appendChild(bidDate);
    bidEntry.appendChild(bidUsername);
    bidEntry.appendChild(bidAmount);

    bidContainer.appendChild(bidEntry);
});
    
    cardContainer.appendChild(bidContainer);

    container.append(cardContainer)

    return container;
}















