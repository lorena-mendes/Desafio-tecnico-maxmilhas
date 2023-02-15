import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';


export default class Cpfs extends Model {
  declare id: number;
  declare cpf: string;
}

Cpfs.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cpf: {
    type: STRING,
    allowNull: false,
  },
  created_at: {
    type: DATE
  }
}, {
  sequelize: db,
  modelName: 'cpfs',
  timestamps: false,
  underscored: true,
});
