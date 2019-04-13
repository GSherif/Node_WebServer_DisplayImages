const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var finalhandler = require('finalhandler');
var Router = require('router');
const fs = require('fs');
const imageFolder = './assets';
const images = [];

var router = Router()
router.get('/', function (req, res) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    fs.readdir(imageFolder, (err, files) => {
        files.forEach(file => {
            images.push(file);
        });
        res.end(JSON.stringify(images));
    });

})

router.get('/:fileName', function (req, res) {
    fs.readFile(`./assets/${req.params.fileName}`, (err, fileBuffer) => {
        if (err) {
            res.statusCode = 404;
            res.end('Not found');
        } else {
            res.end(fileBuffer)
        }
    });

})

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    router(req, res, finalhandler(req, res))
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});