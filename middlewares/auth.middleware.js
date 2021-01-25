import jwt from 'jsonwebtoken';
import {Users} from '../models/users-model.js'

export const auth = (role) => async (req, res, next) => {
    try {
        const [strategy, token] = req.header('Authorization').split(' ');
        const login = jwt.verify(token, 'secret');;
        const user = await Users.findByPk(req.params.id);

        if (user.role !== role || !user || login !== user.login) throw new Error('Incorrect role or invalid token')

        next();
    } catch (e) {
        res.status('401').send(e.message);
    }
}