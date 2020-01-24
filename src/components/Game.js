import React from 'react'
import {connect} from 'react-redux'
import Board from './Board'
import {makeBoard, buildBoard, setLetters} from '../store/game'

class Game extends React.Component {
	constructor(props) {
		super(props)

		this.props.initializeLetters();

		this.props.initializeBoard(this.props.letters);
	}

	componentDidMount() {
	}

	render() {
		return (
			  <div className="game">
        <h1 className="title">Battle Boggle!</h1>
        <div className="head">
          <div>{`Round${"#"}`}</div>
          <div classname="playerScore">
            <div classname="player1Score"></div>
            <div classname="player2Score"></div>
          </div>
          <div classname="timer">
          </div>
        </div>
        <div className="body">
          <Board />
        </div>
      </div>
		)
	}
}

const mapStateToProps = state => {
	return {
		letters: state.letters
	}
}

const mapDispatchToProps = dispatch => {
	return {
		initializeLetters: letters => {
			dispatch(setLetters(letters))
		},
		initializeBoard: letters => {
			dispatch(buildBoard(makeBoard(letters)))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);