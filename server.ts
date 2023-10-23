import express, {Request, Response} from 'express'
import { sequelize } from './db/conexao'

const app = express()

app.listen('3000', () => {
    console.log('Server is running!')
    sequelize.sync({
        alter: true,

    }).then(() => {
        console.log("Database sincronizado!")
    }).catch(() => {
        console.error("Error ao sincronizar")
    })
})


app.get('/', (request: Request, response: Response) => {
    response.send('Hello World! :D')
})
