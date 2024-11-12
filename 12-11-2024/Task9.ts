interface Employee {
    personalInfo?: {
        address?: {
            city?: string;
        };
    };
}

const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee.personalInfo?.address?.city;
};

const employee1: Employee = {
    personalInfo: {
        address: {
            city: 'New York',
        },
    },
};

const employee2: Employee = {
    personalInfo: {
        address: {}, 
    },
};

console.log(getEmployeeCity(employee1)); // Output: "New York"
console.log(getEmployeeCity(employee2)); // Output: undefined
console.log(getEmployeeCity({}));        // Output: undefined
