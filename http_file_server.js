const http = require('http');
const fs = require('fs');
const portNumber = process.argv[2];
const filePath = process.argv[3];

const server = http.createServer(function (req, res){
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
  readStream.on('error', function(err) {
    res.end(err);
  });
}).on('error', console.error);

server.listen(portNumber);
console.log(`Listening on port ${portNumber}`);
