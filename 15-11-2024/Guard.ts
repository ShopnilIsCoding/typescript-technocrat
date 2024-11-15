type User=
{
    name:string;    
}

type Admin=
{
    name:string;
    role:"admin"; 
}

const getUser=(user:User | Admin)=>
{
    if('role' in user)
    {
        console.log("My role is " + user.role);
    }
    else{
        console.log("My name is " + user.name);
    }
}