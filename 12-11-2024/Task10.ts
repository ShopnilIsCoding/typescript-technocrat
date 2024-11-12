const getDisplayName = (name: string | null | undefined): string => {
    return name ?? "Anonymous";
};

console.log(getDisplayName("John Doe")); 
console.log(getDisplayName(null));       
console.log(getDisplayName(undefined));  
