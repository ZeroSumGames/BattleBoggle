// import {linearize} from '/utilites'
// import {TrieNode, createTrie} from './makeTrie'

// ACTION CREATORS

const BUILD_BOARD = "BUILD_BOARD";
const INITIALIZE_LETTERS = "INITIALIZE_LETTERS";
const ADD_LETTER = "ADD_LETTER";
const USE_POWER = "USE_POWER";
const CLEAR_WORD = "CLEAR_WORD";
const ADD_LETTER_SCORE = "ADD_LETTER_SCORE";
const CLEAR_WORD_SCORE = "CLEAR_WORD_SCORE";
const ADD_P1_SCORE = "ADD_P1_SCORE";
const CLEAR_P1_SCORE = "CLEAR_P1_SCORE";
const ADD_P2_SCORE = "ADD_P2_SCORE";
const CLEAR_P2_SCORE = "CLEAR_P2_SCORE";
const SET_P2_SCORE = "SET_P2_SCORE";

// const MAKE_DICTIONARY = 'MAKE_DICTIONARY'

// MAKER FUNCTIONS

// function to make board based off of frequencies in the english language
export function makeBoard(letters) {
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

// INITIAL STATE

const initialState = {
  letters: {},
  board: [],
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

// export const makeDictionary = () => {
// 	return {type: MAKE_DICTIONARY}
// }

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
  };
};

export const submitWord = wordScore => {
  return dispatch => {
    dispatch(clearWord());
    dispatch(addP1Score(wordScore));
    dispatch(clearWordScore());
  };
};

export const clearWord = () => {
  return {
    type: CLEAR_WORD
  };
};

export const addLetterScore = score => {
  return {
    type: ADD_LETTER_SCORE,
    score
  };
};

export const clearWordScore = () => {
  return {
    type: CLEAR_WORD_SCORE
  };
};

export const addP1Score = score => {
  return {
    type: ADD_P1_SCORE,
    score
  };
};

export const addP2Score = score => {
  return {
    type: ADD_P2_SCORE,
    score
  };
}

export const setP2Score = score => {
  return {
    type: SET_P2_SCORE,
    score
  }
}

// REDUCERS

export const wordReducer = (
  state = initialState.wordLetters,
  action,
  seen = initialState.seen
) => {
  switch (action.type) {
    case ADD_LETTER:
      return [...state, action.letter];
    case CLEAR_WORD:
      return [];
    default:
      return state;
  }
};

export const wordScoreReducer = (state = initialState.wordScore, action) => {
  switch (action.type) {
    case ADD_LETTER_SCORE:
      return state + action.score;
    case CLEAR_WORD_SCORE:
      return 0;
    default:
      return state;
  }
};

export const p1ScoreReducer = (state = initialState.p1Score, action) => {
  switch (action.type) {
    case ADD_P1_SCORE:
      return state + action.score;
    case CLEAR_P1_SCORE:
      return 0;
    default:
      return state;
  }
};

export const p2ScoreReducer = (state = initialState.p2Score, action) => {
  switch (action.type) {
    case ADD_P2_SCORE:
      return state + action.score;
    case CLEAR_P2_SCORE:
      return 0;
    case SET_P2_SCORE:
      return action.score;
    default:
      return state;
  }
};

// export const dictionaryReducer = (state = initialState.dictionary, action) => {
// 	let head = createTrie(new TrieNode(''))
// 	return head
// }

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
