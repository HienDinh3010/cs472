import { get_items, add_item, update_item_title_by_id, delete_item_by_id, get_item_title_by_id } from './data.js';

// Test get_items
console.log("Initial data:", get_items());

// Test add_item
console.log("Adding item 1:", add_item({ id: 1, title: "Item 1" }));
console.log("Adding item 2:", add_item({ id: 2, title: "Item 2" }));
console.log("Adding duplicate item:", add_item({ id: 1, title: "Duplicate Item" }));
console.log("Data after adding items:", get_items());

// Test update_item_title_by_id
console.log("Updating item 1:", update_item_title_by_id(1, "Updated Item 1"));
console.log("Updating non-existent item:", update_item_title_by_id(3, "Non-existent Item"));
console.log("Data after updating:", get_items());

// Test get_item_title_by_id
console.log("Title of item 1:", get_item_title_by_id(1));
console.log("Title of non-existent item:", get_item_title_by_id(3));

// Test delete_item_by_id
console.log("Deleting item 2:", delete_item_by_id(2));
console.log("Deleting non-existent item:", delete_item_by_id(3));
console.log("Data after deleting:", get_items());