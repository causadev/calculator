let operator = "";
let firstNumber = "";
let secondNumber = "";
let storedNumber = "";
let displayValue = "";
const displayOuput = document.querySelector(".display");
const clearBtn = document.querySelector(".clearBtn");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const numbersBtn = document.querySelectorAll(".number");

numbersBtn.forEach((numbers) =>
  numbers.addEventListener("click", displayResult)
);

function displayResult(e) {
  displayValue += e.target.textContent;
  displayOuput.textContent = displayValue;
}

function operate(operate, num1, num2) {}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log(add(1, 1));
console.log(subtract(2, 1));
console.log(multiply(2, 2));
console.log(divide(4, 4));
