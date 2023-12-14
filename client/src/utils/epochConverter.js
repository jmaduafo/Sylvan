export const epoch = (time) => {
    // Always use const with new Date
    const date = new Date()
    const myDate = new Date(time);
    
    let fullDay; 

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec']

    if (myDate.getFullYear() === date.getFullYear()) {
        fullDay = months[myDate.getMonth()] + ' ' + myDate.getDate()
    } else {
        fullDay = months[myDate.getMonth()] + ' ' + myDate.getDate() + ' ' + myDate.getFullYear()
    }

    return fullDay
}