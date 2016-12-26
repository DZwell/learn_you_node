const http = require('http');
const map = require('through2-map');
const portNumber = process.argv[2];
var events = require('events'),
EventEmitter = events.EventEmitter,
rr = new EventEmitter();
rr.setMaxListeners(12);

const options = {
  port: portNumber,
  method: 'POST',
  path: '/'
};


const server = http.createServer(function(req, res) {
  req.on('data', function() {
    req.pipe(map(function(chunk) {
      return chunk.toString().toUpperCase();
    })).pipe(res)
  }).on('close', function() {
    res.end();
  })
}).on('error', console.error);

server.listen(portNumber);
