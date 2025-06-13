
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