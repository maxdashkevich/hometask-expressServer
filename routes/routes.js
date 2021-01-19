import express from 'express';
export const router = express.Router();

import {UsersController} from '../controllers/controller.js';
import {auth} from '../middlewares/auth.middleware.js';
import {validate} from '../middlewares/validation.middleware.js';
import { createUserSchema, updateUserSchema } from '../validation-schemes/user.scheme.js';

const controller = new UsersController();

router
    .get('/', controller.get)
    .post('/', validate(createUserSchema), controller.add)
    .put('/:id', auth('admin'), validate(updateUserSchema), controller.update)
    .delete('/:id', controller.delete)
    .post('/auth', controller.login);

