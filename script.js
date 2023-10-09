function calculateSum(event) {
  event.preventDefault();

  var num1Input = document.getElementById('num1');
  var num2Input = document.getElementById('num2');
  var resultDiv = document.getElementById('result');

  var num1 = Number(num1Input.value);
  var num2 = Number(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = 'Please enter valid numbers.';
  } else {
    var sum = num1 + num2;
    resultDiv.textContent = 'The sum is: ' + sum;
  }
}