import {UsersService} from '../services/service.js';

const service = new UsersService();
export class UsersController {
    get = (req, res) => {
        res.status(200);
        service.getUsers().then(result => res.send(result));
    }

    getUser = (req, res) => {
        res.status(200);
        service.getUser(req.params.id).then(result => res.send(result));
    }

    add = (req, res) => {
        res.status(200).send(service.addUser(req.body));
    }

    update = (req, res) => {
        res.status(200).send(service.updateUser(req.params.id, req.body));
    }

    delete = (req, res) => {
        res.status(200).send(service.deleteUser(req.params.id));
    }

    login = (req, res) => {
        res.status(200).send(service.login(req.body.login, req.body.password));
    }

    addAvatar = async (req, res) => {
        res.status(200).send(await service.addAvatar(req.file.path, req.params.id));
        console.log(req.file);
    }
}

