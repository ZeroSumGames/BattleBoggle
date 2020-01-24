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
			<Board />
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