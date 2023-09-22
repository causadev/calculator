let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
const clear = document.querySelector(".clear");
numbers.forEach((number) => number.addEventListener("click", appendNumbers));
operators.forEach((op) => op.addEventListener("click", setOperation));
equals.addEventListener("click", evaluate);
clear.addEventListener("click", clearDisplay);

function clearDisplay() {
  display.textContent = "0";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayValue = "";
}

function evaluate() {
  if (firstNumber === "") return;
  secondNumber = displayValue;
  display.textContent = operate(firstNumber, operator, secondNumber);
  firstNumber = "";
  displayValue = "";
}

function setOperation(e) {
  if (firstNumber !== "") evaluate();
  firstNumber = displayValue;
  operator = e.target.textContent;
  firstNumber = display.textContent;
  displayValue = "";
}

function appendNumbers(e) {
  if (displayValue === "0") {
    clearDisplay();
  }
  displayValue += e.target.textContent;
  display.textContent = displayValue;
}

function operate(n1, operator, n2) {
  n1 = Number(n1);
  n2 = Number(n2);
  if (operator === "+") {
    return add(n1, n2);
  } else if (operator === "-") {
    return subtract(n1, n2);
  } else if (operator === "x") {
    return multiply(n1, n2);
  } else if (operator === "÷") {
    if (n2 === 0) {
      return "STUPID";
    }
    return divide(n1, n2);
  } else {
    return null;
  }
}

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
