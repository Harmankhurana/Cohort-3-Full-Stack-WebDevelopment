// // simple js code for adding till the Nth number
// function sum(n){
//     let ans = 0;
//     for(let i = 0; i<=n ; i++){
//         // ans = ans + i;
//         ans += i; 
       
//     }
//     return ans;
// } 
// let theSum = sum(5);
// console.log(theSum);





//function for taking 3 parameters - Making functional argument
// function sum(a,b){
//     return a+b;
// }

// function multiply(a,b){
//     return a*b;
// }

// function subtaction(a,b){
//     return a-b;
// }

// function division(a,b){
//     return a/b;
// }

// function doOperation(a,b,op){
//     return op(a,b);
// }

// console.log(doOperation(1,2,sum));





// // A function which takes n as an input and returns the sum value from 1 to n number
// function sum(n){
//     let ans = 0;
//     for (let i = 0 ; i <= n ; i++){
//         ans = ans + i;
//  or use this 
//          return n * (n + 1);
//     }
//     return ans;
// }

// const ans = sum(100);

// console.log(ans);





// // reading a file from a.txt, we import a library called "fs", here fs is a object and readFileSync is key
// const fs = require('fs');

// const contents = fs.readFileSync("./a.txt", "utf-8");
// console.log(contents);





// // for reading 2 different files sync 
// const fs = require("fs");
// const content = fs.readFileSync("a.txt" , "utf-8");
// console.log(content);

// const content2 = fs.readFileSync("b.txt" , "utf-8");
// console.log(content2)





// // for writing JS async code to do I/O bound tasks 

// const fs = require("fs");

// fs.readFile("a.txt" , "utf-8" ,  function (err, contents){
//     console.log(contents);
// });





// // Better way to write it aysnc code with functional arguments

// const fs = require("fs");

// function print(err, data){
//     if(err){
//         console.log("Error!!");
//     } 
//     else {
//         console.log(data);
//     }
// };

// fs.readFile("a.txt" , "utf-8" , print);

// fs.readFile("b.txt" , "utf-8" , print);

// console.log("Done!");  





// // setTimeout code
// function run(){
//     console.log("Hello my name is harman, and I'm learning async function");
// }

// setTimeout(run, 3000);

// console.log("hello!!");





// // one way to write the objects in a function 
// const ract1 = {
//     width: 2, 
//     height: 3,
//     color: "blue",
// };

// function area(ract){
//     return ract.width * ract.height;
// };

// console.log(area(ract1));





// // another way is to define a class for this 
// class reactangle{
//     constructor(width, height, color){
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area(){
//         const area = this.width * this.height;
//         return area;
//     }

//     print(){
//         console.log(`The color of the reactangle is ${this.color}`);
//     }
// }


// const react = new reactangle(2,5,"red");
// const area = react.area();
// console.log(area);
// const varient = react.print();
// console.log(varient);





// // creating a function which have setTimeout, and using another function and putting it as a functional argument
// function waitFor3Sec(resolve){
//     setTimeout(resolve , 3000);
// }

// function main() {
//     console.log("heyy, there");
// }
// waitFor3Sec(main);





// // Promisified version of setTimeout
// function random(resolve){
//     setTimeout(resolve , 3000)

// }

// let p = new Promise(random);

// function callback(){
//     console.log("promise succeded");
// }

// p.then(callback);





// // Promisified version of fs.readFile
// const fs = require("fs");
// function random(){
//     fs.readFile("a.txt" , "utf-8")
// }


// let p = new Promise(random);

// function callback(){
//     console.log("All things did perfectly");
// }

// p.then(callback);





// // One more syntax to make promisified version 
// function setTimeoutPromisified(duration){
//     return new Promise(function (resolve){
//         setTimeout(resolve, duration);
//     });
// }

// function callback(){
//     console.log("Harman is the best");
// }

// setTimeoutPromisified(3000).then(callback);





// // Async and Await another method to make asynchronous code
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// async function solve(){
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hello");
//     await setTimeoutPromisified(5000);
//     console.log("hello there");
// }

// solve();

// console.log("after solve function");