//Some practice

const numbers = [12, 35, 24, 73, 89, 51, 96];
let nums = numbers;


nums.forEach (function(n){
    console.log (n + n)
})


nums.forEach (function(el){
    if (el % 2 === 0) {
        console.log(el)
    }
})

const odds = nums.filter (n => {
    return n % 2 === 1;
})
const evens = nums.filter (n => {
    return n % 2 === 0;
})


let beers = [
    "Little Cloud",
    "Cloudscape",
    "Double Cloud",
    "Double Frag",
    "Green Room",
    "Dahlia",
    "Carbon"
]
let beer = beers.find(beer => {
    return beer.includes ('Cloud')
})

let beer2 = beers.find(b => b.indexOf('Cloud') === 0);

