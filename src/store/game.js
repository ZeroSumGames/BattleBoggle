// ACTION CREATORS


const BUILD_BOARD = 'BUILD_BOARD'
const INITIALIZE_LETTERS = 'INITIALIZE_LETTERS'
const ADD_LETTER = 'ADD_LETTER'
const USE_POWER = 'USE_POWER'
const CLEAR_WORD = 'CLEAR_WORD'
const ADD_LETTER_SCORE = 'ADD_LETTER_SCORE'
const CLEAR_WORD_SCORE = 'CLEAR_WORD_SCORE'
const ADD_P1_SCORE = 'ADD_P1_SCORE'
const CLEAR_P1_SCORE = 'CLEAR_P1_SCORE'


// MAKER FUNCTIONS

// function to make board based off of frequencies in the english language
export function makeBoard(letters) {
  let ret = [];


	for(let i = 0; i < 16; i++) {
		ret.push({
			...letters[String.fromCharCode((Math.floor(Math.random()*26)+65))],
			row: Math.floor(i/4),
			col: i%4
		})
	}


  return ret;
}

// INITIAL STATE

const initialState = {
	letters: {
		A: { id: 0, value: "A", points: 1 },
		B: { id: 1, value: "B", points: 4 },
		C: { id: 2, value: "C", points: 4 },
		D: { id: 3, value: "D", points: 2 },
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
		X: { id: 23, value: "X", points: 1 },
		Y: { id: 24, value: "Y", points: 1 },
		Z: { id: 25, value: "Z", points: 10 }
	},
	board: {},
	powers: [
		{
			id: 1,
			name: "smokeScreen",
			price: 100,
			used: 0,
			img: "./smokeScreen.png"
		},
		{
			id: 2,
			name: "smokeScreen",
			price: 100,
			used: 0,
			img: "./smokeScreen.png" // switch
		},
		{
			id: 3,
			name: "smokeScreen",
			price: 100,
			used: 0,
			img: "./smokeScreen.png"
		},
		{
			id: 4,
			name: "smokeScreen",
			price: 100,
			used: 0,
			img: "./smokeScreen.png"
		},
		{
			id: 5,
			name: "smokeScreen",
			price: 100,
			used: 0,
			img: "./smokeScreen.png"
		},
		{
			id: 6,
			name: "smokeScreen",
			price: 100,
			used: 0,
			img: "./smokeScreen.png"
		}
	],
    wordLetters: [],
	seen: new Set(),
	wordScore: 0,
	p1Score: 0,
	p2Score: 0
};


// ACTION CREATORS

export const buildBoard = board => {
  return {
    type: BUILD_BOARD,
    board
  };
};

export const setLetters = letters => {
  return {
    type: INITIALIZE_LETTERS,
    letters
  };
};

const usePower = power => {
  return {
    type: USE_POWER,
    power
  };
};

export const addLetter = letter => {
	return {
		type: ADD_LETTER,
		letter
	}
}



export const submitWord = (wordScore) => {
	return (dispatch) => {
		dispatch(clearWord())
		dispatch(addP1Score(wordScore))
		dispatch(clearWordScore())
	}
}

export const clearWord = () => {
	return {
		type: CLEAR_WORD
	}
}

export const addLetterScore = score => {
	return {
		type: ADD_LETTER_SCORE,
		score
	}
}

export const clearWordScore = () => {
	return {
		type: CLEAR_WORD_SCORE
	}
}

export const addP1Score = score => {
	return {
		type: ADD_P1_SCORE,
		score
	}
}

// REDUCERS

// keep track of what letters we've seen under the hood

export const wordReducer = (state = initialState.wordLetters, action, seen = initialState.seen) => {
	switch(action.type) {
		case ADD_LETTER:
			let letter = action.letter.letter
			let row = action.letter.row
			let col = action.letter.col

			if(!seen.has(letter)) {
				// validate via grid
				if(state.length === 0 || (Math.abs(row - state[state.length - 1].row) <= 1 && Math.abs(col - state[state.length - 1].col) <= 1)){
					seen.add(letter)
					return [...state, letter]
				}
				else return state
			}
			else return state
		case CLEAR_WORD:
			seen.clear()
			return []
		default: 
			return state
	}
}

export const wordScoreReducer = (state = initialState.wordScore, action) => {
	switch (action.type) {
		case ADD_LETTER_SCORE:
			return state + action.score
		case CLEAR_WORD_SCORE:
			return 0
		default:
			return state
	}
}

export const p1ScoreReducer = (state = initialState.p1Score, action) => {
	switch (action.type) {
		case ADD_P1_SCORE:
			return state + action.score
		case CLEAR_P1_SCORE:
			return 0
		default:
			return state
	}
}

export const letterReducer = (state = initialState.letters, action) => {
  return state;
};


export const boardReducer = (state = initialState.board, action) => {
  switch (action.type) {
    case BUILD_BOARD:
      return action.board;
    default:
      return state;
  }
};

export const powerReducer = (state = initialState.powers, action) => {
  switch (action.type) {
    case USE_POWER:
      return action.power;
    default:
      return state;
  }
};
