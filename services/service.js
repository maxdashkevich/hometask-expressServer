// import fs from 'fs';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {Users} from '../models/users-model.js';

export class UsersService {
    getUsers = async () => {
        return Users.findAll({raw: true});
    }

    addUser = async ({...body}) => {
        return Users.create({
            name: body.name,
            role: body.role,
            login: body.login,
            password: body.password
        });
    }

    updateUser = async (body, id) => {
        return Users.update({...body}, {
            where: {
                id: id
            }
        });
    }

    deleteUser = async (id) => {
        return Users.destroy({
            where: {
                id: id
            }
        });
    }

    login = async (login, password) => {
        const user = await Users.findOne({
            where: {
                login: login
            },
            raw: true
        });

        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign(user.login.toString(), 'secret');
            console.log('Your authorization token: ', token);
            return ({user, token});
        } else throw new Error('Incorrect password!');
    }
}
/* export class NewUser {
    constructor(name, id, role, login, password) {
        this.name = name;
        this.id = id;
        this.role = role;
        this.login = login;
        this.password = password;
    }
}

export const users = [
    {
        name: 'Maksim',
        id: Date.now() + ( (Math.random()*100000).toFixed()),
        role: 'admin',
        login: 'maxdashkevich',
        password: bcrypt.hashSync('qwertyuiop', bcrypt.genSaltSync(10))
    },
    {
        name: 'Ruslan',
        id: Date.now() + ( (Math.random()*100000).toFixed()),
        role: 'user',
        login: 'Ruslan123',
        password: bcrypt.hashSync('ruslan2021', bcrypt.genSaltSync(10))
    },
    {
        name: 'Anton',
        id: Date.now() + ( (Math.random()*100000).toFixed()), 
        role: 'user',
        login: 'prostoAnton',
        password: bcrypt.hashSync('antonanton', bcrypt.genSaltSync(10))
    }
];

fs.writeFile("data.json", JSON.stringify(users), () => {});

export class UsersService {
    getUsers = () => {
        return JSON.stringify(users);
    }
    
    addUser = ({name, role, login, password}) => {
        if (users.findIndex(el => el.login === login) !== -1) return 'This login is already taken';
        
        users.push(new NewUser(name, Date.now() + ( (Math.random()*100000).toFixed()), role, login, this.hashPassword(password)));
        fs.writeFile("data.json", JSON.stringify(users), () => {});
        return JSON.stringify(users);
    }

    updateUser = (name, id) => {
        users[users.findIndex(el => el.id === id)].name = name;
        fs.writeFile("data.json", JSON.stringify(users), () => {});
        return JSON.stringify(users);
    }

    deleteUser = id => {
        const index = users.findIndex(el => el.id === id);
        
        if (index !== -1) {
            users.splice(index, 1);
        }
        fs.writeFile("data.json", JSON.stringify(users), () => {});
        return JSON.stringify(users);
    }

    hashPassword = password => {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);
        
        return hash;
    }

    login = (login, password) => {
        const index = users.findIndex(el => el.login === login);
        const user = users[index];

        if (index === -1) return 'Incorrect login';
        if (bcrypt.compareSync(password, this.hashPassword(password))) {
            user.token = jwt.sign(user.login.toString(), 'secret');
        } else throw new Error('Incorrect password!');

        return user;
    }
} */
