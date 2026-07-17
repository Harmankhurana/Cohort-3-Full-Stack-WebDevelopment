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
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

delayedCall(function() {
    console.log("Hello");
});