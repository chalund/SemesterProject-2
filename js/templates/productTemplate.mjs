import { isLoggedIn } from "../handlers/buttons/userLoggedIn.mjs";
import { imageGallery } from "../handlers/imgGallery.mjs";
import { formatDate } from "../handlers/formatDate.mjs";
import { findLatestBidAmount, findLatestBidderName } from "../handlers/latestBidder.mjs";


export function productTemplate(postData) {
    const container = document.createElement("div")
    container.classList.add("container", "bg-light")

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("row"); 
    container.append(cardContainer);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("col-md-6", "col-lg-6", "d-flex","flex-column", "align-items-stretch", "mt-2");
    
    const imageContainerDiv = document.createElement("div");
    imageContainerDiv.classList.add("text-center", "align-items-stretch");
    
    const productImages = document.createElement("div");
    productImages.classList.add("room-gallery" , "d-flex", "flex-column");
    
    if (postData && postData.media && postData.media.length > 0) {
        const mainImage = document.createElement("img");
        mainImage.src = postData.media[0];
        mainImage.alt = "Main Product Image";
        mainImage.classList.add("gallery-highlight" , "flex-grow-1", "productImage")
        mainImage.style.width = "100%";
        mainImage.style.height = "300px"
        productImages.appendChild(mainImage);

    } else {
        const placeholderImage = document.createElement("img");
        placeholderImage.src = "../../images/noImage.jpg";
        placeholderImage.alt = "No Image Available";
        placeholderImage.classList.add("product-image");
        placeholderImage.style.width = "100%";
        placeholderImage.style.display = "block"; 
        placeholderImage.style.margin = "auto";
        productImages.appendChild(placeholderImage);
    }
    
    const productImageList = document.createElement("div");
    productImageList.classList.add("room-preview", "d-flex" , "justify-content-between", "mb-1");
    
    if (postData && postData.media && Array.isArray(postData.media)) {
        postData.media.forEach(mediaItem => {
            const image = document.createElement("img");
            image.src = mediaItem;
            image.alt = "Product Image";
            image.classList.add("product-image", "room-preview-img"); 
            image.style.maxHeight = "100px";
            image.style.maxWidth = "100px";
            productImageList.appendChild(image);
        });

        // Change width based on screen size
        window.addEventListener('resize', () => {
            const images = productImageList.querySelectorAll('img');
            if (window.innerWidth >= 768) { 
                images.forEach(img => {
                    img.style.maxWidth = '150px'; 
                });
            } else {
                images.forEach(img => {
                    img.style.maxWidth = '100px'; 
                });
            }
        });

        // Initial width check on page load
        if (window.innerWidth >= 768) {
            const images = productImageList.querySelectorAll('img');
            images.forEach(img => {
                img.style.maxWidth = '200px'; 
            });
        }
    }

    imageContainerDiv.appendChild(productImages);
    imageContainerDiv.appendChild(productImageList);
    imageContainer.appendChild(imageContainerDiv);
    
    cardContainer.appendChild(imageContainer);
  
    const productContainer = document.createElement("div");
    productContainer.classList.add("col-md-6", "col-lg-6", "d-flex", "align-items-center", "mt-3", "productInfo");
    cardContainer.append(productContainer);

    const productContentContainer = document.createElement("div");
    productContentContainer.classList.add("d-flex" ,"flex-colum" , "justify-center-between", "ms-3");
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

    const productTags = document.createElement("div");
    productTags.classList.add("d-flex", "flex-wrap");
    
    const tagsArray = postData.tags;
    
    const tagsTitle = document.createElement("p");
    tagsTitle.textContent = "Tags: ";
    tagsTitle.classList.add("mr-1");
    tagsTitle.style.textDecoration = 'underline'
    productTags.appendChild(tagsTitle);
    
    tagsArray.forEach(tag => {
        const tagElement = document.createElement("p");
        tagElement.classList.add("mx-2", "border", "border-primary", "px-3");
        tagElement.textContent = tag;
        productTags.appendChild(tagElement);
    });

    const currentBidContainer = document.createElement("div");
    currentBidContainer.classList.add("mt-4", "border", "px-2");

    const currentPrice = document.createElement("p");
    currentPrice.classList.add("mb-1");
    currentPrice.textContent = `Current Price:`;

    currentBidContainer.appendChild(currentPrice);

    const currentBidAmount = findLatestBidAmount(postData.bids);

    const latestBidder = findLatestBidderName(postData.bids);

    const endsAt = document.createElement("h4");
    const endsAtDate = formatDate(postData.endsAt);
    endsAt.textContent = `Ends at: ${endsAtDate}`;
    endsAt.classList.add("mt-3", "text-danger");


    const yourBidContainer = document.createElement("div");
    yourBidContainer.classList.add("mt-4");
    
    const yourBidTitle = document.createElement("h4");
    yourBidTitle.textContent = `Place your Bid:`;

    const bidForm = document.createElement("form");
    bidForm.id = "addBidForm";
    bidForm.classList.add("col-8", "d-flex", "addBidForm");
    bidForm.setAttribute("role", "search");

    const button = document.createElement("button");
    button.classList.add("btn", "btn-lg",  "btn-primary" , "bid-button", "custom-button");

    button.textContent = "Bid";
    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#bidModal");

    bidForm.appendChild(button);

    yourBidContainer.append(yourBidTitle, bidForm);
        
    productInfo.append(productTitle, productDescriptionTitle, productDescription, productTags, currentBidContainer, endsAt, yourBidContainer);

    const bidContainer = document.createElement("div");
    bidContainer.classList.add("col-12", "p-4" , "mt-5");
        
    const bidHistoryTitle = document.createElement("h3");
    bidHistoryTitle.textContent = "Bid history";

    const bidLine = document.createElement("div");
    bidLine.classList.add("col-md-8", "py-1", "bg-primary");

    bidContainer.append(bidHistoryTitle , bidLine);

    if (isLoggedIn()) {
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
        bidUsername.style.width = "155px"; 
    
        const bidAmount = document.createElement("p");
        bidAmount.classList.add("me-3");
        bidAmount.textContent = `$${bid.amount}`;
        bidAmount.style.width = "100px"; 
    
        bidEntry.appendChild(bidDate);
        bidEntry.appendChild(bidUsername);
        bidEntry.appendChild(bidAmount);
    
        bidContainer.appendChild(bidEntry);
        });

        if (latestBidder) {
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

    imageGallery();

    return container;
}