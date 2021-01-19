import express from 'express';
export const router = express.Router();

import {UsersController} from '../controllers/controller.js';
import {auth} from '../middlewares/auth.middleware.js';
import {info} from "../middlewares/info.middleware.js";

const controller = new UsersController();

router
    .get('/', info, controller.get)
    .post('/', info, controller.add)
    .put('/:id', auth('admin'), info, controller.update)
    .delete('/:id', info, controller.delete)
    .post('/auth', info, controller.login);

