// Initialize inventory object with items and their initial quantities
let inventory = new Map([
    ['eggs', 5],
    ['bread', 2],
    ['potatoe', 3],
    ['pork', 10],
    ['chicken', 8],
    ['beef', 20],
    ['plantin', 1],
    ['cilantro', 30]
]);

// Function to record a purchase
function recordPurchase(item, quantity) {
    if (inventory.has(item)) {
        let currentQuantity = inventory.get(item);
        inventory.set(item, currentQuantity + quantity);
        console.log(`Purchase recorded: ${quantity} of ${item}`);
    } else {
        inventory.set(item, quantity);
        console.log(`New item added: ${item} (${quantity})`);
    }
  
}
console.log(recordPurchase('cilantro', 2));


// Function to record a sale
function recordSale(item, quantity) {
    if (inventory.has(item)) {
        let currentQuantity = inventory.get(item);
        if (currentQuantity >= quantity) {
            inventory.set(item, currentQuantity - quantity);
            console.log(`Sale recorded: ${quantity} of ${item}`);
        } else {
            console.log(`Insufficient quantity of ${item} available for sale.`);
        }
    } else {
        console.log(`Item ${item} not found in inventory.`);
    }
}

// Display current inventory
function displayInventory() {
    console.log("Current Inventory:");
    inventory.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    });
}

