export function formatDate(postData) {
    const date = new Date(postData);
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Ensure 24-hour format
        timeZone: "Europe/London", // Set the timezone to London
    };

    const dateFormatter = new Intl.DateTimeFormat("en-GB", options);
    const formattedDate = dateFormatter.format(date);
    return formattedDate; // Return the formatted date and time
}

