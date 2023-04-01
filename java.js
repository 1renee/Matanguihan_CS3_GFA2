const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');
const multiplyButton = document.getElementById('multiply');
const divideButton = document.getElementById('divide');
const remainderButton = document.getElementById('remainder');
const resultOutput = document.getElementById('result');
let result;

function helpme(){
    const num1 = Number(num1Input.value);
    const num2 = Number(num2Input.value);
    return [num1, num2];
}

addButton.addEventListener('click', function() {
    const [num1, num2] = helpme();
    const result = num1 + num2;
    resultOutput.textContent = result;
  });

  subtractButton.addEventListener('click', function() {
    const [num1, num2] = helpme();
    const result = num1 - num2;
    resultOutput.textContent = result;
  });

  multiplyButton.addEventListener('click', function() {
    const [num1, num2] = helpme();
    const result = num1 * num2;
    resultOutput.textContent = result;
  });

  divideButton.addEventListener('click', function() {
    const [num1, num2] = helpme();
    const result = num1 / num2;
    resultOutput.textContent = result;
  });

  remainderButton.addEventListener('click', function(){
    const [num1, num2] = helpme();
    const result = num1 % num2;
    resultOutput.textContent = result;
  });

helpme();