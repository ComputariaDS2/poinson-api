import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../db/conexao'
export class Usuario extends Model{
    public id!: number; 
    public login!: string;
    public senha!: string;
    public email!: string;
    public categoria!: string;
    public readonly date_criacao!: Date
}
Usuario.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true, 
        primaryKey: true
    },
    login: {
        type: DataTypes.STRING, 
        allowNull: false,
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false,
    }


},{
    tableName: 'usuarios',
    sequelize
}
)