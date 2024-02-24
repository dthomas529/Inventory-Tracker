// Initialize inventory object with items and their initial quantities
let inventory = new Map([
    ['item1', 50],
    ['item2', 20],
    ['item3', 100],
    ['item4', 30]
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

