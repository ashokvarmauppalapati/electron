const io = require('socket.io-client');
const socket = io(`http://localhost:${process.env.SOCKET_PORT}`);

socket.on('welcome', () => {
  console.log('on welcome : welcome received renderer'); // displayed
});
socket.on('error', (e) => {
  console.log(e); // displayed ?
});
socket.on('inmessage', (data) => {
    console.log(`New message from ${socket.id}: ${data}`); // displayed
});
socket.on('connect', () => {
  console.log("connected renderer"); // displayed
  socket.emit('message', "Who is there?");
});