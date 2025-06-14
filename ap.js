
/*//  js-problem-solving-practice assignment-28
// __________________________________________________________________________

// ✅ Question 1
// sayHello() → shows "Hello World!" in console.
// showMessage(message) → takes one argument and shows it in console.
// doubleNumber(num) → returns double the number.
// subtractTen(num) → returns the number minus 10.

function sayHello() {
  console.log('Hello World!');
}

function showMessage(message) {
  console.log(message);
}

function doubleNumber(num) {
  return num * 2;
}

function subtractTen(num) {
  return num - 10;
}

sayHello();
showMessage('Welcome to JS practice!');
console.log('Double of 5:', doubleNumber(5));
console.log('20 minus 10:', subtractTen(20));

// __________________________________________________________________________

// ✅ Question 2
// showMessage(message) → takes one argument and shows it in console.
// doubleNumber(num) → returns double the number.

function showMessageAgain(message) {
  console.log(message);
}

function doubleNumberAgain(num) {
  console.log(num * 2);
}

showMessageAgain('This is another message.');
doubleNumberAgain(4);
doubleNumberAgain(100);
doubleNumberAgain(200);
doubleNumberAgain(55);

// __________________________________________________________________________

// ✅ Question 3
// show number after subtracting 10 in console.

function negativeNumber(num) {
  console.log(num - 10);
}

negativeNumber(50);
negativeNumber(20);

// __________________________________________________________________________

// ✅ Question 4
// checkAge(age) → if age is 18 or more, show "You are an adult" else "You are a minor".

function checkAge(age) {
  if (age >= 18) {
    console.log('You are an adult');
  } else {
    console.log('You are a minor');
  }
}

const age = Number(prompt('Enter your age:'));
checkAge(age);

// __________________________________________________________________________

// ✅ Question 5
// multiplyNumbers(a, b) → returns the multiplication of a and b.

function multiplyNumbers(a, b) {
  console.log('a:', a);
  console.log('b:', b);
  console.log('Product:', a * b);
}

multiplyNumbers(4, 5);

// __________________________________________________________________________

// ✅ Question 6
// call function inside function

function greetUser(name) {
  console.log('Hi', name);
}

function findFriend(friendName) {
  if (friendName === 'Muhammad' || friendName === 'ahmed') {
    greetUser(friendName);
  } else {
    console.log('Invalid friend Name');
  }
}

findFriend('ahmed');

// __________________________________________________________________________

// ✅ Question 7
// greetTeacher and findTeacher

function greetTeacher(teacherName) {
  console.log('Hello', teacherName);
}

function findTeacher(teacherName) {
  if (teacherName === 'Shahzad' || teacherName === 'Ali') {
    greetTeacher(teacherName);
  } else {
    console.log('Teacher not found');
  }
}

findTeacher('Shahza'); // Try 'Shahzad' to see positive result

// __________________________________________________________________________

// ✅ Question 8
// sayGoodbye and checkPerson

function sayGoodbye(personName) {
  console.log('Goodbye', personName);
}

function checkPerson(name) {
  if (name === 'John' || name === 'Sara') {
    sayGoodbye(name);
  } else {
    console.log('Unknown person');
  }
}

const personName = prompt('Enter person name:');
checkPerson(personName);

// __________________________________________________________________________

// ✅ Question 9
// welcomeGuest and checkGuest

function welcomeGuest(guestName) {
  console.log('Welcome', guestName);
}

function checkGuest(name) {
  if (name === 'Ali' || name === 'Ayesha') {
    welcomeGuest(name);
  } else {
    console.log('Guest not invited');
  }
}

const guestName = prompt('Enter guest name:');
checkGuest(guestName);

// __________________________________________________________________________

// ✅ Question 10
// sayCongrats and checkWinner — FIXED condition!

function sayCongrats(name) {
  console.log('Congratulations', name);
}

function checkWinner(name) {
  if (name === 'Usman' || name === 'Zainab') {
    sayCongrats(name);
  } else {
    console.log('Not a winner');
  }
}

const winnerName = prompt('Enter winner name:');
checkWinner(winnerName);

// __________________________________________________________________________
*/
// ques no 11 
// **Write a function sayMorning(name) that logs "Good Morning" and the name.
// Then, write a function checkMorningPerson that checks if the name is "Ali" or "Fatima".
// If yes, call sayMorning. If not, log "Not a morning person".
//  ans 
/*function sayMorning(name){console.log('Good Morning',name)}

function checkMorningPerson(name){if(name === 'Ali' || name === 'Fatima')
{sayMorning(name)}
else{console.log('Not a morning persom')}
}
let enterName = prompt('enter morning person name');
checkMorningPerson(enterName)*/
// _____________________________________________________________________________
// ques no 12
// *Create a function wishGoodNight(name) that logs "Good Night" and the name.
// Then, write a function checkNightPerson that checks if the name is "Ayesha" or "Usman".
// If yes, call wishGoodNight. If not, log "Not a night person".
// ans 
// function wishGoodNight(name){console.log('Good Night', name)}

// function checkNightPerson(name){if(name === 'Ayesha' || name === 'Usman')
// {wishGoodNight(name)}
// else{console.log('not a night person')}
// }

// let person = prompt('enter person name')
// checkNightPerson(person)
// ___________________________________________________________________________________
// ques no 13
// return concept
// ans
// function sumValue(num1,num2){var addValue = num1 + num2;
//     return addValue
// }
// let result = 100 + sumValue(4,8);

// console.log(result)
// ___________________________________________________________________________
// ques no 14
// Description:
// Write a function subtractValue that takes two numbers and returns their 
// difference.
// Then add 50 to the returned result and log it.
// ans 
// function subtractValue(num2,num1){var calculation = num2-num1;
//     return calculation
// }
// var result = 50 + subtractValue(5,4);
// console.log(result)
// _____________________________________________________________________________________
// ques no 15
// Write a function multiplyValue that takes two numbers and returns 
// their product.
// Then subtract 10 from the result and log it.

