var aisle_num = ["Aisle 1", "Aisle 2", "Aisle 3", "Aisle 4", "Aisle 5", "Aisle 6", "Aisle 7"]
function productLocation(sku) {
    if (sku == 1) {
        return aisle_num[0]
    } else if (sku == 2) {
        return aisle_num[1]
    } else if (sku == 3) {
        return aisle_num[2]
    } else if (sku == 4) {
        return aisle_num[3]
    } else if (sku == 5) {
        return aisle_num[4]
    } else if (sku == 6) {
        return aisle_num[5]
    } else if (sku == 7) {
        return aisle_num[6]
    }
}
            
console.log(productLocation(5))
