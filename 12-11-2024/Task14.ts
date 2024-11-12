{
type User = {
    name: string;
    age: number;
};


const fetchUserData = async (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            
            resolve({ name: "John Doe", age: 30 });
        }, 2000);
    });
};

// Example usage
fetchUserData().then((user) => {
    console.log(user); // Output: { name: "John Doe", age: 30 }
});
}