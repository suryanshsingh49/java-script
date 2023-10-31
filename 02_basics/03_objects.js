// object literals

const mySym = Symbol("key1")

const jsUser = {
    firstName: "Suryansh",
    lastName: "Singh",
    "full Name": "Suryansh Singh",
    [mySym]: "mykey1",
    age: 30,
    location: "Bharat",
    email: "suryansh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full Name"]);
// console.log(jsUser[mySym]);

jsUser.email = "suryansh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "suryansh@microsoft.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.firstName}`);
}

console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
