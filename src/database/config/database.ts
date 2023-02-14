import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'root',
  database: 'list-resttrict',
  host: 'localhost',
  port: 33060,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
};

module.exports = config;
