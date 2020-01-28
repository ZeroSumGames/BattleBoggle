const express = require('express');
const socketio = require('socket.io');

const server = require('http').createServer();
const app = express();

const path = require('path');

const allLetters = {
    A: { id: 0, value: "A", points: 1, frequency: 10 },
    B: { id: 1, value: "B", points: 4, frequency: 2},
    C: { id: 2, value: "C", points: 4, frequency: 5},
    D: { id: 3, value: "D", points: 3, frequency: 4},
    E: { id: 4, value: "E", points: 1, frequency: 15},
    F: { id: 5, value: "F", points: 4, frequency: 2},
    G: { id: 6, value: "G", points: 3, frequency: 3},
    H: { id: 7, value: "H", points: 3, frequency: 7},
    I: { id: 8, value: "I", points: 1, frequency: 8},
    J: { id: 9, value: "J", points: 10, frequency: 1},
    K: { id: 10, value: "K", points: 5, frequency: 1},
    L: { id: 11, value: "L", points: 3, frequency: 4},
    M: { id: 12, value: "M", points: 4, frequency: 3},
    N: { id: 13, value: "N", points: 2, frequency: 7},
    O: { id: 14, value: "O", points: 1, frequency: 8},
    P: { id: 15, value: "P", points: 4, frequency: 2},
    Q: { id: 16, value: "Q", points: 10, frequency: 1},
    R: { id: 17, value: "R", points: 1, frequency: 6},
    S: { id: 18, value: "S", points: 1, frequency: 6},
    T: { id: 19, value: "T", points: 1, frequency: 9},
    U: { id: 20, value: "U", points: 2, frequency: 5},
    V: { id: 21, value: "V", points: 5, frequency: 1},
    W: { id: 22, value: "W", points: 4, frequency: 2},
    X: { id: 23, value: "X", points: 8, frequency: 1},
    Y: { id: 24, value: "Y", points: 3, frequency: 2},
    Z: { id: 25, value: "Z", points: 10, frequency: 1}
};

function makeBoard(letters) {
  let ret = [];

  // set letter probs
  let choices = [];
  Object.keys(allLetters).forEach((letter) => {
    for(let i = 0; i < allLetters[letter].frequency; i++) choices.push(allLetters[letter]);
  });

  // build board
  for (let i = 0; i < 16; i++) {
    ret.push({
        ...choices[Math.floor(Math.random() * choices.length)],
		// ...letters[String.fromCharCode(Math.floor(Math.random() * 26) + 65)],
		row: Math.floor(i / 4),
		col: i % 4
    });
  }

  return ret;
}

let board = makeBoard(allLetters);


server.listen(Number(process.env.PORT)-1 || 2999, () => {
	if(process.env.PORT) console.log(`Serving on port ${Number(process.env.PORT) - 1}`)
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

