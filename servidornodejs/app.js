const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hola, mundo desde un servidor Node.js');
});

server.listen(3000,'localhost',()=>{
    console.log('Servidor Node.js en ejecucion en http://localhost:3000/');
});

//si quiero usar `` en vez de '' tengo que hacer `http//$(hostname)$(port)/`
// const hostname = '127.0.01';
// const port= 3000;