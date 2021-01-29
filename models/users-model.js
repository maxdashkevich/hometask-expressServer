import pkg from 'sequelize';
import {sequelize} from '../services/db-connection.js';
import bcrypt from 'bcrypt';

const {Sequelize, Model} = pkg;

export class Users extends Model {};
Users.init({
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        set(value) {
            this.setDataValue('password', bcrypt.hashSync(value, bcrypt.genSaltSync(10)));
        }
    },
    avatar: {
        type: Sequelize.STRING
    }
}, {
    sequelize,
    modelName: 'users'
});