const io = require('socket.io')();

io.on('connection', (client) => {
  io.emit('welcome');

  client.on("message", (data) => {
    console.log(`New message from ${client.id}: ${data}`);
    io.emit('inmessage', 'AShok varma here');
  })
});

io.listen(18092);