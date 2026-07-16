// Declaring variables in TS
let x: number = 10; // this is a strict variable declaration(only number values)
// let x = 10; -> this was also working casue of type inferencing
// x = "Harman"; // now i can't switch number to a string cause TS is stopping me to do that(Type 'string' is not assignable to type 'number')
console.log(x);



// Write a function that greets a user given their first name.
// Argument - firstName
// Logs - Hello {firstName}
// Doesn’t return anything
function greet(firstName: string) {
    console.log(`Hello ${firstName}`);
}

greet("Harman");