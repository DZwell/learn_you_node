const net = require('net');
const port = process.argv[2];
const date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let hour = date.getHours();
let minutes = date.getMinutes();

const server = net.createServer(function listener(socket) {
  socket.write(
    `${year}-${addZero(month + 1)}-${day} ${hour}:${minutes}\n`
  )
  socket.end()
});
server.listen(port);

function addZero(i) {
  return i < 10 ? '0' + i : i
}
