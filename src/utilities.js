export function linearize(matrix) {
	let ret = [];
	for(let row of matrix){
		row.forEach((cell) => ret.push(cell))
	}

	return ret;
}