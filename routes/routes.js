import express from 'express';
export const router = express.Router();

import {UsersController} from '../controllers/controller.js';

router
    .get('/', UsersController.get)
    .post('/', UsersController.add)
    .put('/:id', UsersController.update)
    .delete('/:id', UsersController.delete);

