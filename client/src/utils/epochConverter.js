export const epoch = (time) => {
    const date = new Date()
    var d = Date(time * 1000) 
    
    let fullDay; 

    if (+d.substring(11, 15) === date.getFullYear()) {
        fullDay = d.substring(4, 10)
    } else {
        fullDay = d.substring(4, 15)
    }

    return fullDay
}