import openSocket from 'socket.io-client';
const socket = openSocket(`localhost:${Number(process.env.PORT) - 1 || 2999}`); //'https://secure-tundra-45786.herokuapp.com:41248'

console.log(Number(process.env.PORT) - 1);

export function subscribeToTimer(callback) {
	socket.on('timer', timestamp => callback(null, timestamp));
	socket.emit('subscribeToTimer', 1000);
}

export function subscribeToP2Points (callback) {
	socket.on('p2ScoreUpdated', (points) => {
		callback(points);
	});
}

// called in Game under 'addFoundWord' method
export function sendUpdatedScore (points) {
	socket.emit('updatePoints', points)
}

export function subscribeToBoard (callback) {
	socket.on('makeBoard', (board) => {
		callback(board);
	})
}