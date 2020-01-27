import React from "react";
import { connect } from "react-redux";
import LetterTile from "./LetterTile";
import {
  submitWord,
  clearWordScore,
  addP1Score,
  clearWord
} from "../store/game";

// import {makeBoard} from '../store/game'
import "./style/Board.css";

class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      pointerIsDown: false,
      seen: new Set()
    };

    // bind methods
    this.validateWord = this.validateWord.bind(this);
    this.resetFoundWords = this.resetFoundWords.bind(this);
    this.togglePointerDown = this.togglePointerDown.bind(this);
    this.togglePointerUp = this.togglePointerUp.bind(this);

    // initialize proper event listeners
    this.eventHanlders = {}

    if(window.PointerEvent) {
    	this.eventHandlers = {
    		onPointerDown: event => this.togglePointerDown(event),
    		onPointerUp: event => this.togglePointerUp(event)
    	}
    }
    else {
    	this.eventHandlers = {
    		onMouseUp: event => this.togglePointerUp(event),
    		onMouseDown: event => this.togglePointerUp(event)
    	}
    }

  }

  componentDidMount() {
  }

  componentWillUnmount() {
  	if(window.PointerEvent) {
  		window.removeEventListener('pointerdown', this.togglePointerDown);
		window.removeEventListener('pointerup', this.togglePointerUp)
  	}
  }

  resetFoundWords() {
  	this.setState({foundWords: new Set()})
  }

  togglePointerDown(event) {
    this.setState({ pointerIsDown: !this.state.pointerIsDown });
  }

  async togglePointerUp(event) {
    this.setState({
      pointerIsDown: !this.state.pointerIsDown,
      seen: new Set()
    });

    let validate = this.validateWord(this.props.word)

    if (validate.res) {
      await this.props.addP1Score(this.props.wordScore);
      this.props.addFoundWord(validate.wordStringVal);
    }
    this.props.clearWord();
    this.props.clearWordScore();
  }

  validateWord(word) {

  	let curr = this.props.dictionary
  	let wordStringVal = ""

  	for(let letter of word){
  		let currLetter = letter.value
  		if(!curr.children[currLetter]) return {res: false, wordStringVal: wordStringVal}
  		curr = curr.children[currLetter]
  		wordStringVal += currLetter
  	}

  	if(curr.endOfWord && this.props.canAddWord(wordStringVal)){
  		return {res: true, wordStringVal: wordStringVal}
  	}

  	return {res: false, wordStringVal: wordStringVal}

  }

  render() {
    let board = this.props.board;

    return (
      <div
        className="board"
 		   {...this.eventHandlers}
      >
        {board &&
          board.map((letter, i) => {
            return (
              <LetterTile
                pointerIsDown={this.state.pointerIsDown}
                letter={letter}
                key={i}
                row={Math.floor(i / 4)}
                col={i % 4}
                seen={this.state.seen}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    board: state.board,
    wordScore: state.wordScore,
    word: state.word
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkWord: wordScore => submitWord(wordScore),
    addP1Score: wordScore => dispatch(addP1Score(wordScore)),
    clearWord: () => dispatch(clearWord()),
    clearWordScore: () => dispatch(clearWordScore())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
