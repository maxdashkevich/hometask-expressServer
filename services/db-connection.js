import Sequelize from 'sequelize';

export const sequelize = new Sequelize('users', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    }
});