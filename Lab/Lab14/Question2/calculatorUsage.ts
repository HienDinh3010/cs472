import { Calculator } from "./calculator";

const calculator = new Calculator();

console.log("Addition: 5 + 3 =", calculator.add(5, 3));
console.log("Subtraction: 10 - 4 =", calculator.subtract(10, 4));
console.log("Multiplication: 6 * 2 =", calculator.multiply(6, 2));
console.log("Division: 15 / 3 =", calculator.divide(15, 3));

try {
  console.log("Division by zero:", calculator.divide(10, 0));
} catch (error) {
  console.error("Error:", error.message);
}