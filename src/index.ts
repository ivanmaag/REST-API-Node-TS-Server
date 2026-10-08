import colors from 'colors'
import server from './server.ts'

const port = process.env.PORT || 4000

server.listen(port, () => {
    console.log(colors.bgCyan.bold(`REST API corriendo en el puerto ${port}`));
})
