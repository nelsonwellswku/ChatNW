/* Dependencies */
var express = require('express')
  , io = require('socket.io')
  , routes = require('./routes/http.js') 
  , events = require('./routes/events.js')

/* Start up the HTTP and socket.io servers */
var app = express()
  , server = app.listen(80)
  , io = io.listen(server);

/* App configuration options */
app.configure(function() {
  app.set('view engine', 'jade');
  app.set('views', 'views');
  app.use(express.static(__dirname + '/public'));
});

routes.register(app);
events.register();

