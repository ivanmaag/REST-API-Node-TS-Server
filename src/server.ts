import express from 'express'
import router from './router.ts'

// Instancia de Express
const server = express()

// Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

server.get('/', (req, res) => {
    res.json({ message: 'Desde API' })
})

export default server
