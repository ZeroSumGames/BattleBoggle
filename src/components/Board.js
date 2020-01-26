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
      mouseIsDown: false,
      seen: new Set(),
      foundWords: new Set()
    };

    this.validateWord = this.validateWord.bind(this);
  }

  componentDidMount() {
    // ReactDOM.findDOMNode(this).addEventListener('')
    // this.clicked = this.clicked.bind(this)
  }

  toggleMouseDown(event) {
    this.setState({ mouseIsDown: !this.state.mouseIsDown });
  }

  toggleMouseUp(event) {
    this.setState({
      mouseIsDown: !this.state.mouseIsDown,
      seen: new Set()
    });

    if (this.validateWord(this.props.word)) {
      this.props.addP1Score(this.props.wordScore);
    }
    this.props.clearWord();
    this.props.clearWordScore();
  }

  validateWord(word) {
    let curr = this.props.dictionary;
    let wordStringVal = "";

    for (let letter of word) {
      let currLetter = letter.value;
      if (!curr.children[currLetter]) return false;
      curr = curr.children[currLetter];
      wordStringVal += currLetter;
    }

    if (curr.endOfWord && !this.state.foundWords.has(wordStringVal)) {
      this.state.foundWords.add(wordStringVal);
      return true;
    }

    return false;
  }

  render() {
    let board = this.props.board;

    return (
      <div
        className="board"
        onMouseDown={event => this.toggleMouseDown(event)}
        onMouseUp={event => this.toggleMouseUp(event)}
      >
        {board &&
          board.map((letter, i) => {
            return (
              <LetterTile
                mouseIsDown={this.state.mouseIsDown}
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
