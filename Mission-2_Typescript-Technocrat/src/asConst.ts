//* we can use as const to prevent using enum

// we cant edit user role property values

// const UsersRole = {
//     Admin: 'Admin',
//     Editor: 'Editor',
//     Viewer: 'Viewer'
// } as const;

// //* if property and value are same order
// const canEdit = (role: keyof typeof UsersRole) => {
//     if(role === UsersRole.Admin) return true;
//     else return false;
// };

//* another way
const UsersRole = {
    Admin: 'ADMIN',
    Editor: 'EDITOR',
    Viewer: 'VIEWER'
} as const;

//* if property and value are not same. we can extract the property value as type
const canEdit = (role: (typeof UsersRole)[keyof typeof UsersRole]) => {
    if(role === UsersRole.Admin) return true;
    else return false;
};