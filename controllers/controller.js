import {UsersService, users, NewUser} from '../services/service.js';

const service = new UsersService();
export class UsersController {
    get = (req, res) => {
        res.status(200).send(service.getUsers());
    }

    add = (req, res) => {
        res.status(200).send(service.addUser(req.body));
    }

    update = (req, res) => {
        res.status(200).send(service.updateUser(req.body.name, req.params.id));
    }

    delete = (req, res) => {
        res.status(200).send(service.deleteUser(req.params.id));
    }

    login = (req, res) => {
        res.status(200).send(service.login(req.body.login, req.body.password))
    }
}

