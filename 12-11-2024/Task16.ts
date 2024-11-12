{
function getPropertyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];  
}

const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
};


const name = getPropertyValue(user, "name");  
const age = getPropertyValue(user, "age");    

console.log(name); 
console.log(age);  

}                                     