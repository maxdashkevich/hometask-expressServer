import express from 'express';
export const router = express.Router();

import {UsersController} from '../controllers/controller.js';
import {auth} from '../middlewares/auth.middleware.js';

const controller = new UsersController();

router
    .get('/', controller.get)
    .post('/', controller.add)
    .put('/:id', auth('admin'), controller.update)
    .delete('/:id', controller.delete)
    .post('/auth', controller.login);

