let firstNumber = "";
let secondNumber = "";
let operator = "";
let displayValue = "";
let result = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equal");
const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayValue = "";
  display.textContent = "";
});

function clear0Division() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
  displayValue = "";
  display.textContent = "LMAO";
}

equals.addEventListener("click", () => {
  secondNumber = displayValue;
  result = operate(firstNumber, operator, secondNumber);
  if (
    firstNumber === "" ||
    secondNumber === "" ||
    operator === "" ||
    displayValue === ""
  ) {
    return;
  } else {
    return (display.textContent = result);
  }
});

operators.forEach((op) =>
  op.addEventListener("click", (e) => {
    const opKey = e.target.textContent;
    if (firstNumber === "") {
      firstNumber = displayValue;
    } else {
      secondNumber = displayValue;
      result = operate(firstNumber, operator, secondNumber);
      display.textContent = result;
      firstNumber = result;
      secondNumber = "";
    }

    operator = opKey;
    displayValue = "";
  })
);

numbers.forEach((number) =>
  number.addEventListener("click", (e) => {
    const key = e.target.textContent;
    displayValue += key;
    display.textContent = displayValue;
  })
);

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
  if (b === 0) {
    return clear0Division()
  }
  return a / b;
}
