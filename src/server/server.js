const express = require('express');
const socketio = require('socket.io');

const server = require('http').createServer();
const app = express();

server.listen(3000, () => {
	console.log("Serving on port 3000")
})

server.on('request', app);

app.use(express.static(__dirname + '/public'));

app.get("*", (req, res) => {
	res.sendFile(__dirname + "/public/index.html");
})

const io = socketio(server);

io.on('connection', socket => {
	console.log(socket.id);
	socket.on('subscribeToTimer', (interval) => {
		console.log('client is subscribing to timer with interval ', interval);
		setInterval(() => {
			socket.emit('timer', new Date());
		}, interval);
	});
	socket.on('updatePoints', (points) => {
		console.log(points);
		socket.broadcast.emit('p2ScoreUpdated', points);
	})
})

/* 
when points updated
send points to other player
*/

io.on('SEND', socket => {
	console.log(socket.id);
})