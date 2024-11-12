const handleError = (message: string): never => {
    throw new Error(message);
};


try {
    handleError("Something went wrong!");
} catch (error) {
    console.error(error); // Output: Error: Something went wrong!
}
