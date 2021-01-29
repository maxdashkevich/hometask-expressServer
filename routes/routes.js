import express from 'express';
import {UsersController} from '../controllers/controller.js';
import {auth} from '../middlewares/auth.middleware.js';
import {validate} from '../middlewares/validation.middleware.js';
import { createUserSchema, updateUserSchema } from '../validation-schemes/user.scheme.js';
import { upload } from "../middlewares/multer.middleware.js";

export const router = express.Router();

const controller = new UsersController();

router
    .get('/', controller.get)
    .get('/:id', controller.getUser)
    .post('/', validate(createUserSchema), controller.add)
    .put('/:id', auth('admin'), validate(updateUserSchema), controller.update)
    .delete('/:id', controller.delete)
    .post('/auth', controller.login)
    .post('/:id/avatar', upload, controller.addAvatar);