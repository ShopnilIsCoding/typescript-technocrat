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
