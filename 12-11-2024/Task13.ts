const duplicateRemove=<T>(arr:T[]):T[]=>
{
    return [...new Set(arr)];
}

const numbers=[1,2,2,3,4,4,4,5,5,5];

console.log(duplicateRemove(numbers)); // Output: [1, 2, 3, 4, 5]