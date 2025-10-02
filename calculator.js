// Arithmetic functions
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  // simple guard to avoid Infinity
  if (number2 === 0) return 'Cannot divide by zero';
  return number1 / number2;
}

// Helpers to read inputs and display result
function getInputs() {
  const number1 = parseFloat(document.getElementById('number1').value) || 0;
  const number2 = parseFloat(document.getElementById('number2').value) || 0;
  return { number1, number2 };
}

function showResult(value) {
  document.getElementById('calculation-result').textContent = value;
}

// Event listeners
document.getElementById('add').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  showResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  showResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  showResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', function () {
  const { number1, number2 } = getInputs();
  showResult(divide(number1, number2));
});
