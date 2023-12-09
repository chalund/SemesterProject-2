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

import { isLoggedIn } from "../handlers/buttons/userLoggedIn.mjs";
import { imageGallery } from "../handlers/imgGallery.mjs";


export function productTemplate(postData) {
    const container = document.createElement("div")
    container.classList.add("container", "my-0", "my-sm-5", "border", "bg-light", "mt-3")

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("row"); // Ensure columns have equal height
    container.append(cardContainer);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("col-lg-6", "d-flex", "flex-column", "align-items-stretch");
    
    const imageContainerDiv = document.createElement("div");
    imageContainerDiv.classList.add("text-center", "align-items-stretch");
    

    const productImages = document.createElement("div");
    productImages.classList.add("room-gallery" , "d-flex", "flex-column");
    
    // Assuming the first image is the main image
    if (postData && postData.media && postData.media.length > 0) {
        const mainImage = document.createElement("img");
        mainImage.src = postData.media[0];
        mainImage.alt = "Main Product Image";
        mainImage.classList.add("gallery-highlight" , "flex-grow-1")
        mainImage.style.width = "100%";
        mainImage.style.height = "300px"
        productImages.appendChild(mainImage);
    } else {
        const placeholderImage = document.createElement("img");
        placeholderImage.src = "/images/noImage.jpg"; // Replace with your placeholder image URL
        placeholderImage.alt = "No Image Available";
        placeholderImage.classList.add("product-image");
        placeholderImage.style.width = "100%";
        placeholderImage.style.display = "block"; // Ensure it takes full width
        placeholderImage.style.margin = "auto"; // Center the image horizontally
        productImages.appendChild(placeholderImage);
    }
    
    const productImageList = document.createElement("div");
    productImageList.classList.add("room-preview", "d-flex" , "justify-content-between");
    
    if (postData && postData.media && Array.isArray(postData.media)) {
        const mediaSlice = postData.media.slice(1, 4); // Slice the media array if it has at least 4 elements
        mediaSlice.forEach(mediaItem => {
            const image = document.createElement("img");
            image.src = mediaItem;
            image.alt = "Product Image";
            image.classList.add("product-image", "room-preview-img"); // Add new class for specific styling
            image.style.height = "100px";
            productImageList.appendChild(image);
        });
    }

    
    imageContainerDiv.appendChild(productImages);
    imageContainerDiv.appendChild(productImageList);
    imageContainer.appendChild(imageContainerDiv);
    
    // Append the image container to the cardContainer or your desired location in the DOM
    cardContainer.appendChild(imageContainer);
          
    //right side of container info content
    const productContainer = document.createElement("div");
    productContainer.classList.add("col-lg-6", "d-flex", "justify-content-center", "align-items-center");
    cardContainer.append(productContainer);


    const productContentContainer = document.createElement("div");
    productContentContainer.classList.add("border", "d-flex" ,"flex-colum" , "justify-center-between");
    productContainer.append(productContentContainer)

    const productInfo = document.createElement("div")
    productInfo.classList.add("p-2")
    productContentContainer.append(productInfo)

    const sellerInfo = document.createElement("div")
    sellerInfo.classList.add("mb-3")
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

    const productDescriptionTitle = document.createElement("p");
    productDescriptionTitle.textContent = 'Description of product:';
    productDescriptionTitle.style.textDecoration = 'underline';

    const productDescription = document.createElement("p");
    productDescription.textContent = postData.description;
    productDescription.style.fontWeight = 'bold';

    //tags
    const productTags = document.createElement("div");
    productTags.classList.add("d-flex", "flex-wrap");
    
    const tagsArray = postData.tags;
    
    const tagsTitle = document.createElement("p");
    tagsTitle.textContent = "Tags: ";
    tagsTitle.classList.add("mr-2");
    tagsTitle.style.textDecoration = 'underline'
    productTags.appendChild(tagsTitle);
    
    tagsArray.forEach(tag => {
        const tagElement = document.createElement("p");
        tagElement.classList.add("mx-2", "border", "border-primary", "px-3");
        tagElement.textContent = tag;
        productTags.appendChild(tagElement);
    });

    const currentBidContainer = document.createElement("div"); 
    currentBidContainer.classList.add("mt-4" , "border", "px-2")

    const currentPrice = document.createElement("p");
    currentPrice.classList.add = ("mb-1")
    currentPrice.textContent = `Current Price:`

    currentBidContainer.append(currentPrice)

  

    const currentBidAmount = calculateTotalBidsAmount(postData.bids);

    // const currentBid = document.createElement("h3");
    // const currentBidAmount = calculateTotalBidsAmount(postData.bids)
    // currentBid.classList.add("mb-1" , "text-info")
    // currentBid.textContent = `${currentBidAmount} credits`;
    const latestBidder = findLatestBidder(postData.bids);
   

   
  



    const endsAt = document.createElement("h4");
    const endsAtDate = formatDate(postData.endsAt);
    endsAt.textContent = `Ends at: ${endsAtDate}`;
    endsAt.classList.add("mt-3", "text-danger");

    const yourBidContainer = document.createElement("div");
    yourBidContainer.classList.add("mt-3");
    
    const yourBidTitle = document.createElement("h4");
    yourBidTitle.textContent = `Place your Bid:`;
    
    // Creating form elements

const bidForm = document.createElement("form");
bidForm.id = "addBidForm"; // Set form ID
bidForm.classList.add("col-8", "d-flex", "addBidForm");
bidForm.setAttribute("role", "search");

// const input = document.createElement("input");
// input.classList.add("form-control", "me-2", "bidSearch");
// input.setAttribute("type", "search");
// input.setAttribute("aria-label", "Search");

const button = document.createElement("button");
button.classList.add("btn", "btn-primary" , "bid-button");

button.textContent = "Bid";
button.setAttribute("data-bs-toggle", "modal");
button.setAttribute("data-bs-target", "#bidModal");

// Appending input and button to the form
// bidForm.appendChild(input);
bidForm.appendChild(button);

    
    // Appending the bid form to the yourBidContainer
    yourBidContainer.append(yourBidTitle, bidForm);
    
    // Appending yourBidContainer to the productInfo
    productInfo.append(productTitle, productDescriptionTitle, productDescription, productTags, currentBidContainer, endsAt, yourBidContainer);


    //bid container
    const bidContainer = document.createElement("div");
    bidContainer.classList.add("col-12", "border", "p-3");
    
    const bidHistoryTitle = document.createElement("h3");
    bidHistoryTitle.textContent = "Bid history";

    const bidLine = document.createElement("div");
    bidLine.classList.add("col-md-8", "py-1", "bg-primary");

    bidContainer.append(bidHistoryTitle , bidLine);

        // Check if user is logged in
        if (isLoggedIn()) {
            // Loop through bids and add bid entries to the bid container
            postData.bids.forEach(bid => {
                const bidEntry = document.createElement("div");
                bidEntry.classList.add("d-flex", "justify-content-start", "align-items-center", "mb-1");
                
                const bidDate = document.createElement("p");
                const bidDateCreated = formatDate(bid.created);
                bidDate.classList.add("me-3");
                bidDate.textContent = `${bidDateCreated}`;
    
                const bidUsername = document.createElement("p");
                bidUsername.classList.add("me-3", "mt-1");
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

            if (latestBidder) {
                

                  // Display current bid amount
            const currentBid = document.createElement("h3");
            currentBid.classList.add("mb-1", "text-info");
            currentBid.textContent = `${currentBidAmount} credits`;
            currentBidContainer.appendChild(currentBid);
            
                const currentBidUsername = document.createElement("p");
                currentBidUsername.classList.add("me-3");
                currentBidUsername.textContent = `Latest bid: ${latestBidder}`;
                currentBidContainer.appendChild(currentBidUsername);
            }
    
          
        } else {
            // If user is not logged in, show a message
            const currentBid = document.createElement("h3");
            currentBid.classList.add("mb-1", "text-info");
            currentBid.textContent = "Log in to see Bids";
            currentBidContainer.appendChild(currentBid);

            const notLoggedInMessage = document.createElement("h3");
            notLoggedInMessage.classList.add("mb-1", "text-info");
            notLoggedInMessage.textContent = "Log in to see Bids";
            bidContainer.appendChild(notLoggedInMessage);
        }


    

    
    cardContainer.append(bidContainer)

    document.body.appendChild(container);

    // Call imageGallery after the product template content is added to the DOM
    imageGallery();

    
    return container;
}