// Write a function called myAlphabetLength which console.logs the length of the array function getLength() {…}  getLength();
// Within the function also use an if-conditional statement that checks if the number of items within the array are less than 4


let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

function myAlphabetLength() {
  let getLenght = myAlphabet.length;
  console.log(getLenght);

  if (myAlphabet.length < 4) {
    console.log("The array is less than 4");
  } else {
    console.log("The array is more than 4");
  }
}
myAlphabetLength();

// Declare and initialize an array called planets
//  with 5 string values console.log each item in the array. Also console.log the index in each iteration (use for loop)

let planets = ["Earth", "Venus", "Pluto", "Mercury", "Saturn"];

for (let i = 0; i < planets.length; i++){
    console.log(i);
    console.log(planets[i]);
   
}

//Let nums =  [1, 2, 3, 4, 5]. Find sum of elements in given array (hint use for loop)
let nums =[1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum);

// Create a deep copy of an array let data = [1, 2, 3, [“first”, “second”, “third”]]

let data = [1, 2, 3, ["first", "second", "third"]];

let copy = data
data [0] = 'first'
console.log(copy)

// In programming object:
// 1)	Change the difficulty to the value of 7.
// 2)	Using the delete keyword, write the command to remove the jokes key from the programming object.
// 3)	Using a loop, iterate through the languages array and console.log all of the languages.
// 4)	Using a loop, console.log all of the keys in the programming object.
// 5)	Using a loop, console.log all of the values in the programming object.

let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:"http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};


programming.difficulty = "7";

delete programming.jokes;

for (let i = 0; i < programming.languages.lenght; i++) {
  console.log(programming.languages[i]);
}

for (let i = 0; i < languages.lenght; i++) {
    console.log(languages[i])
}

for (let key in programming) {
    console.log(key);
}

for (let key in programming) {
    console.log(programming[key]);
}