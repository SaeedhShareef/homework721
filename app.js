// start 40 cups
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
// end 40 cups
// start understanding programming terminology
// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea(prepareBlackTea,13);
// Only change code above this line

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);
// end understanding programming Terminology
// start avoiding mutations
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line

return fixedValue + 1
  // Only change code above this line
}
// end avoiding mutations
// start pass arguments
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (num) {
    return num + 1

    console.log(incrementer(1))

  // Only change code above this line
}
// end start arguments
// start refractor
// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];
 
// Change code below this line
function add(arr, bookName) {
  let newArr = [...arr]; 
 
  newArr.push(bookName);
  return newArr;
  // Change code above this line
}
 
// Change code below this line
function remove(arr, bookName) {
 
  let newArr = [...arr]; 
 
  if (newArr.indexOf(bookName) >= 0) {
   
 
    newArr.splice(newArr.indexOf(bookName), 1); 
 
    return newArr; 
  
    // Change code above this line
    }
}
 
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');
 
console.log(bookList);
// end refractor