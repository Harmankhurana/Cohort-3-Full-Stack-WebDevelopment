// A function which returns true or false depending upon the number is even or not
function isEven(num: number): boolean {
    if(num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(4)); // true -> even
console.log(isEven(9)); // false -> odds





// defining an interface to enforce type structure for a complex object
interface UserInterface {
    name: string,
    age: number,
    address: {
        city: string,
        state: string,
        country: string,
        pincode: number
    },
    mobileNo: string
}

// creating a complex object
let User: UserInterface = {
    name: "Harman",
    age: 21,
    address: {
        city: "Udaipur",
        state: "Rajasthan",
        country: "India",
        pincode: 313001
    },
    mobileNo: "+91 0000000000"
}

// using the object in isLegal or not function
function isLegal(User: UserInterface): boolean {
    if(User.age > 18) {
        return true;
    } else {
        return false;
    }
}

// logging ans
const ans = isLegal(User);
if (ans) {
    console.log("I'm legal");
} else {
    console.log("I'm illegal");
}





// let's make a key and value optional in the object -> just add '?' like this address?: {}
// now address is optional which means it can exists or even cannot exists
interface UserInterface2 {
    name: string,
    age: number,
    address?: {
        city: string,
        state: string,
        country: string,
        pincode: number
    },
    mobileNo: string
}

// now here the address exists
let User2: UserInterface2 = {
    name: "Harman",
    age: 21,
    address: {
        city: "Udaipur",
        state: "Rajasthan",
        country: "India",
        pincode: 313001
    },
    mobileNo: "+91 0000000000"
}

// here the address does'nt exists -> but still the error is not shown by the compiler
let User3: UserInterface2 = {
    name: "Harman Khurana",
    age: 21,
    mobileNo: "+91 0000000000"
}





// Extracted common address structure into a reusable interface to avoid duplication across Manager and Employee
// Helps in changing the key and value in one place and then can be reused anytime
// Interfaces uses another interfaces
interface Address {
    address?: {
        city: string,
        state: string,
        country: string,
        pincode: number
    },  
}

interface Manager {
    name: string,
    age: number,
    address?: Address,
    mobileNo: string
}

interface Employee {
    name: string,
    age: number,
    address?: Address,
    mobileNo: string
}





// Define an interface with a method (greet) and implement it in an object
interface People {
    name: string,
    age: number,
    greet: () => string,
    // or
    // greet(): string
}

let person: People = {
    name: "Harkirat Singh",
    age: 28,
    greet: () => {
        return "hi";
    }
}

const greetings = person.greet();
console.log(greetings);





// Creating an interface and implementing it in a class
interface People2 {
    name: string,
    age: number,
}

class Manager2 implements People2 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let user = new Manager2("John", 30);
console.log(user.name,"->", user.age); // John -> 30

let user2 = new Manager2("Harman", 21);
console.log(user2.name,"->", user2.age); // Harman -> 21





// We can also add function to the blue prints and then use it in a class constructor
// Interfaces can also declare method signatures, not just properties
// I have the blue print of People3
interface People3 {
    name: string,
    age: number,
    isLegal(): boolean,
}

// Implementing People3 in Manager2 class
class Manager3 implements People3 {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    isLegal(): boolean {
        if(this.age > 18) {
            return true;
        } else {
            return false;
        }
    }
}

let user3 = new Manager3("Harkirat", 28);
console.log(user3.name,"->", user3.age); // Harkirat -> 28
console.log(user3.isLegal()); // true





// Abstract classes in TS
abstract class User1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    abstract greet: () => string;
}

class Employee2 implements User1 {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return "Hi" + this.name;
    }
}





// advance intersection in TS
type Employee3 = {
    name: string,
    startDate: number,
    age: number,
    role: string,
}

type Manager4 = {
    name: string,
    startDate: number,
    age: number,
    department: string,
}

type TeamLead = Employee3 & Manager4;

let teamLead: TeamLead = {
    name: "Harman",
    startDate: 19/11/2026,
    age: 21,
    role: "Software Engineer",
    department: "Engineering",
}

console.log(teamLead.name); // Harman
console.log(teamLead.role); // Software Engineer
console.log(teamLead.department); // Engineering