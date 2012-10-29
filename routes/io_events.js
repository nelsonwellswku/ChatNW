exports.register = function(io) {

  io.sockets.on('connection', function(socket) { 
    socket.set('username', Math.random());

    socket.on('send message', function(data) {
      socket.get('username', function(err, username) {
        io.sockets.emit('echo message', {
          username: username,
          message: data.message
        });
      });
    });

  });

};
