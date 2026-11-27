// every user input that originates in `prompt` command is always a string
// if i want to use the numeric value of the string, then i need to 
// CONVERT it to a number
// '3' => 3
// in javascript i can put the `+` sign before a string, and javascript 
// will try to convert it to a number
firstNumber = +prompt('please enter a number');
secondNumber = +prompt('please enter another number');

alert(firstNumber + secondNumber) // '4' + '6' = '46' , 4 + 6 = 10
