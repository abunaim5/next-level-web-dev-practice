//* Enum stores a set of string literal in same place
//* enum is not efficient in large scale project

// type UsersRole = 'admin' | 'editor' | 'viewer';

enum UsersRole {
    Admin = 'admin',
    Editor = 'editor',
    Viewer = 'viewer'
};

const canEdit = (role: UsersRole) => {
    if (role === UsersRole.Admin || role === UsersRole.Editor) return 'Yes';
    else return 'No';
};

const res = canEdit(UsersRole.Admin);

console.log(res);