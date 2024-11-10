"use strict";
const myName = "myName";
let tuple = [166, "CSE", "kiree?"];
console.log(tuple.length);
function add(num1, num2) {
    return num1 + num2;
}
add(23, 4);
const addarw = (num1, num2) => num1 + num2;
addarw(3, 4);
let person = {
    name: "John",
    age: 30,
    balance: 100,
    city: "New York",
    addblnc(balance) {
        return this.balance + balance;
    }
};
const blnc = person.addblnc(addarw(1000, 500));
console.log(blnc);
const array = [1, 2, 3];
const newarr = array.map((i) => i * i);
console.log(newarr);
const user = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
};
let isAuthenticated = '';
const result = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
const result2 = isAuthenticated ? isAuthenticated : "Guest";
console.log(result, result2);
const getdetails = (value) => {
    if (typeof value === "number") {
        return value * 3.6;
    }
    if (typeof value === "string") {
        return "Name : " + value;
    }
    else {
        return "Invalid input";
    }
};
console.log(getdetails(12));
console.log(getdetails("Porsche"));
console.log(getdetails(false));
const throwError = (msg) => {
    throw new Error(msg);
};
throwError("Invalid");
