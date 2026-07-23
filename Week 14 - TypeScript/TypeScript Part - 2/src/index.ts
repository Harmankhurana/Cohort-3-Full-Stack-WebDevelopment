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