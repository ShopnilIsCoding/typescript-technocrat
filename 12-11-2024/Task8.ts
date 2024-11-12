
interface User {
    name: string;
    email: string;
}

interface Admin {
    adminLevel: number;
}

type AdminUser = User & Admin;

const describeAdmin = (user: AdminUser): string => {
    return `Admin ${user.name} (Email: ${user.email}) is at admin level ${user.adminLevel}.`;
};

const admin: AdminUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    adminLevel: 3,
};

console.log(describeAdmin(admin)); // Output: Admin John Doe (Email: john.doe@example.com) is at admin level 3.
