import {UsersService} from '../services/service.js';

const service = new UsersService();
export class UsersController {
    get = (req, res) => {
        res.status(200);
        service.getUsers().then(result => res.send(result));
    }

    add = (req, res) => {
        res.status(200).send(service.addUser(req.body));
    }

    update = (req, res) => {
        res.status(200).send(service.updateUser(req.body, req.params.id));
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

    getAvatar = async (req, res) => {
        res.status(200).header({'Content-Type': 'image/jpeg'}).sendFile(await service.getAvatar(req.params.id));
    }
}