// ans 
// function multiplyValue(num1,num2){let product = num1 * num2;
//     return product;
// }
// let result = multiplyValue(3,4);
// let result2 = result - 10;
// console.log(result)
// console.log(result2)
// ____________________________________________________________________________________
// ques no 16 
// return name
// ans 
// function showFullName(fName,lName){var name = fName + ' '+ lName;
//   return name;
// }
// var renderName = showFullName('Muhammad','Ahmed');
// console.log(renderName);
// _______________________________________________________________________________________
// ques no 17
// 
// ans 
// function handleSquareRoot(num){return num * num}

// function handleEquation(a,b){console.log('a',a);
//   console.log('b',b);
//   var eq = handleSquareRoot(a) -(2*a*b) + handleSquareRoot(b);
//   console.log(eq)
// }
// handleEquation(6,3)
// ______________________________________________________________________________________
// ques no 18
// :
// Write a function that takes a number and returns whether it is even or odd.
// ans 
// let number = Number(prompt('enter a number'));
// function check(number){if(number % 2 === 0){console.log('Number is even')}
// else{console.log('Number is odd')}}
// check(number);
// _______________________________________________________________________________
// ques no 19
// 
// Write a function that takes a number and returns its square.
// ans 
// function squareCreator(number){let output= number * number;
//   return output;
//  }
// let number = Number(prompt('enter number'));
// let result =  squareCreator(number);
// console.log(result);
// _____________________________________________________________________________________
// ques no 20
// Create a function greetUser(name) that takes a name as an argument and prints:
// "Hello, [name]!"
// Call it with different names to check.
// ans 
// let enterUser = prompt('enter user name');
//     enterUser = enterUser.toUpperCase();
// function greetUser(enterName){console.log('Hello',enterUser)}
// greetUser(enterUser)
// _______________________________________________________________________________________
// ques no 21
//  Add Two Numbers
// Write a function addNumbers(a, b) that returns the sum of two numbers.
// Call it with different values and print the result.
// ans 
// let a = Number(prompt('enter number 1'));
// let b = Number(prompt('enter number 2'));
// function addNumbers(a,b){let sum = a + b;
//   return sum;
// }
//  let bc =  addNumbers(a,b);
//  console.log(bc)
  // ______________________________________________________________________________
  // ques no 22 
  // Check Even or Odd
// Write a function isEven(num) that checks if a number is even or odd.
// If even, return "Even"; if odd, return "Odd".
// ans 
// let num = Number(prompt('enter number'))
// function isEven(num){if(num % 2 === 0){console.log('Even')}
// else{console.log('Odd')}}
// isEven(num)
// ___________________________________________________________________________________
// ques no 23
//  Convert Minutes to Seconds
// Create a function minutesToSeconds(minutes) that converts minutes to seconds and returns the value.
// Call it with different minutes.
// ans 
let minutes = Number(prompt('enter minutes'));
  function minutesToSeconds(minutes){let result = minutes * 60;
  return result;
  }
  let output = minutesToSeconds(minutes);
  console.log(output)
// ________________________________________________________________________________________
// ques no 24 
// Find the Larger Number
// Create a function findLarger(a, b) that returns the larger of two numbers.
// ans 
// let a = Number(prompt('enter number one'));
// let b = Number(prompt('enter number 2'));
// function findLarger(a,b){if(a > b){console.log(a)}
// else if(b > a){console.log(b)}
// else{console.log('both numbers are equal')}}
// findLarger(a,b)
// _____________________________________________________________________________________
// ques no 25
//  Square a Number
// Write a function square(num) that returns the square of a number.
// ans 
// let num = parseFloat(prompt('enter number'));
// function square(num){let square = num * num;
//   return square;
// }
// let result = square(num);
// console.log(result);
// ______________________________________________________________________________
// ques no 26 
// Age in Days
// Write a function ageInDays(age) that takes age in years and returns age 
// in days (assume 1 year = 365 days).
// ans 
// let age = parseFloat(prompt('ener your age in years'));
// function ageInDays(age){let result = age * 365;
//   return result;
// }
// let output = ageInDays(age);
// console.log(output + ' ' + 'days');
// ___________________________________________________________________________________
// ques no 27
// Repeat a String
// Create a function repeatString(str, times) that repeats a string the 
// given number of times and returns it.
// ans 
// Function to repeat a string a given number of times
function repeatString(str, times) {
  // Create a variable to store the final repeated string
  let result = "";

  // Use a for loop to repeat the string 'times' times
  for (let i = 0; i < times; i++) {
    result += str; // Add the string to the result each time
  }

  // Return the final repeated string
  return result;
}

// Example: Call the function and print the result
console.log(repeatString("Hello ", 3)); // Output: Hello Hello Hello 
console.log(repeatString("JS", 5));     // Output: JSJSJSJSJS

// _______________________________________________________________________________
// ques no 28
// Calculate Area of Rectangle
// Write a function areaOfRectangle(width, height) that returns the area.
// ans 
// let width = Number(prompt('enter width'));
// let height = Number(prompt('enter height'));
// function areaOfRectangle(width,height){let area = width * height;
//   return area;
// }
//  let result = areaOfRectangle(width,height);
//  console.log(result);
// ______________________________________________________________________________________
// ques no 29
//  Get First Character
// Create a function getFirstChar(str) that returns the first character of 
// a string.
// ans 
// let str = prompt('etner string');
// function getFirstChar(str){ let result = str.charAt();
//   return result;
// }
// let output = getFirstChar(str);
//    output = output.toUpperCase();
// console.log(output);
