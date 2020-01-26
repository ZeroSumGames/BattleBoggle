import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import Timer from "./Timer"
import { makeBoard, buildBoard, setLetters, makeDictionary } from "../store/game";
import Shop from "./Shop";
import "./style/Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.props.initializeLetters();

    this.props.initializeBoard(this.props.letters);

    this.props.initializeDictionary()
  }

  componentDidMount() {}

  render() {
    return (
      <div className="game">
        <h1 className="title">Battle Boggle!</h1>
        <div className="head">
          <div>{`Round${"#"}`}</div>
          <div className="playerScore">
            <div className="player1Score"></div>
            <div className="player2Score"></div>
          </div>
          <div className="timer">
            <Timer />
          </div>
        </div>
        <div className="body">
          <Board />
        </div>
        <div className="footer">
          <Shop />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    letters: state.letters,
    powers: state.powers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeLetters: letters => {
      dispatch(setLetters(letters));
    },
    initializeBoard: letters => {
      dispatch(buildBoard(makeBoard(letters)));
    },
    initializeDictionary: () => {
      dispatch(makeDictionary())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
