import jwt from 'jsonwebtoken';
import {users} from '../services/service.js';

export const auth = (role) => (req, res, next) => {
    try {
        const [strategy, token] = req.header('Authorization').split(' ');
        const login = jwt.verify(token, 'secret');;
        const index = users.findIndex(el => el.login === login);

        if (users[index].role !== role || index === -1) throw new Error('Incorrect role or invalid token');

        next();
    } catch (e) {
        res.status('401').send(e.message);
    }
}