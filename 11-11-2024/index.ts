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