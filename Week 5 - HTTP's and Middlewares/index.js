// // Creating a async await function which fetches the data from the URL 
// // this fetching data will eventually take time to find the data then process the data, that's why im using async await function to read more things 
// async function getRecentPost() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")  // Fetching the data from a HTTP server 
//     const data = await response.json(); // converting the data in  json format
//     console.log(data);  // logging the data 
//     console.log("request has been processed");
//     document.getElementById("title").innerHTML = data.title;   // Embedding the (title) data in the HTML body
//     document.getElementById("posts").innerHTML = data.body;    // Embedding the (body) data in the HTML body
//     // document.getElementById("posts").innerHTML = JSON.stringify(data);    // for embedding all the data in the HTML body
// }

// const { json } = require("express");

// getRecentPost();

// // Either use fetch function for data response or use axios for fetching the data 
// // axios is much cleaner code syntax 
// async function getRecentPostUsingAxios(){
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");   // axios says that i will automatically convert the data in json format 
//     console.log(response);
//     document.getElementById("posts").innerHTML = response.data.body;
// }

// getRecentPostUsingAxios();





// // Create a HTTP server - Calculator which takes the query as parameter/ that returns the sum endpoint
// const express = require("express");
// const app = express();   // initialising the app varible with express();

// let requestCount = 0;
// function requestCountNumber(req, res, next){
    
// }

// app.use(requestCountNumber);

// app.get("/sum/:a/:b" , function(req, res){   // taking it like (/sum/anyNo./anyNo.) rather than (sum?a=2&b=3)
//     const a = parseInt(req.params.a);
//     const b = parseInt(req.params.b);

//     res.json({
//         ans :  a + b  
//     })
// });

// app.get("/subtract" , function(req, res){
//     const a = req.query.a;
//     const b = req.query.b;

//     res.json({
//         ans : a - b 
//     })
// });

// app.get("/multiply" , function(req, res){
//     const a = req.query.a; 
//     const b = req.query.b; 

//     res.json({
//         ans : a * b
//     }) 
// });

// app.get("/divide" , function(req, res){
//     const a = req.query.a; 
//     const b = req.query.b;

//     res.json({
//         ans : a / b
//     })
// });

// app.listen(3000);





// // Creating a Middleware for logs the method, timestamps and the url 
// const express = require("express");

// const app = express();

// function loggerMiddlewares(req, res, next){
//     console.log(`Method is ${req.method}`);
//     console.log(`Host is ${req.hostname}`);  
//     console.log(`Route is ${req.url}`);
//     console.log(`Timestamps is ${new Date()}`);

//     next();
// }

// app.use(loggerMiddlewares);


// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a - b
//     })
// });

// app.listen(3000);





// // Using External Middleware library
// const express = require('express');
// const app = express();

// // Use express.json() middleware to parse JSON bodies
// app.use(express.json());

// // Define a POST route to handle JSON data
// app.post('/data', (req, res) => {
//   // Access the parsed JSON data from req.body
//   const data = req.body;
//   console.log('Received data:', data);

//   // Send a response
//   res.send('Data received');
// });

// app.listen(3000, () => {
//   console.log('Server running on port 3000');
// });





// // Write a HTML file, that hits the backend server using the "fetch" api 
// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/sum", function(req, res){
//   const a = parseInt(req.body.a);
//   const b = parseInt(req.body.b);

//   res.json({
//     answer : a + b 
//   })
// });

// app.listen(3000);





// // Given an array, give me back a new array in which every value is multiplied by 2
// // [1,2,3,4,5] ⇒ [2,4,6,8,10]
// const input = [1,2,3,4,5];

// const newArray = [];

// for (let i = 0 ; i < input.length ; i++){
//     newArray.push(input[i] * 2 );
// }

// console.log(newArray);



// // Now Using maps for the same thing 
// const arr = [2,3,4,5,6];
// // Now i need a transformation function which helps in transforming the main arr 

// // map chaining 
// const newArray = arr.map(function transform(i){
//     return i * 2; 
// });

// console.log(newArray);



// // Normal way to make filters - kind of an ugly way to make filters for arrays 
// const arr = [1,2,3,4,5];

// const newArr = [];

// for (let i = 0 ; i < arr.length ; i++){
//     if(arr[i] % 2 == 0){
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);


// // Using filter 
// const arr = [2,3,4,5,6];

// function filterLogic(n){
//     if (n % 2 == 0){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// const ans = arr.filter(filterLogic);
// console.log(ans);


// // Using some helper function for filtering out names with just letter "H"
// const arr = ["Harman" , "Harkirat", "Upkeerat"];

// function filterLogic(n){
//     if(n.startsWith("H")){
//         return true;
// 	}
// 	else {
// 		return false;
// 	}
// }
		
// const ans = arr.filter(filterLogic);
// console.log(ans);





// // Axions Vs fetch 
// // Hitting the server with fetch code 
// function main(){
// 	fetch("https://sum-server.100xdevs.com/todos").then(async response =>{
// 		const data = await respoonse.json();
// 		console.log(data);
// 	})
// }

// main();
// //same working but different syntax - Write this down syntax 
// async function main(){
// 	const response = await fetch("https://sum-server.100xdevs.com/todos");
// 	const data = await response.json();
// 	console.log(data);
// }

// main();


// //Hitting the server with different method request in fetch 
// async function main(){
// 	const response = await fetch("URL", {
// 		method : "POST"  // I can use GET, POST, PUT
// 	});
// 	const data = response.json();
// 	console.log(data);

// }


// // Hitting the server with axios code
// const axios = require("axios");

// async function getMeResponse(){
// 	const response = await axios.get("https://sum-server.100xdevs.com/todoas");
// 	console.log(response);
// }

// getMeResponse();



// // Hittign the serve with different method request in axios
// async function main(){
// 	const response = await axios.post("URL");   // I can use get,post,put after axiox.
// 	console.log(response);
// }



// // Hitting the server with Post request in axios(http Dump)
// const express = require("express");
// const axios = require("axios");

// async function main(){
// 	const response = await axios(
// 	{
// 		url : "https://httpdump.app/dumps/e0cd1372-51a4-4a96-a865-d153b2a980f6",
// 		method : "POST",
// 		Headers : {
// 			Authorization : "Bearer 123",
// 		},
// 		data : {
// 			"username" : "Harman",
// 		},
// 	},
// );
// 	console.log(response.data);
// }

// main();