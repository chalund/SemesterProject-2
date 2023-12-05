export function postTemplate(postData) {
    const container = document.createElement("div");
    container.classList.add("row", "row-cols-1", "row-cols-md-3", "row-cols-lg-4" )

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-lg-3", "col-md-4", "my-3");

    const card = document.createElement("div");
    card.classList.add("card", "text-center", "p-2", "h-100", "card-hover", "bg-light");

    if (postData.media && postData.media.length > 0) {
        const firstImage = postData.media[0];

        const image = document.createElement("img");
        image.classList.add("card-img-top");
        image.src = firstImage;
        image.alt = "Post Image";
        image.style.maxHeight = "200px";
        card.append(image);
    } else {
        const defaultImage = document.createElement("img");
        defaultImage.classList.add("card-img-top");
        defaultImage.src = "../images/logo.png"; // Default image path when no image is present
        defaultImage.alt = "Default Image";
        defaultImage.style.maxHeight = "200px";
        card.append(defaultImage);
      }

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = postData.title;
    cardBody.append(cardTitle);

    // const description = document.createElement("p");
    // description.textContent = postData.description || 'No description available';
    // cardBody.append(description);

    const BidDiv = document.createElement("div");
    BidDiv.classList.add("row", "align-items-center");

    const colTextEnd = document.createElement("div");
    colTextEnd.classList.add("col", "text-end");
    const currentBid = document.createElement("p");
    currentBid.classList.add("mb-0");
    currentBid.textContent = "Current bid";
    colTextEnd.append(currentBid);
    BidDiv.append(colTextEnd);

    // const amount = document.createElement("div");
    // amount.classList.add("col", "text-start");
    // const bidAmount = document.createElement("h4");
    // bidAmount.classList.add("mb-0");
    // bidAmount.textContent = `$${postData.amount || '0'}`;
    // amount.append(bidAmount);
    // BidDiv.append(amount);

    // cardBody.append(BidDiv);

    const viewButton = document.createElement("a");
    viewButton.href = "/listing/product/index.html";
    viewButton.id = `${postData.id}`; // Set the ID based on your data
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

    cardBody.append(viewButton);
    cardBody.append(endsAt);

    card.append(cardBody);
    cardContainer.appendChild(card);

    viewButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevents the default behavior of the anchor tag
        const postId = postData.id;
        window.location.href = `/listing/product/index.html?id=${postId}`;
    });

    return cardContainer;
}





