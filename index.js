let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
const display = document.querySelector(".calculatorDisplay");
const numbers = document.querySelectorAll(".number");
const equals = document.querySelector(".equalsKey");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const clearBtn = document.querySelector(".clear");

clearBtn.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayValue = "";
  display.textContent = "0";
});

equals.addEventListener("click", () => {
  secondNumber = displayValue;
  if (secondNumber === "") {
    return null;
  } else {
    return (display.textContent = operate(
      parseFloat(firstNumber),
      operator,
      parseFloat(secondNumber)
    ));
  }
});

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    const key = e.target;
    const keyContent = key.textContent;
    display.textContent = displayValue + keyContent;
    displayValue = display.textContent;
  })
);

addBtn.addEventListener("click", () => {
  firstNumber = displayValue;
  operator = "+";
  displayValue = "";
  firstNumber = display.textContent;
});

subtractBtn.addEventListener("click", () => {
  firstNumber = displayValue;
  operator = "-";
  displayValue = "";
  firstNumber = display.textContent;
});

multiplyBtn.addEventListener("click", () => {
  firstNumber = displayValue;
  operator = "*";
  displayValue = "";
  firstNumber = display.textContent;
});

divideBtn.addEventListener("click", () => {
  firstNumber = displayValue;
  operator = "÷";
  displayValue = "";
  firstNumber = display.textContent;
});

function operate(n1, operator, n2) {
  if (operator === "+") {
    return add(n1, n2);
  } else if (operator === "-") {
    return subtract(n1, n2);
  } else if (operator === "*") {
    return multiply(n1, n2);
  } else if (operator === "÷") {
    if (n2 === 0) {
      return (display.textContent = "ERROR");
    }
    return divide(n1, n2);
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
