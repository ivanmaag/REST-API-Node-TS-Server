import express from 'express'
import colors from 'colors'
import router from './router.ts'
import db from './config/db.ts'

// Conectar a base de datos

async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgGreen.bold('Conexión a la base de datos exitosa'))
    } catch (error) {
        // console.log(error)
        console.log(colors.bgRed.bold('Error al conectar a la base de datos'))
    }
}

connectDB()

// Instancia de Express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

export default server
