import React from "react";
import { connect } from "react-redux";
import LetterTile from "./LetterTile";
import { linearize } from "../utilities";
import ReactDOM from "react-dom";
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
      mouseIsDown: false
    };
  }

  componentDidMount() {
    // ReactDOM.findDOMNode(this).addEventListener('')
    // this.clicked = this.clicked.bind(this)
  }

  toggleMouseDown(event) {
    this.setState({ mouseIsDown: !this.state.mouseIsDown });
  }

  toggleMouseUp(event) {
    this.setState({ mouseIsDown: !this.state.mouseIsDown });
    // this.props.checkWord(this.props.wordScore)

    this.props.addP1Score(this.props.wordScore);
    this.props.clearWord();
    this.props.clearWordScore();

    console.log("fdsfsdf");
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
    wordScore: state.wordScore
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
