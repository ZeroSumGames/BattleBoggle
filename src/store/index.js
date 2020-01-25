import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {
	boardReducer as board,
	letterReducer as letters,
	wordReducer as word,
  powerReducer as powers
} from './game'

// combine reducers here
const reducer = combineReducers({
	board,
	letters,
	word,
	powers
})

// include middlewares

const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)

const store = createStore(reducer, middleware)

export default store

// data we'll need
// p1score
// p2score
// currently selected letters
// current board
// dictionary
// letter score values and probabilities
//powers
//times used
//price
