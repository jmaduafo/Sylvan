export const timestamp = (timestamp) => {
    // Multiply by 1000 to get milliseconds; multiply by another 1000 to get seconds
    const date = new Date(timestamp * 1000);

    let formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

    if (+date.getFullYear() === +formattedDate.slice(-4)) {
        formattedDate = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    return formattedDate
}