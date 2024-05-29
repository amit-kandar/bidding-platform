import { Sequelize } from 'sequelize';

process.env.USER = 'root'

const sequelize = new Sequelize(process.env.DB || '', process.env.USER || '', process.env.PASSWORD || '', {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false
});

export default sequelize;
