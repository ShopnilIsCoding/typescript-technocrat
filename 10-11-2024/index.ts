let anything:any;
anything = "anything";
console.log((anything as string).length);

const kgTogm=(value:string|number):string|number|undefined=>
{
    if(typeof value === "number")
    {
        return value *1000
    }
    else if(typeof value === "string")
    {
        const converted=parseFloat(value);
        return `Converted value is ${converted*1000}gm` ;
    }
    else return value;
}

const res1=(kgTogm("10")) as string;
console.log(res1);
console.log(kgTogm(10));

type CustomError=
{
    message:string;
}

try{
    throw new Error("Custom Error");
}
catch(err)
{
    console.log((err as CustomError).message);
}

interface User {
    name: string;
    age: number;
}

function greetUser(user: User): string {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}

interface User2 extends User
{
    hobbies: string[];
}

const user2: User2 = {
    name: "John Doe",
    age: 30,
    hobbies: ["reading", "painting"]
};

console.log(greetUser(user2)); 

type Roll1=number[];
interface Roll2{
    [index : number]:number
}

const roll1:Roll1=[1,2,3,4,5];
const roll2:Roll2=[1,2,3,4,5];

interface Add2{
    (num1:number,num2:number):number
}

const add:Add2=(num1,num2)=>num1+num2;

type Generic<X,Y,Z>=[X,Y,Z?];
const rollNumbers:Array<Generic<number,string,number>>=[[1,'rahim',166],[3,'karim'],[5,'halim']];
console.log(rollNumbers);

const userWithId:Generic<number,{name:string,email:string,role?:string},number>=[166,{
    name:'John',
    email:'john@example.com'
},234897234]