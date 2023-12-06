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

function findLatestBidder(bids) {
    if (bids.length === 0) {
        return null; // No bids available
    }

    // Sort the bids by 'created' time in descending order
    const sortedBids = bids.sort((a, b) => new Date(b.created) - new Date(a.created));

    // Get the latest bid's bidderName
    const latestBidderName = sortedBids[0].bidderName;
    return latestBidderName;
}



export function productTemplate(postData) {
    const container = document.createElement("div")
    container.classList.add("container", "my-0", "my-sm-5", "pb-5", "border")

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("row");
    container.append(cardContainer)

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

    //adds images 
    productImageList.appendChild(productImages);
    imageContainerDiv.appendChild(productImages);
    imageContainer.appendChild(productImages);
    cardContainer.append(imageContainer);

  

    //right side of container info content
    const productContainer = document.createElement("div");
    productContainer.classList.add("col-sm-12", "col-md-12", "col-lg-6", "d-flex", "justify-content-center", "align-items-center");
    cardContainer.append(productContainer)


    const productContentContainer = document.createElement("div");
    productContentContainer.classList.add("border", "d-flex" ,"flex-colum" , "justify-center-between");
    productContainer.append(productContentContainer)

    const productInfo = document.createElement("div")
    productInfo.classList.add("p-3")
    productContentContainer.append(productInfo)

    const sellerInfo = document.createElement("div")
    sellerInfo.classList.add("mb-3", "border")
    productInfo.append(sellerInfo)

    const sellerCreated = document.createElement("p")
    const sellerCreatedDate = formatDate(postData.created)
    sellerCreated.classList.add( "mb-1")
    sellerCreated.textContent = `Created: ${sellerCreatedDate}`
    
    const sellerId = document.createElement("p")
    sellerId.classList.add("mb-1")
    // sellerId.textContent = `${postData.seller.name}`

    const sellerInfoLine = document.createElement("div")
    sellerInfoLine.classList.add("mb-1", "py-1", "bg-primary")

    sellerInfo.append(sellerCreated, sellerId, sellerInfoLine)


    const productTitle = document.createElement("h1");
    productTitle.textContent = postData.title;

    const productDescription = document.createElement("p");
    productDescription.textContent = postData.description;

    //tags
    const productTags = document.createElement("div");
    productTags.classList.add("d-flex", "flex-wrap");
    
    const tagsArray = postData.tags;
    
    const tagsTitle = document.createElement("p");
    tagsTitle.textContent = "Tags: ";
    tagsTitle.classList.add("mr-2");
    productTags.appendChild(tagsTitle);
    
    tagsArray.forEach(tag => {
        const tagElement = document.createElement("p");
        tagElement.classList.add("mx-2", "border");
        tagElement.textContent = tag;
        productTags.appendChild(tagElement);
    });

    const currentBidContainer = document.createElement("div"); 
    currentBidContainer.classList.add("mt-4" , "border")

    const currentPrice = document.createElement("p");
    currentPrice.classList.add = ("mb-1")
    currentPrice.textContent = `Current Price:`

    const currentBid = document.createElement("h3");
    const currentBidAmount = calculateTotalBidsAmount(postData.bids)
    currentBid.classList.add("mb-1" , "text-info")
    currentBid.textContent = `${currentBidAmount} credits`;

    const currentBidUsername = document.createElement("p");
    currentBidUsername.classList.add("me-3");
    currentBidUsername.textContent = `Latest bid: `
    //add function

    currentBidContainer.append(currentPrice, currentBid, currentBidUsername)

    const endsAt = document.createElement("h4");
    const endsAtDate = formatDate(postData.endsAt);
    endsAt.textContent = `Ends at: ${endsAtDate}`;
    endsAt.classList.add("mt-3", "text-danger");

    const yourBidContainer = document.createElement("div");
    yourBidContainer.classList.add("mt-3")

    const yourBidTitle = document.createElement("h4");
    yourBidTitle.textContent = `Place your Bid:`

    const bidForm = document.createElement("form");
    bidForm.classList.add("col-6", "d-flex");
    bidForm.setAttribute("role", "search");
    bidForm.innerHTML = `
        <input class="form-control me-2" type="search" aria-label="Search">
        <button class="btn btn-primary" type="submit">Bid</button>
    `;

    yourBidContainer.append(yourBidTitle, bidForm)

    productInfo.append(productTitle, productDescription, productTags, currentBidContainer, endsAt, yourBidContainer);


    //bid container
    const bidContainer = document.createElement("div");
    bidContainer.classList.add("col-12", "border", "p-3");
    
    const bidHistoryTitle = document.createElement("h3");
    bidHistoryTitle.textContent = "Bid history";

    const bidLine = document.createElement("div");
    bidLine.classList.add("col-4", "py-1", "bg-primary");

    bidContainer.append(bidHistoryTitle , bidLine);

    
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


    cardContainer.append(bidContainer)

    return container;
}















