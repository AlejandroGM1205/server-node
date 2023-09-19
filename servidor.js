const http = require('http');
const host = '127.0.0.1';
const puerto = '8080';
const chalk = require('chalk')

const server = http.createServer((request,response) => {
    response.writeHead(200, {'Content-type': 'text/html'});
    const jsonResponse ={
        name: 'Alejandro Gutierrez Mora',
        message: '!Hola a todos¡'
    };
    response.end(JSON.stringify(jsonResponse));
})

server.listen(puerto, host, ()=>{
    console.log(chalk.green('El servidor esta corriendo: ' + host + ":" + puerto));
})
