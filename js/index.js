// Add your Javascript work here

// Task 1: Create a basic Calculator

/* 

1. Start creating three prompts, the first two for the two numbers and the second one for the operation
2. Also declare another variable for the result.
3. Using conditional statement, check if the operation is addition, subtraction, division or multipilcation
4. Add the output to the result variable you created.
5. Console.log the result.

*/

//simple promt calculation
let num1, num2, result1;
let sysmbol;

num1 = parseInt(prompt("Enter the first number"));
num2 = parseInt(prompt("Enter the second number"));
sysmbol = prompt("Enter the sysmbol");
if (sysmbol == "+") {
  result1 = num1 + num2;
  alert("the addtion of " + num1 + "+" + num2 + "=" + " " + result1);
} else if (sysmbol == "-") {
  result1 = num1 - num2;
  alert("the subtraction of " + num1 + "-" + num2 + "=" + " " + result1);
} else if (sysmbol == "*") {
  result1 = num1 * num2;
  alert("the multiplication of " + num1 + "*" + num2 + "=" + " " + result1);
} else if (sysmbol == "/") {
  result1 = num1 / num2;
  alert("the Division of " + num1 + "/" + num2 + "=" + " " + result1);
} else if (sysmbol == "%") {
  result1 = num1 % num2;
  alert("the reminder of " + num1 + "%" + num2 + "=" + " " + result1);
} else if (sysmbol == "**") {
  result1 = num1 ** num2;
  alert("the power of " + num1 + "**" + num2 + "=" + " " + result1);
} else {
  alert("the operation are in correct");
}
