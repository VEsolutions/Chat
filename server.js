var express                 = require('express'),
    app                     = express(),
    http                    = require('http').Server(app),
    io                      = require('socket.io')(http);

app.set('port', (process.env.PORT || 5000));

app.use('/css', express.static(__dirname + '/client/css'));
app.use('/js', express.static(__dirname + '/client/js'));
app.use('/assets', express.static(__dirname + '/client/assets'));

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

http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});