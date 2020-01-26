import React from "react";
import { connect } from "react-redux";
import Board from "./Board";
import Timer from "./Timer";
import ScoreBoard from "./ScoreBoard";
import Shop from "./Shop";
import CurrentWord from "./CurrentWord";
import {
  makeBoard,
  buildBoard,
  setLetters,
  makeDictionary
} from "../store/game";
import "./style/Game.css";
import { TrieNode, createTrie } from "../utilities/makeTrie";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.props.initializeLetters();
    
    this.state = {
      dictionary: createTrie(new TrieNode("")),
      foundWordsOnBoard: new Set(),
      round: 1
    };

    // bind class methods
    this.makeNewBoard = this.makeNewBoard.bind(this)
    this.clearFoundWords = this.clearFoundWords.bind(this)
    this.addFoundWord = this.addFoundWord.bind(this)
    this.canAddWord = this.canAddWord.bind(this)
    this.goNextRound = this.goNextRound.bind(this)

    this.goNextRound()
  }

  componentDidMount() {}

  clearFoundWords() {
    this.setState({foundWordsOnBoard: new Set()})
  }

  goNextRound() {
    this.setState({
      round: this.state.round + 1
    })

    this.makeNewBoard()
  }

  makeNewBoard() {
    this.props.initializeBoard(this.props.letters)
    this.clearFoundWords()
  }

  addFoundWord(wordString) {
    this.state.foundWordsOnBoard.add(wordString)
  }

  canAddWord(wordString) {
    return !this.state.foundWordsOnBoard.has(wordString)
  }

  render() {
    return (
      <div className="game">
        <h1 className="title">Battle Boggle!</h1>
        <div className="head">
          <div>{`Round #${this.state.round}`}</div>
          <div className="playerScore">
            <div className="Score">
              <ScoreBoard />
            </div>
          </div>
          <div className="timer">
            <Timer goNextRound={this.goNextRound}/>
          </div>
        </div>
        <div className="body">
          <Board 
            dictionary={this.state.dictionary}
            addFoundWord={this.addFoundWord} 
            canAddWord={this.canAddWord}
          />
        </div>
        <div className="current-word">
          <CurrentWord letters={this.props.wordLetters} />
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
    powers: state.powers,
    wordLetters: state.word
  };
};

const mapDispatchToProps = dispatch => {
  return {
    initializeLetters: letters => {
      dispatch(setLetters(letters));
    },
    initializeBoard: letters => {
      dispatch(buildBoard(makeBoard(letters)));
    }
    // initializeDictionary: () => {
    //   dispatch(makeDictionary())
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
