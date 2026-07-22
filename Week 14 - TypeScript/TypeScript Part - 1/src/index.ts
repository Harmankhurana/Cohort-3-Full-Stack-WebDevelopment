// Declaring variables in TS
let x: number = 10; // this is a strict variable declaration(only number values)
// let x = 10; -> this was also working casue of type inferencing
// x = "Harman"; // now i can't switch number to a string cause TS is stopping me to do that(Type 'string' is not assignable to type 'number')
console.log(x);





// Any type -> I should avoid any's at any cost, cause i"m not using the type safety of TS
let a: any = 1; // number
console.log(a);

a = "Harman"; // string
console.log(a);

a = true; // boolean
console.log(a);





// Write a function that greets a user given their first name.
// Argument - firstName
// Logs - Hello {firstName}
// Doesn’t return anything
function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
}

greet("Harman");
// greet(1); // Argument of type 'number' is not assignable to parameter of type 'string'





// Write a function that calculates the sum of two functions
function sum(a: number, b: number) {
    return a + b;
}

console.log(sum(3,6));





// Return true or false based on if a user is 18+
function isLegal(age: number) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
}

console.log(isLegal(19));





// Create a function that takes another function as input, and runs it after 1 second.
// () => void, means empty arguments returns nothing
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("Hello");
});





// Another way to do this
function delayedCalling(anotherFn: () => void) {
    setTimeout(anotherFn, 1000);
}

function log() {
    console.log("Hey There!");
}

delayedCalling(log);





// Defining a function called `greeting` that takes ONE parameter: an object(user)
// Instead of writing a separate interface, we're using an inline type annotation
// to tell TypeScript exactly what shape this object should have.
// It must have a `name` (string) and an `age` (number)
function greeting(user:{
    name: string,
    age: number
}) {
    console.log(`Hello, ${user.name}`);
    console.log(`Your age is ${user.age}`);
}

// Calling the `greeting` function and passing an object literal directly.
// TypeScript will check this object against the inline type we defined above —
// if you forget `age` or misspell `name`, it'll throw a compile-time error.
greeting({
    name: "Harman Khurana",
    age: 21
});





// another way to write the same function
function greeting2(user:{
    name: string,
    age: number
}) {
    console.log(`Hello, ${user.name}`);
    console.log(`Your age is ${user.age}`)
}

// an object which have two keys(name and age)
let user = {
    name: "Harman Singh Khurana",
    age: 19
}

// or

// let user: {
//     name: string,
//     age: number
// } = {
//     name: "Harman Singh Khurana",
//     age: 19
// }

greeting2(user);





// To assign a type to the user object, you can use interfaces
interface UserType {
    firstName: string,
    lastName: string,
    age: number
    email: string
}
// Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input
function isLegal2(user: UserType) {
    if(user.age > 18) {
        return true   // above 18, return -> true
    } else {
        return false  // below 18, return -> false
    }
}





// Very similar to interfaces , types let you aggregate data together.
// But they let you do a few other things -> like union and intersection
type UserType2 = {
    firstName: string,
    lastName: string,
    email: string,
    age: number
}





// Print the id of user, which can be a number or string -> union type
// you can not do this using interfaces
type NumberOrString = string | number;

function printId(id: NumberOrString) {
    console.log(`ID: ${id}`)
}

printId(231816); // number -> ID: 231816
printId("103947"); // string -> ID: 103947





// A sum function which uses union type -> this won't work cause, TypeScript doesn't know at compile time what the types are
// Operator '+' cannot be applied to types 'StringOrNumber' and 'StringOrNumber'
// type StringOrNumber = string | number;

// function sumUnionType(a: StringOrNumber, b: StringOrNumber) {
//     console.log(a + b);
// }

// sumUnionType(4, 6); // 10 -> but it won't compile and gives compile time error





// A sum function which uses union type -> with type narrowing
type StringOrNumber = string | number;
function sumUnionType(a: StringOrNumber, b: StringOrNumber) {
    if (typeof a === "number" && typeof b === "number") {
        console.log(a + b); // number addition
    } else {
        console.log(String(a) + String(b)); // string concat
    }
}

sumUnionType(5, 7); // number -> 12
sumUnionType("1", "5"); // string -> 15