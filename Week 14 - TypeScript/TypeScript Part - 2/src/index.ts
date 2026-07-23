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