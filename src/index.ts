import colors from 'colors'
import server from './server.ts'
import db from './config/db.ts'

const port = process.env.PORT || 4000

async function startServer() {
    try {
        await db.authenticate()
        await db.sync()
        console.log(colors.bgGreen.bold('Conexión a la base de datos exitosa'))
        server.listen(port, () => {
            console.log(colors.bgCyan.bold(`REST API corriendo en el puerto ${port}`))
        })
    } catch (error) {
        console.log(colors.bgRed.bold('Error al conectar a la base de datos'))
    }
}

startServer()
