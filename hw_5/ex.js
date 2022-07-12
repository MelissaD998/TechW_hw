// 1)	Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.

function multiplyFive(number) {
  return number * 5;
}
console.log(multiplyFive(4));


// 2)	Define an arrow function divideByTwo which accepts a number and returns that number divided by 2.

let divideByTwo = (x) => x / 2;
console.log(divideByTwo(12));

// 3)	Create a function addS that accepts one input and adds an "s" to it.

function addS(){
 let word = prompt("Insert a word");
 return alert(word + "s");
}
console.log(addS());


// 4)	Create a function called map that takes two inputs:
// an array of numbers (a list of numbers)
// a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
//  Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.
//  Ex. console.log(map([1, 2, 3], addTwo)); should output [ 3, 4, 5 ] (create function addTwo and test pass it as a callback)

function addTwo(number) {
  return number + 2;
}

function map(array, addTwo) {
  return array.map(item => addTwo(item));
}

console.log(map([1, 2, 3], addTwo));



// 5)	Write an arrow function that expects an array of integers and returns the sum of the elements of the array.
//  Use the built-in method reduce on the array argument.

let arr = [1, 2, 3];
let sum = arr.reduce((a,b) => a + b);

console.log(sum);






