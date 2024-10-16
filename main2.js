//Default Params(the old way)
// function multiply(x, y) {
//     if (typeof y === 'undefined') {
//         y = 1;
//     }
//    return x * y;
// }

//A shorter, manual check
// function multiply(x,y) {
//     y = typeof y === 'undefined' ? 1 : y
//     return x * y;
// }

//Default Params(the new way)
// function multiply(x, y = 1) {
//     return x * y;
// }

// const greet = (person, greeting = 'hi') => {
//     console.log(`${greeting}, ${person}!`)
// }

//Can use an Array or an Object or any other value in JavaScript as the default value
// const blah = (x, y = [1,2,3]) => {
//     console.log(x, y);
// }

//In Default Parameters order absolutely matters
const greet = (person, greeting = "hi", punctuation = "!") => {
  console.log(`${greeting}, ${person}, ${punctuation}`);
};
// passing in just a name will give you
// ex: greet ('Jeff')
// output: hi, Jeff !
// but, if you try to pass in two arguments...
// ex: greet('Jeff', '?')
// output: ?, Jeff ! (order matters!!)

//Spread (for function call)
function giveMeFour(a, b, c, d) {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("d", d);
}

const colors = ["red", "orange", "yellow", "green"];

//Spread (In Array Literals)
const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];

const gastropods = ["giant african snail", "banana slug", "variable neon slug"];

const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const cephCopy = [...cephalopods];

//Spread (In Object Literals)
const feline = {
  legs: 4,
  family: "Felidae",
};

const canine = {
  family: "Caninae",
  furry: true,
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: "unpredictable",
};

const catDog = {
  ...canine,
  ...feline,
};

const tripod = {
  ...canine,
  legs: 3, //order does matters if you have conflicting properties with the same key name
};

const catDogClone = {
  ...catDog,
};

const random = [
  ..."hello",
  {
    ...catDog,
  },
];

//The Arguments Object (using it is...MEH)
//Shortcomings:
//1. Not a real array, you must turn it into an array if you want array methods
// function sum() {
//     const argsArr = [...arguments]
//   return arguments.reduce((total, currVal) => {
//     return total + currVal;
//   });
// }

//2. //No functionality provided for collecting remaining arguments
// function fullName (first, last) {
//     console.log(arguments);
//     console.log(first);
// }

//3. //Arguments Object does not exist at all in arrow functions
// const multiply = () => {
//     console.log(arguments);
// }

//Rest Params
function sum(...nums) {
  return nums.reduce((total, currVal) => {
    return total + currVal;
  });
}

function fullName(first, last, ...titles) {
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}

const multiply = (...nums) => {
  nums.reduce((total, currVal) => total * currVal);
};

//Destructuring -
//Array Destructuring:
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

// const gold = raceResults[0]
// const silver = raceResults[1]
// const bronze = raceResults[2]
//older/long way to show results

//much cleaner/simpler way to do previous results
//order still matters
const [gold, silver, bronze] = raceResults;

//using commas in between skips over the other elements
// const [first, , , fourth] = raceResults;

//you can combine the rest of the elements in an array
const [winner, ...others] = raceResults;

//Object Destructuring
const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

// const {
//     first,
//     last,
//     time //shows up as undefined
// } = runner;

// const {
//     country: nation,
//     title: honorific
// } = runner;

const { first, last, ...other } = runner;

//Nested Destructuring
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lelisa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];

// const [{ first: goldWinner }, { country }] = results;

const [, silverMedal] = results;
const { country } = silverMedal;
