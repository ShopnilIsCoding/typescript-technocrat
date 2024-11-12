const processData = (data: unknown): string | number | undefined => {
    if (typeof data === 'string') {
       
        return data.toUpperCase();
    } else if (typeof data === 'number') {
       
        return data * data;
    }
    
    return undefined;
};

console.log(processData("hello")); // Output: "HELLO"
console.log(processData(5));       // Output: 25
console.log(processData(true));    // Output: undefined
console.log(processData({}));      // Output: undefined
