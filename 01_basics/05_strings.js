const myName = "suryansh"
const repoCount = 50

// console.log(myName + repoCount);

// console.log(`Hello my name is ${myName} and my repo count is ${repoCount}`);

const gameName = new String('suryansh-hc')

// console.log(gameName[0]);
// console.log(gameName.toUpperCase);
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-11, 4)
console.log(anotherString);

const newStringOne = "    Suryansh     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://suryansh.com/suryansh%20singh"
console.log(url.replace('%20', '-'));

console.log(url.includes("suryansh"));
console.log(url.split('/'));