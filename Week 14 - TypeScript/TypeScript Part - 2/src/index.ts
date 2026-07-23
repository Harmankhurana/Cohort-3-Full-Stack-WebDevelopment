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