console.log('Estoy usando nodemon')


const http = require('node:http')
const moment = require('moment')
    //console.log(http)
let contadorVisitas = 0
const server = http.createServer((request, response) => {

    //console.log(request.url)
    //console.log(response.method)
    const { method, url } = request
    if (method === 'GET') {
        if (url === '/') {
            //console.log(response)
            response.writeHead(200, { 'content-type': 'text/html' })
            response.write('<h2> Hola soy un servidor HTTP con NODE</h2>')
            response.write(`<h2 style="blueviolet">Visitas : ${++contadorVisitas}</h2>`)
            response.end()
        } else {
            response.writeHead(200, { 'content-type': 'text/html' })
            response.end(`<h2 syle= "color:crimson"> Error 404. Ruta <span style="color:red">${url}</span> No implementada </h2>`)
        }
    }

})

const PORT = process.env.PORT || 8080

server.listen(PORT, err => {
    if (err) return console.log(`Error en el servidor ${err}`)
    console.log(`Servidor HTTP escuchando en el port ${PORT}`)
})