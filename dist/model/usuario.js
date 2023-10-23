"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const sequelize_1 = require("sequelize");
const conexao_1 = require("../db/conexao");
class Usuario extends sequelize_1.Model {
}
exports.Usuario = Usuario;
Usuario.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    login: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    senha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    categoria: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
}, {
    tableName: 'usuarios',
    sequelize: conexao_1.sequelize
});
