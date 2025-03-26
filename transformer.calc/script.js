document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();   calculate('add'); // you can adjust or add logic to choose operations dynamically
}
);
function calculate(operation) {
   let num1 = parseFloat(document.getElementById('num1').value);
   let num2 = parseFloat(document.getElementById('num2').value);
   let result;
   if(isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
    }

   if(operation === 'add') result = num1 + num2;
   else if(operation === 'subtract') result = num1 - num2;
   else if(operation === 'multiply') result = num1 * num2;
   else if(operation === 'divide') result = num1 / num2;


   document.getElementById('result').innerText = 'Energon Result: ' + result;
}

