"use strict";

let libraryBooks = [
  { title: "The Road Ahead", author: "Bill Gates", ID: 1235 },
  { title: "Walter Isaacson", author: "Steve Jobs", ID: 4268 },
  { title: "The Road Ahead", author: "Bill Gates", ID: 4268 },
  { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", ID: 3257 }
];
console.log("libraryBooks", libraryBooks);
// 1. addBook
function addBook(title, author, ID) {
    const exist = libraryBooks.some(book => book.ID === ID);
    console.log(`Book ${title} with id ${ID} exist? ${exist}`)
    if (!exist) {
        const newBook = { title, author, ID };
        libraryBooks.push(newBook);
        return newBook;
    } else {
        console.log("Book is existed");
        return null;
    }
}


// 2. getTitles
function getTitles() {
    return libraryBooks
        .map(book => book.title)
        .sort((a, b) => a.localeCompare(b));
}
// 3. findBooks
function findBooks(keyword) {
  return libraryBooks
    .filter(book => book.title.toLowerCase().includes(keyword.toLowerCase()))
    .sort((a, b) => a.ID - b.ID);
}

// Add a new book
console.log(addBook("Tomorrow, and Tomorrow, and Tomorrow", "Gabrielle Zevin", 4567)); // Adds and returns the new book
console.log(addBook("The Road Ahead", "Bill Gates", 1235)); // Book already exists, returns null

// Get all titles, sorted alphabetically
console.log("Get all titles:" , getTitles()); 

// Find books with "The Road" in the title, sorted by ID
console.log(findBooks("The Road")); 