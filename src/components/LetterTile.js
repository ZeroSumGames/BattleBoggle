import React from "react";
import { connect } from "react-redux";
import { addLetter, addLetterScore } from "../store/game";
import "./style/LetterTile.css";

class LetterTile extends React.Component {
  constructor() {
    super();
    this.select = this.select.bind(this);
    this.setMouseDown = this.setMouseDown.bind(this);
    this.checkLetter = this.checkLetter.bind(this);
  }

  componentDidMount() {}

  checkLetter(letter) {
    let row = this.props.row;
    let col = this.props.col;
    let seen = this.props.seen;
    let word = this.props.word;

    if (!seen.has(letter)) {
      // validate via grid
      if (
        word.length === 0 ||
        (Math.abs(row - word[word.length - 1].row) <= 1 &&
          Math.abs(col - word[word.length - 1].col) <= 1)
      ) {
        seen.add(letter);
        this.props.addLetter(letter);
        this.props.addLetterScore(Number(letter.points));
      }
    }
  }

  setMouseDown(event) {
    this.checkLetter(this.props.letter);
  }

  select(event) {
    if (this.props.mouseIsDown) this.checkLetter(this.props.letter);
  }

  render() {
    return (
      <div
        className={`letterTile ${
          this.props.seen.has(this.props.letter) > 0 ? "selected" : "unselected"
        }`}
        onMouseOver={event => this.select(event)}
        onMouseDown={event => this.setMouseDown(event)}
      >
        <div unselectable="on" className="number">
          {this.props.letter.points}
        </div>
        <div unselectable="on" className="letter">
          {this.props.letter.value}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    word: state.word
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addLetter: letter => dispatch(addLetter(letter)),
    addLetterScore: wordScore => dispatch(addLetterScore(wordScore))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LetterTile);
