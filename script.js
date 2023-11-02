let displayValue = "";

function updateDisplay() {
	document.getElementById("display").value = displayValue;
}

function appendToDisplay(value) {
	displayValue += value;
	updateDisplay();
}

function clearDisplay() {
	displayValue = "";
	updateDisplay();
}

function deleteCharacter() {
	displayValue = displayValue.slice(0, -1);
	updateDisplay();
}

function calculateResult() {
	try {
			displayValue = eval(displayValue);
			updateDisplay();
	} catch (error) {
			displayValue = "Error";
			updateDisplay();
	}
}