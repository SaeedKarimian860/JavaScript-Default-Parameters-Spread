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
const greet = (person, greeting = 'hi', punctuation = '!') => {
    console.log(`${greeting}, ${person}, ${punctuation}`)
}
// passing in just a name will give you
// ex: greet ('Jeff')
// output: hi, Jeff !
// but, if you try to pass in two arguments...
// ex: greet('Jeff', '?')
// output: ?, Jeff ! (order matters!!)


//Spread (for function call)
function giveMeFour (a, b, c, d) {
    console.log('a', a)
    console.log('b', b)
    console.log('c', c)
    console.log('d', d)
}

const colors = ['red', 'orange', 'yellow', 'green']

//Spread (In Array Literals)
const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];


const mollusca = [...cephalopods, ...gastropods];

const inverts = [...cnidaria, ...gastropods, ...cephalopods];

const cephCopy = [...cephalopods];


//Spread (In Object Literals)
const feline = {
    legs: 4,
    family: 'Felidae'
};

const canine = {
    family: 'Caninae',
    furry: true
};

const dog = {
    ...canine,
    isPet: true,
    adorable: true
}

const houseCat = {
    ...feline,
    isGrumpy: true,
    personality: 'unpredictable'
}

const catDog = {
    ...canine,
    ...feline
}

const tripod