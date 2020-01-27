import React from "react";
import { connect } from "react-redux";
import { addLetter, addLetterScore } from "../store/game";
import "./style/LetterTile.css";

class LetterTile extends React.Component {
  constructor() {
    super();

    // bind methods
    this.handlePointerOver = this.handlePointerOver.bind(this);
    this.setPointerDown = this.setPointerDown.bind(this);
    this.checkLetter = this.checkLetter.bind(this);
    // this.handleGestureEnd = this.handleGestureEnd.bind(this);
    // this.getGesturePointFromEvent = this.getGesturePointFromEvent.bind(this);

    
    // initialize proper event listeners
    this.eventHandlers = {};
    // this.initialTouchPos = {};

    if(window.PointerEvent) {
      this.eventHandlers = {
        onPointerDown: event => this.setPointerDown(event),
        onPointerOver: event => this.handlePointerOver(event)
        // onPointerUp: event => this.handleGestureEnd(event),
        // onPointerEnd: event => this.handleGestureEnd(event)
      }
    } 
    else {
      this.eventHandlers = {
        onMouseOver: event => this.handlePointerOver(event),
        onMouseDown: event => this.setPointerDown(event)
        // onMouseUp: event => this.handleGestureEnd(event)
      }
    }
  }

  componentDidMount() {}
  componentWillUnmount() {
    if(window.PointerEvent) {
      window.removeEventListener('pointerdown', this.setPointerDown);
      window.removeEventListener('pointerover', this.handlePointerOver);
    }
    window.removeEventListener('mousedown', this.setPointerDown);
    window.removeEventListener('mouseover', this.handlePointerOver);
  }

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

  setPointerDown(event) {
    event.preventDefault();

    // if(event.touches && event.touches.length > 1) {
    //   return;
    // }

    // if (window.PointerEvent) event.target.setPointerCapture(event.pointerId);

    // this.initialTouchPos = this.getGesturePointFromEvent(event);

    this.checkLetter(this.props.letter);
  }

  handlePointerOver(event) {
    if (this.props.pointerIsDown) this.checkLetter(this.props.letter);
  }

  render() {
    return (
      <div
        className={`letterTile ${
          this.props.seen.has(this.props.letter) > 0 ? "selected" : "unselected"
        }`}
        {...this.eventHandlers}
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
