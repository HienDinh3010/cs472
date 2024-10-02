"use strict";

// a - use Arrow Function
const computeSumOfSquares = (arr) => {
    return arr.map(number => Math.pow(number, 2)).reduce((sum, square) => sum + square, 0);
}

console.log("computeSumOfSquares([1, 2, 3]) = ", computeSumOfSquares([1, 2, 3])); // 14

const computeMultipleOfSquares = (arr) => {
    return arr.map(number => number * number).reduce((mul, square) => mul * square, 1);
}

console.log("computeMulOfSquares([1, 2]) = ", computeMultipleOfSquares([1, 2])) // 4

// b - Use Function Expression
const printOddNumbersOnly = function(arr) {
    arr.filter(number => number % 2 == 1).forEach(oddNumber => console.log(oddNumber));
}
console.log("Start print odd numbers:")
printOddNumbersOnly([1, 2, 3, 4, 5, 6]); 

const printEvenNumbersOnly = function(arr) {
    arr.filter(number => number % 2 == 0).forEach(evenNumber => console.log(evenNumber));
}

console.log("Start print even numbers:")
printEvenNumbersOnly([1 , 2 , 3, 4, 5, 6]);

// c - Use Function Declaration
function printFibo(n, a, b) {
    let fiboSequence = [];
    for (let i = 0; i < n; i++) {
        fiboSequence.push(a);
        [a, b] = [b, a + b];
    }
    console.log(fiboSequence.join(', '))
}

printFibo(6, 0, 1); 
printFibo(10, 0, 1); 

