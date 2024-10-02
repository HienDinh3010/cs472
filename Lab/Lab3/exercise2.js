"use strict";

let user = { name: "John", years: 30 };

// Destructuring assignment
let { name, years: age, isAdmin = false } = user;

// alert(name);  
// alert(age);   
// alert(isAdmin); 
console.log(name);
console.log(age);
console.log(isAdmin);

