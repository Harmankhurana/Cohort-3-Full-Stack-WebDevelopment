URL - https://projects.100xdevs.com/tracks/6SbPPXGkG8QKFOTW9BmL/ts-1
# Types of languages

## 1. Strongly typed vs loosely typed

The terms `strongly typed` and `loosely typed` refer to how programming languages handle types, particularly how strict they are about type conversions and type safety.

### Strongly typed languages

1. Examples - Java, C++, C, Rust
2. Benefits -
    1. Lesser runtime errors
    2. Stricter codebase
    3. Easy to catch errors at compile time

### Code doesn’t work

```jsx
#include <iostream>

int main() {
  int number = 10;
  number = "text";
  return 0;
}
```

### Loosely typed languages

1. Examples - Python, Javascript, Perl, php
2. Benefits
    1. Easy to write code
    2. Fast to bootstrap
    3. Low learning curve

### Code does work

```jsx

function main() {
  let number = 10;
  number = "text";
  return number;
}
```
![Compiled v/s Non-Compiled](./Images/image%20copy%202.png)

People realised that javascript is a very powerful language, but lacks types. `Typescript` was introduced as a new language to add `types` on top of javascript.
---
# What is Typescript

### What is typescript?

TypeScript is a programming language developed and maintained by Microsoft.

It is a strict `syntactical superset` of JavaScript and adds optional static typing to the language.

![Venn Diagram](./Images/image.png)

### Where/How does typescript code run?

Typescript code never runs in your browser. Your browser can only understand `javascript`.

1. Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)
2. Typescript is something that compiles down to javascript
3. When typescript is compiled down to javascript, you get `type checking` (similar to C++). If there is an error, the conversion to Javascript fails.

![TS work flow](./Images/image%20copy.png)

### Typescript compiler

`tsc` is the official typescript compiler that you can use to convert `Typescript` code into `Javascript`

There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are -

1. esbuild
2. swc
---
# **The tsc compiler**

Let’s bootstrap a simple Typescript Node.js application locally on our machines

### **Step 1 - Install tsc/typescript globally**

```jsx
npm install -g typescript
```

### **Step 2 - Initialize an empty Node.js project with typescript**

```jsx
mkdir node-app
cd node-app
npm init -y
npx tsc --init
```

These commands should initialize two files in your project

![node-app ls](./Images/image%20copy%203.png)

### **Step 3 - Create a a.ts file**

```jsx
const x: number = 1;
console.log(x);
```

### **Step 4 - Compile the ts file to js file**

```jsx
tsc -b
```

### **Step 5 - Explore the newly generated index.js file**

![Converting TS to JS](./Images/image%20copy%204.png)

Notice how there is no typescript code in the javascript file. It’s a plain old js file with no `types`

### **Step 7 - Delete `a.js`**

### **Step 6 - Try assigning x to a string**

Make sure you convert the `const` to `let`

```jsx
let x: number = 1;
x = "harkirat"
console.log(x);
```

### **Step 7 - Try compiling the code again**

```jsx
tsc -b
```

Notice all the errors you see in the console. This tells you there are `type` errors in your codebase.

Also notice that no `index.js` is created anymore

![index.js](./Images/image%20copy%205.png)

This is the high level benefit of typescript. It lets you catch `type` errors at `compile time`
---
# **Basic Types in TypeScript**

## **Typescript provides you some basic types**

`number`, `string`, `boolean`, `null`, `undefined`.
Let’s create some simple applications using these types - 

## **Problem 1 - Hello world**

```
💡 Thing to learn - How to give types to arguments of a function
```

Write a function that greets a user given their first name.
Argument - firstName
Logs - Hello {firstName}
Doesn’t return anything

- Solution
    
    ```tsx
    function greet(firstName: string) {
        console.log("Hello " + firstName);
    }
    
    greet("harkirat");
    ```
    

## **Problem 2 - Sum function**

```
💡Thing to learn - How to assign a return type to a function
```

Write a function that calculates the sum of two functions

- Solution
    
    ```tsx
    function sum(a: number, b: number): number {
        return a + b;
    }
    
    console.log(sum(2, 3));
    ```
    

## **Problem 3 - Return true or false based on if a user is 18+**

```
💡Thing to learn - Type inference
```

Function name - isLegal

- Solution
    
    ```tsx
    function isLegal(age: number) {
        if (age > 18) {
            return true;
        } else {
            return false
        }
    }
    
    console.log(isLegal(2));
    ```
    

![function isLegel](./Images/image%20copy%206.png)

## Problem 4 - Create a function that takes another function as input, and runs if after 1 second.

- Solution
    
    ```tsx
    function delayedCall(fn: () => void) {
        setTimeout(fn, 1000);
    }
    
    delayedCall(function() {
        console.log("hi there");
    })
    ```