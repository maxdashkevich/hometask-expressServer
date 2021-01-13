import {UsersService, users, NewUser} from '../services/service.js'


export class UsersController {
    get = (req, res) => {
        res.status(200).send(this.UsersService.getUsers());
    }

    add = (req, res) => {
        res.status(200).send(this.UsersService.addUser(req.body.name));
    }

    update = (req, res) => {
        res.status(200).send(this.UsersService.updateUser(req.body.name, req.params.id));
    }

    delete = (req, res) => {
        res.status(200).send(this.UsersService.deleteUser(req.params.id));
    }
}

