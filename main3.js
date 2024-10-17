//The Keyword this

function sayHi() {
  console.log("Hi");
  //this refers to the window (global scope object in the browser)
  console.log(this);
}

const greet = function () {
  console.log(this);
};

// const person = {
//     first: 'Cherilyn',
//     last: 'Sarkisian',
//     nickName: 'Cher',
//     fullName() {
//         console.log(this); //set to the object that this method is inside of
//     }
// }

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickName: "Cher",
  fullName() {
    //In a method, this refers to the object the method "lives in:"
    const { first, last, nickName } = this;
    return `${first} ${last} AKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says HAHAHAHA`);
  },
};

const printBio = person.printBio;

const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
    console.log("Phew thank heavens that is over!");
  },
};
