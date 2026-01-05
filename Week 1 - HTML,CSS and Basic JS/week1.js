// // Assignments 
// // Create a variable for each of the following: your favorite color, your height in centimeters, and whether you like pizza. Use appropriate variable declarations (let, const, or var). Try logging it using console.log
// let favorite_color = "Black"; // string value
// const height_in_centimeters = 170; // number value
// var pizzaLinking = true; // boolean value

// console.log(favorite_color);
// console.log(height_in_centimeters);
// console.log(pizzaLinking);



// // function declaration 
// function allOperation(a , b){
//     return a + b;
// }
// // calling a function and storing its values in sum variable
// let sum =  allOperation(10,20);
// console.log(sum);



// //  function to take name and say hello with the name
// function tryPassing (name){
//     console.log(`hello , ${name}`); 
// }
// tryPassing("Harman");



// // for making voting age check
// function vote(age){
// if(age >= 18){
//     console.log(`You're ${age} years old, you can vote`);
//     return true;
//     } 
//     else {
//         console.log(`You're ${age} years old, you can't vote`);
//     return false;
//     }
   
// }
// let canVote = vote(18);
//  console.log(canVote);



// // For finding even and odd numbers 
// let number = prompt("Enter a number ");
// if (number % 2 == 0 ){
//   console.log(`${number} is even`);
// } else {
//   console.log(`${number} is odd`);
// }



// // a function which uses objects 
// function greet(user){
//     console.log(`Hey ${user.name}, your age is ${user.age}! `)
//   }
// // object
//   let user = {
//     name : "Harman",
//     age : 20,
//   };
// // function calling
//   greet(user);



// // More modidyfied version of the above assignment as now we also says he/she can vote too or not 
// function greet(user){
//     console.log(`Hey ${user.name}, your age is ${user.age}!`);
//     if ( user.age >= 18){
//       console.log(`As your age is ${user.age}, You're an adult, So you can vote!`);
//     } else {
//       console.log(`As your age is ${user.age}, You're not an adult, So you can't vote!`);
//     }
//   }
  
//   let user = {
//     name : "harman",
//     age : 17,
//   };
  
//   greet(user);



// // Using looping to log the values of an array 
// let array = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for ( let i = 0 ; i < array.length ; i++){
//       console.log(array[i]);
// }



// // Making a object 
// let users = {
//     name : "harman",
//     age : 20,
//     gender : "male",
// }

// console.log(`Hello my name is ${users.name}, 
// my age is ${users.age} and I'm a ${users.gender} candidate`);