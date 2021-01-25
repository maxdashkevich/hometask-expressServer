import pkg from 'sequelize';
const {Sequelize, Model} = pkg;
// import {Sequelize, Model} from 'sequelize';
import {sequelize} from '../services/db-connection.js';
import bcrypt from 'bcrypt';

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
    }
}, {
    sequelize,
    modelName: 'users'
});