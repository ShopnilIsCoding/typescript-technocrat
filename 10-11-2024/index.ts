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