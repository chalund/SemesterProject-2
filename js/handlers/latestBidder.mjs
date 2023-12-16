export function findLatestValueByKey(array, key) {
    if (array.length === 0) {
        return null;
    }
    const sortedArray = array.sort((a, b) => new Date(b.created) - new Date(a.created));
    const latestValue = sortedArray[0][key];
    return latestValue;
}

export function findLatestBidderName(bids) {
    return findLatestValueByKey(bids, 'bidderName');
}

export function findLatestBidAmount(bids) {
    return findLatestValueByKey(bids, 'amount');
}