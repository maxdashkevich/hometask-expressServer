export class NewUser {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

export const users = [
    {
        name: 'Maksim',
        id: 1
    },
    {
        name: 'Ruslan',
        id: 2
    },
    {
        name: 'Anton',
        id: 3
    }
];

export class UsersService {
    getUsers = () => {
        return JSON.stringify(users);
    }
    
    addUser = name => {
        users.push(new NewUser(name, users.length + 1));
        return JSON.stringify(users);
    }

    updateUser = (name, id) => {
        users[id - 1].name = name;
        return JSON.stringify(users);
    }

    deleteUser = id => {
        users.splice(id - 1, 1);
        users.forEach((el, i) => {
            if (id - 1 === i) {
                el.id = i + 1;
            }
        })
        return JSON.stringify(users);
    }
}

