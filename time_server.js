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
    `${year}-${addZero(month + 1)}-${addZero(day)} ${addZero(hour)}:${addZero(minutes)}\n`
  )
  socket.end()
});
server.listen(port);

function addZero(i) {
  if (i < 10) {
    return '0' + i;
  }
  return i;
}
