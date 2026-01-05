// // Using external package called chalk 
// import chalk from "chalk";
// console.log(chalk.blue("hello world!"));
// console.log(chalk.red.bold("This is an error"));





// // Creating a CLI - command line interface to count the number of words ~~in a file
// // logic - Counting the number of spaces between the words + 1
// // but it does not provide me the -h (helper) command and to do that i will use an external library called commander
// const fs = require("fs");

// function main(fileName){
//     fs.readFile(fileName, "utf-8", function(err, data){
//         let total = 0;
//         for (let i = 0; i < data.length; i++){
//             if (data[i] == " "){
//                 total++;
//             }
//         }
//         console.log(`There are ${total + 1} words in ${fileName}`);
//     })
// }

// main("a.txt");






// // using commander external library to do the same CLI working
// const fs = require('fs');
// const { Command } = require('commander');
// const program = new Command();

// program
//   .name('counter')
//   .description('CLI to do file based tasks')
//   .version('0.8.0');

// program.command('count')
//   .description('Count the number of lines in a file')
//   .argument('<file>', 'file to count')
//   .action((file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const lines = data.split('\n').length;
//         console.log(`There are ${lines} lines in ${file}`);
//       }
//     });
//   });

// program.parse();





// // Creating a HTTP server by using express.js
// const express = require("express"); // require express
// // logic
// function calculateSum(n){
//     let ans= 0;
//     for(let i=0 ; i<=n ; i++){
//         ans = ans + i;
//     }
//     return ans;
// };





// // const app = express(); // creating http server

// app.get("/" , function(req , res){ // syntax of express and function(req , res) is a callback function
//     const n = req.query.n; // query parameter
//     const ans = calculateSum(n); // calling the logic fuction here
//     res.send(ans); // send the answer of the fuction used above
// }) 
// app.listen(3000); // deciding the address of the server
// // To use parameters for n use this (localhost:3000/?n=5) this n=5 is the parameter
// // for multiple parameter use this (localhost:3000/?n=5&a=6)

// // the methods (get, post, put, delete) are different then the callbacks are also different






// // Creating a HTTP server - using express.js
// const express = require("express"); // requiring express
 
// // const app = express(); // creating the clinic

// app.get("/" ,function(req , res){ // a callback function
//     res.send("hi there")
// })

// app.listen(3000); // listening on this local no. port






// // Making a hospital kidney backend
// const express = require("express"); // importing express 
// // const app = express();

//  /* user array with name and kidneys - its in memory variable, which means when 
// I'm going to refresh all the saved data will refresh 
// so that's why we use databases like postgres and mongoDB */
// const users = [{  
//     name : "john",                
//     kidneys : [{
//         healthy : true,
//     },{
//         healthy : false,
//     }]
// }];

// app.get("/" , function(req, res){
//     // Logic for getting how many kidneys the user have, and how many are healthy or unhealthy
//     const johnKidneys = users[0].kidneys;
//     const numberOfKidneys = johnKidneys.length; // to find the number of kidneys
//     let numberOfHealthyKidneys = o ;
//     for (let i = 0 ; i < johnKidneys.length ; i++) {     // Now too this is fine using a looping method but use filters to filter the array
//         if (johnKidneys[i].healthy){
//             numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
//         }
//     }
//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfUnhealthyKidneys;
//     res.json ({          // for getting back the responds
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys,
//     })
// }) 

// app.post("/" , function(req, res){
//     // logic for User can add a new kidney 
//     const isHealthy = req.body.isHealthy;
//     users[0].kidneys.push({
//         healthy : isHealthy, 
//     })
//     res.json({
//         msg : "Done!"
//     })
// })

// app.put("/" , function(req, res){
//     // logic for putting unhealthy kidneys in healthy kidneys 
//     for (let i = 0 ; i < users[0].kidneys.length ; i++){
//         users[0].kidneys[i].healthy = true; 
//     }

//     res.json({});
// })

// app.delete("/" , function(req, res){
//     // logic for deleting a kidney
//     const newKidneys = [];          // new empty array 
//     for(let i = 0 ; i < users[i].healthy ; i++){
//         if(users[0].kidneys[i].healthy){
//             newKidneys.push({
//                 healthy : true
//             })
//         }
//     }
//     users[0].kidneys = newKidneys;
//     res.json({msg : "done"})

// })

// app.listen(3000);




// // Assignment to create HTTP serve from express 
// const express = require("express");

// // const app = express();

// app.get("/" , function(res, req){
//     res.send("Hello world")
// })

// app.listen(3000);





// // Creating a Middleware 
// const express = require('express'); // Importing express

// const app = express(); // putting express in app variable

// function isOldEnoughMiddleWare(req, res, next){   // this is the middleware which checks whether i should pass the req or not
//     const age = req.query.age; // Taking value of age in the URL
//      if (age >= 14){
//       next();
//     } else {
//      res.json({
//        msg : "Sorry you are not of age yet"
//       })
//     }
// }

// // Either write Middleware as a function call in every route or just write in one time for all the routes
// app.use(isOldEnoughMiddleWare); 
// // here the order matters if i wrtie this under a route it will not attach to it

// app.get("/" , isOldEnoughMiddleWare,  function(req, res){  
//       res.json({
//         msg : "You have successfully riden the ride 1"
//       })
// })

// app.get("/" , isOldEnoughMiddleWare, function(req, res){
//       res.json({
//         msg : "You have successfully riden the ride 2"
//       })
// })

// app.listen(3000);