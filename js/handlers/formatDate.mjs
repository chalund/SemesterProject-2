export function formatDate(postData) {
    const date = new Date(postData);
    const options = {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, 
        timeZone: "Europe/London", 
    };

    const dateFormatter = new Intl.DateTimeFormat("en-GB", options);
    const formattedDate = dateFormatter.format(date);
    return formattedDate; 
}

