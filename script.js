let displayValue = "";
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;

function updateDisplay() {
	document.getElementById("display").value = displayValue;
}

function appendToDisplay(value) {
	displayValue += value;
	updateDisplay();
}

function clearDisplay() {
	displayValue = "";
  firstOperand = "";
  secondOperand = "";
  currentOperation = null;
	updateDisplay();
}

function deleteCharacter() {
	displayValue = displayValue.slice(0, -1);
	updateDisplay();
}

function setOperation(operator) {
  // ex: 5*8+3 -> once the + is encountered, want to evaluate the 5*8 first
  if (currentOperation !== null) {
    evaluateExpression();
  }
  firstOperand = displayValue;
  currentOperation = operator;
  displayValue = "";
}

function roundResult(num) {
  return Math.round(num * 100000) / 100000;
}

function evaluateExpression() {
  if (currentOperation === null){
    return;
  }
  
  secondOperand = displayValue;
  if (currentOperation === '÷' && secondOperand === '0') {
    alert("You can't divide by 0!");
    return;
  }

  displayValue = roundResult(operate(currentOperation, firstOperand, secondOperand));
  updateDisplay();
  currentOperation = null;
}

function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case '+':
      return (a+b);
    case '-':
      return (a-b);
    case '×':
      return (a*b);
    case '÷':
      if (b === 0) return null
      else return (a/b);
    default:
      return null
  }
}