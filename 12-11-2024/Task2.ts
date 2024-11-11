const fn=(name:string,age:number,role?:'admin'|'guest'|'user')=>
{
    console.log({name, age, role}); 
}

fn('John Doe', 30); // Output: { name: 'John Doe', age: 30, role: undefined }