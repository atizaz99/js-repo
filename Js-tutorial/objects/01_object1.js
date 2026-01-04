// singleton object: Singleton object defined by a constructor
// Object.create

// object literal 
const mySymbol = Symbol("key1");

const jsUser = {
    name: "Alice",
    age: 30,
    loaction: "WonderLand",
    email: "alice@wornderland",
    [mySymbol]: "mykey1Value", // symbol as key 
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Friday"],
    "full name": "Alice Johnson" // key with space


}

// object accessing
// console.log(jsUser.name); // using dot notation 
// console.log(jsUser["age"]); // using bracket notation
// console.log(jsUser["full name"]); // using bracket notation for key with spaces 
// console.log(jsUser[mySymbol]); // using symbol as key
// console.log(typeof jsUser[mySymbol]); // data type of symbol key vlaue


// updating object values
// jsUser.age = 31;
// jsUser["loaction"] = "New WonderLand"; 
// console.log(jsUser.age);
// console.log(jsUser.loaction);

// freeze the object to prevent further modifications 
// Object.freeze(jsUser);
// jsUser.age = 32; // this will not update the age
// console.log(jsUser.age); // still 31

// passing fuction as value 
jsUser.greeting = function(){
    console.log("Hello " + this.name + "!");
}
console.log(jsUser.greeting() ); // calling the greeting function

