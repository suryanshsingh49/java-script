// # Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 34690258790325802735097273532n
console.log(typeof bigNumber);

// # Reference (Non primitive)
// Arrays, Objects, Functions


const heroes = ["shaktiman", "doga"];

let myObj = {
    name: "suryansh",
    age: 30
}

console.log(typeof myObj)

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction)