import express from 'express';
export const router = express.Router();

import {UsersController} from '../controllers/controller.js';

const controller = new UsersController();

router
    .get('/', controller.get)
    .post('/', controller.add)
    .put('/:id', controller.update)
    .delete('/:id', controller.delete);

