import Joi from 'joi';

export const createUserSchema = Joi.object({
    name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]{2,30}$'))
        .required(),

    role: Joi.string().valid('admin', 'user')
    .required(),

    login: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9_]{5,20}$'))
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required()  
});

export const updateUserSchema = Joi.object({
    name: Joi.string()
        .pattern(new RegExp('^[a-zA-Z]{2,30}$')),

    role: Joi.string().valid('admin', 'user'),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))    
});