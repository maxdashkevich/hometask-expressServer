import fs from 'fs';
export class NewUser {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

export const users = [
    {
        name: 'Maksim',
        id: Date.now() + ( (Math.random()*100000).toFixed())
    },
    {
        name: 'Ruslan',
        id: Date.now() + ( (Math.random()*100000).toFixed())
    },
    {
        name: 'Anton',
        id: Date.now() + ( (Math.random()*100000).toFixed())
    }
];

fs.writeFile("data.json", JSON.stringify(users), () => {});

export class UsersService {
    getUsers = () => {
        return JSON.stringify(users);
    }
    
    addUser = name => {
        users.push(new NewUser(name, Date.now() + ( (Math.random()*100000).toFixed())));
        fs.writeFile("data.json", JSON.stringify(users), () => {});
        return JSON.stringify(users);
    }

    updateUser = (name, id) => {
        for (let user of users) {
            if (user.id === id) {
                user.name = name;
            }
        }
        fs.writeFile("data.json", JSON.stringify(users), () => {});
        return JSON.stringify(users);
    }

    deleteUser = id => {
        const index = users.findIndex(n => n.id === id);
        
        if (index !== -1) {
            users.splice(index, 1);
        }
        fs.writeFile("data.json", JSON.stringify(users), () => {});
        return JSON.stringify(users);
    }
}