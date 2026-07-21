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

let user = {
    name: "Harman Singh Khurana",
    age: 19
}

greeting2(user);