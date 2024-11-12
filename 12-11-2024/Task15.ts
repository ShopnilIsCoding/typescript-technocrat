
function isString(value: unknown): value is string {
    return typeof value === 'string';
}

function printUpperCase(value: unknown): void {
    if (isString(value)) {
        console.log(value.toUpperCase());  
    } else {
        console.log("The value is not a string.");
    }
}


printUpperCase("hello");      // Output: "HELLO"
printUpperCase(123);          // Output: "The value is not a string."
printUpperCase([1, 2, 3]);    // Output: "The value is not a string."
