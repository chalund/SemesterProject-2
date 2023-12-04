export function postTemplateTest(postData) {
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
    const postCreatedDate = new Date(postData.created); 
    const formattedDate1 = postCreatedDate.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
    postCreated.textContent = `Created: ${formattedDate1}`;
    postCreated.classList.add("mt-3", "text-primary") // Set the formatted date
    productContainerDiv.appendChild(postCreated)

    const productTitle = document.createElement("h1");
    productTitle.textContent = postData.title;
    productInfoDiv.appendChild(productTitle);

    const currentBid = document.createElement("h3");
    currentBid.classList.add("my-3");
    currentBid.textContent = `Current bid $${postData.currentBid}`;
    productInfoDiv.appendChild(currentBid);

    const productDescription = document.createElement("p");
    productDescription.textContent = postData.description;
    productInfoDiv.appendChild(productDescription);

    productContainerDiv.appendChild(productInfoDiv);

    const productTimeDiv = document.createElement("div");
    productTimeDiv.classList.add("product-time", "bg-light", "p-3");

    const timeLeftTitle = document.createElement("h4");
    timeLeftTitle.textContent = "Time left";
    productTimeDiv.appendChild(timeLeftTitle);

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
    productContainerDiv.appendChild(endsAt)

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
    bidLine.classList.add("col-4", "py-1",  "bg-primary")
    bidContainer.append(bidLine)


    cardContainer.append(bidContainer)







    container.append(cardContainer)

    return container;
}







