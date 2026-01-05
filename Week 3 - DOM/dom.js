// // state - which is the dynamic part of the state drived frontend
//     let todos = []; // array 
//     function addTodo(){
//         todos.push({
//             title: document.querySelector("input").value
//         })
//         render();
//     }

//     function deleteLastTodo(){
//         todos.splice(todos.length - 1, 1);
//         render();
//     }

//     function deleteFirstTodo(){
//         todos.splice(0,1);
//         render();
//     }

//     function deleteTodo(){
//         todos.splice(index,1);
//         render();
//     }


//  // componenet
//     function createTodoComponent(todo,index){           
//         const divEl = document.createElement("div")
//         const buttonEl = document.createElement("button");
//         const headingEl = document.createElement("h1");

//         buttonEl.innerHTML = "Delete";
//         buttonEl.setAttribute("onclick" ,"deleteTodo(" + index +")");
//         headingEl.innerHTML = todo.title;

//         divEl.appendChild(headingEl);
//         divEl.appendChild(buttonEl);
//         return divEl;
//     }


// // RN we have to write this but somehow react will do this for us eventually 
//     function render() {
//         document.querySelector("#todos").innerHTML = ""; // this right here is emptying to not to create div with the privious one
//         for  (let i=0; i < todos.length; i++){
//             const element = createTodoComponent(todos[i],i);
//             document.querySelector("#todos").appendChild(element);
        
//     }

// }



//     let todos = [];
//     function addTodo() {
//       todos.push({
//         title: document.querySelector("input").value
//       })
//       render()
//     }

//     function deleteLastTodo() {
//       todos.splice(todos.length - 1, 1) // remove the last element from the arr
//       render()
//     }


//     function deleteFirstTodo() {
//       todos.splice(0, 1) // remove the first element from the arr
//       render()
//     }

//     // function deleteTodo(){
//     //     todos.splice(index,1);
//     //     render();
//     // }
//     function createTodoComponent(todo) {
//       const div = document.createElement("div");
//       const h1 = document.createElement("h1");
//       const button = document.createElement("button");
//       button.innerHTML = "Delete"
//     //   button.setAttribute("onclick", "deleteTodo("+ index + ")")
//       h1.innerHTML = todo.title;
//       div.append(h1)
//       div.append(button)
//       return div
//     }

//     // react
//     function render() {
//       document.querySelector("#todos").innerHTML = "";
//       for (let i = 0; i < todos.length; i++) {
//         const element = createTodoComponent(todos[i]);
//         document.querySelector("#todos").appendChild(element)
//       }
//     }