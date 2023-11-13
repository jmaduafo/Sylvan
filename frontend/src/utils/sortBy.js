export function titleAscending(array) {
    if (array && array.length) {
        array.sort((a, b) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })
    }
    
}  

export function titleDescending(array) {
    if (array && array.length) {
        array.sort((a, b) => {
            if(a.name > b.name) { return -1; }
            if(a.name < b.name) { return 1; }
            return 0;
        })
    }
}   

export function dateAscending(array) {
    array.sort(function(a,b){
        return new Date(a.createdAt) - new Date(b.createdAt);
    });
}   

export function dateDescending(array) {
    array.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
}  

export function priceAscending(array) {
    if (array && array.length) {
        array.sort(function(a, b) {
            return parseFloat(a.price) - parseFloat(b.price);
        });
     }
    
}   

export function priceDescending(array) {
    if (array && array.length) { 
        array.sort(function(a, b) {
            return parseFloat(b.price) - parseFloat(a.price);
        });
    }
    
}   