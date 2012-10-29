var socket = io.connect("http://localhost");

$(function() {
  $("button").click(function() {
    socket.emit('send message', {
      message: $('textarea').val()
    });   
  });
});

socket.on('echo message', function(data) {
  $('#recent_messages').append('<div><strong>' + data.username + '</strong>: ' + data.message + '</div>');
});
