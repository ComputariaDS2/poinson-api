"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conexao_1 = require("./db/conexao");
const app = (0, express_1.default)();
app.listen('3000', () => {
    console.log('Server is running!');
    conexao_1.sequelize.sync({
        alter: true,
    }).then(() => {
        console.log("Database sincronizado!");
    }).catch(() => {
        console.error("Error ao sincronizar");
    });
});
app.get('/', (request, response) => {
    response.send('Hello World! :D');
});

