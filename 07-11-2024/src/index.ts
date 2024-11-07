const myName: string="myName"
let tuple :[number,string,"kiree?"]=[166,"CSE","kiree?"]
console.log(tuple.length)
function add(num1 :number,num2:number)
{
return num1 + num2;
}

add(23,4);
const addarw=(num1:number,num2:number):number=>num1 + num2;

addarw(3,4);

let person: {name:string,
    age:number,
    balance:number,
    city:string,
    addblnc:Function
} = {
    name: "John",
    age: 30,
    balance: 100,
    city: "New York",
    addblnc(balance:number):number
    {
        return this.balance + balance;
    }
}

const blnc=person.addblnc(addarw(1000,500));
console.log(blnc)

const array : number[]=[1,2,3]
const newarr:number[]=array.map((i:number):number=>i*i);
console.log(newarr)

type User =
{
    name: string,
    age: number,
    address: {
        street: string |'Dhaka',
        city: string,
        state?: string
    }
}

const user: User = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }
}

let isAuthenticated :String = '';
const result = isAuthenticated??"Guest";
const result2= isAuthenticated?isAuthenticated:"Guest";
console.log(result,result2);


const getdetails =(value:unknown):unknown=>
{
    if(typeof value === "number")
    {
        return value * 3.6;
    }
    if(typeof value === "string")
    {
        return "Name : " + value
    }
    else
    {
        return "Invalid input";
    }
}
console.log(getdetails(12));
console.log(getdetails("Porsche"));
console.log(getdetails(false));

const throwError =(msg:string):never=>
{
    throw new Error(msg);
}
throwError("Invalid");