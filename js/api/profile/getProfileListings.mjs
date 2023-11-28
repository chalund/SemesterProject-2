import { API_BASE_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";

const action = "/api/v1/auction/profiles";
const method = "get";

export async function getProfileListings(name) {
    const token = load("accessToken");
    const username = load("username")
    const getProfileListingUrl = `${API_BASE_URL}${action}/${username}/listings`; // Replace with your actual user info endpoint

    try {
        const response = await fetch(getProfileListingUrl, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`,
            },
        });
        const profileListings = await response.json();
        // console.log(profileListings)
        return profileListings;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export async function productCardListings() {
    try {
        const product = await getProfileListings()
        console.log(product)

    const cardImage = document.querySelector("#card-image")
    const cardTitle = document.querySelector("#card-title")
    const cardBid = document.querySelector("#card-bid")
    const cardEndTime = document.querySelector("#card-endTime")

    if (cardImage && cardTitle && cardBid && cardEndTime) {
       if (!product.image) {
        cardImage.src = "../images/logo.png"
        cardImage.alt = "logo"
       } else {
        cardImage.src = product.media
       }
    
    cardTitle.textContent = product.title
    
    if(cardEndTime === 0) {
        cardEndTime.textContent = product.updated
    } else {
        cardEndTime.textContent = product.endAt
    }


    }

    } catch (error) {
        console.error(error);
        // Handle errors as needed
    }
}
productCardListings()
