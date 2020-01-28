const express = require('express');
const socketio = require('socket.io');

const server = require('http').createServer();
const app = express();

const path = require('path');

const allLetters = {
    A: { id: 0, value: "A", points: 1 },
    B: { id: 1, value: "B", points: 4 },
    C: { id: 2, value: "C", points: 4 },
    D: { id: 3, value: "D", points: 3 },
    E: { id: 4, value: "E", points: 1 },
    F: { id: 5, value: "F", points: 4 },
    G: { id: 6, value: "G", points: 3 },
    H: { id: 7, value: "H", points: 3 },
    I: { id: 8, value: "I", points: 1 },
    J: { id: 9, value: "J", points: 10 },
    K: { id: 10, value: "K", points: 5 },
    L: { id: 11, value: "L", points: 3 },
    M: { id: 12, value: "M", points: 4 },
    N: { id: 13, value: "N", points: 2 },
    O: { id: 14, value: "O", points: 1 },
    P: { id: 15, value: "P", points: 4 },
    Q: { id: 16, value: "Q", points: 10 },
    R: { id: 17, value: "R", points: 1 },
    S: { id: 18, value: "S", points: 1 },
    T: { id: 19, value: "T", points: 1 },
    U: { id: 20, value: "U", points: 2 },
    V: { id: 21, value: "V", points: 5 },
    W: { id: 22, value: "W", points: 4 },
    X: { id: 23, value: "X", points: 8 },
    Y: { id: 24, value: "Y", points: 3 },
    Z: { id: 25, value: "Z", points: 10 }
};

function makeBoard(letters) {
  let ret = [];

  for (let i = 0; i < 16; i++) {
    ret.push({
		...letters[String.fromCharCode(Math.floor(Math.random() * 26) + 65)],
		row: Math.floor(i / 4),
		col: i % 4
    });
  }

  return ret;
}

let board = makeBoard(allLetters);


server.listen(Number(process.env.PORT)-1 || 2999, () => {
	if(process.env.PORT) console.log(`Serving on port ${process.env.PORT}`)
	else console.log("Couldn't find process.env.port...started serving on port 3000")
})

server.on('request', app);

app.use(express.static(path.resolve('../../public')));

app.get("*", (req, res) => {
	res.sendFile(path.resolve("../../public/index.html"));
})

const io = socketio(server);

io.on('connection', socket => {
	console.log(`${socket.id} has connected`);

	socket.emit('makeBoard', board);

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

io.on('SEND', socket => {
	console.log(socket.id);
})

