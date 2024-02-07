var sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "1X", "2X"]
function shirtSize(aisle, shelf) {
    if (shelf == 1) {
        return sizes[0]
    } else if (shelf <= aisle - 2) {
        return sizes[1]
    } else if (shelf == - 1) {
        return sizes[2]
    } else if (shelf === aisle) {
        return sizes[3]
    } else if (shelf == aisle + 1) {
        return sizes[4]
    } else if (shelf == aisle + 2) {
        return sizes[5]
    } else if (shelf >= par + 3) {
        return sizes[6]
    }
}
            
console.log(shirtSize(5,4))
