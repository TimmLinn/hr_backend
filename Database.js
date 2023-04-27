import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_SERVER,
  dialect: 'mssql',
  logging: false,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  }
});

//console.log(sequelize.config);

export default sequelize;
