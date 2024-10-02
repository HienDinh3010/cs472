// data.js
let data = [];

export function get_items() {
    return data;
}

export function add_item(new_item) {
    // Check if the item with the same id already exists
    const itemExists = data.some(item => item.id === new_item.id);
    
    if (!itemExists) {
        data.push(new_item);
        return true; // Item added successfully
    } 
    return false; // Item not added (ID already exists)
}

export function update_item_title_by_id(id, new_title) {
    const item = data.find(item => item.id === id);
    
    if (item) {
        item.title = new_title; // Update title
        return true; // Item updated successfully
    }
    return false; // Item not found
}

export function delete_item_by_id(id) {
    const index = data.findIndex(item => item.id === id);
    
    if (index !== -1) {
        data.splice(index, 1); // Delete the item
        return true; // Item deleted successfully
    }
    return false; // Item not found
}

export function get_item_title_by_id(id) {
    const item = data.find(item => item.id === id);
    
    if (item) {
        return item.title; // Return the title if item exists
    }
    return null; // Item not found
}
