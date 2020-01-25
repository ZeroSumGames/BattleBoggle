import React from "react";
import { connect } from "react-redux";
import LetterTile from "./LetterTile";
import { linearize } from "../utilities";
import ReactDOM from "react-dom";
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

  render() {
    let board = this.props.board;

    return (
      <div
        className="board"
        onMouseDown={event => this.toggleMouseDown(event)}
        onMouseUp={event => this.toggleMouseDown(event)}
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
    board: state.board
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
