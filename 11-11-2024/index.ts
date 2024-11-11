interface Developer<T,X=null>
{
    name:string,
    skills:T,
    salary?:X
}

const juniourDev:Developer<{
    experience: number,
    programmingLanguage: string
},string>=
{
    name: "John Doe",
    skills: {
        experience: 1,
        programmingLanguage: "JavaScript"
    },
    salary:"free te kamla dei"
}     

const seniorDev:Developer<{
    experience: number,
    programmingLanguage: string,
    teamSize: number
}>=
{
    name: "Jane Smith",
    skills: {
        experience: 5,
        programmingLanguage: "TypeScript",
        teamSize: 5
    }
}



//

const createArrayWithGeneric=<T>(param:T):Array<T>=>
{
    return [param];
}

const createArrayWithGeneric2=<T>(param:T):T[]=>
{
    return [param];
}

type User={id:number,name:string};
const res1=createArrayWithGeneric<User>({id:22,name:'Bulu'});//same
const res2=createArrayWithGeneric2<User>({id:22,name:'Bulu'});//same 

const createTuple= <T,Q>(param1:T,param2:Q):[T,Q]=>
{
    return [param1,param2];
}

const res3=createTuple<number,{name:string}>(123,{name:'BuLu'});
console.log(res1,res2,res3);

//constraints
const addCourseToStudent=<T extends {id:number,name:string,email:string}>(student:T)=>
{
    const course = "Next Web Dev Course";
    return{
        ...student,
        course
    }
}

const res4=addCourseToStudent({id:1,name:'John Doe',email:'johndoe@gmail.com'});

console.log(res4);

//keyof operator

type vehicle=
{
    bike:string,
    car:string,
    ship:string
}

type Owner='bike'|'car'|'ship';//same
type Owner2= keyof vehicle;//same

const user=
{
    name:"BuLu",
    age:40,
    address: 'DHK'
}

const getPropertyValue=<X,Y extends keyof X>(obj:X,key:Y)=>
{
    return obj[key];
}

const res5=getPropertyValue(user,'name')
console.log(res5);

//asynchronous ts

type Api={
    userId:number,
    id:number,
    title:string,
    completed:boolean
}

 const getTodo = async ():Promise<Api> =>
 {
   const res=await fetch('https://jsonplaceholder.typicode.com/todos/1');
   const data = await res.json();
   return data ;
   //console.log(data); 
 };
 console.log(getTodo()); 

 //conditional type
 
 type a1=number;
 type b1=undefined;

 type x= a1 extends null ? true: b1 extends undefined ? undefined  : any;

type Sheikh={
    bike:string;
    car:string;
    ship:string
}

type CheckVehicle<T>= T extends keyof Sheikh? true:false;

type Hasplane=CheckVehicle<"Plane">;

type areaNumber=
{
    height:number;
    width:number;
}

// type AreaString=
// {
//     [key in keyof areaNumber]:string;
// }
type AreaString<T>=
{
    [key in keyof T]:T[key];//lookup map type
}

const area1:AreaString<{height:string,width:number}>=
{
    height:"500",
    width:10
}

type pick=Pick<Sheikh,'car'|'bike'>//pick-same

type omit=Omit<Sheikh,'ship'>//omit-same

type SheikhRequired=Required<Sheikh>//required
type partial = Partial<Sheikh>//partial

type readOnly=Readonly<Sheikh>//readOnly

//Record

type myOBJ= Record<string,string>

const EmptyOBJ:Record<string,unknown>={};
const obj:myOBJ={
    name:"BuLu",
    age:"40"
}

 