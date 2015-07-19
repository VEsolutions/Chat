var express                 = require('express'),
    app                     = express(),
    http                    = require('http').Server(app),
    io                      = require('socket.io')(http);

app.use('/js', express.static(__dirname + '/client/js'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/client/views/index.html');
});

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
})