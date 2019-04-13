var finalhandler = require('finalhandler');
var Router = require('router');
const fs = require('fs');
const imageFolder = './assets';
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
let images = [];

fs.readdir(imageFolder).forEach(file => {
    console.log(file);
});

var router = Router()
router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    router(req, res, finalhandler(req, res))
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

