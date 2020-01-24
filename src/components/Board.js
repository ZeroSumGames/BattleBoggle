import React from 'react'
import {connect} from 'react-redux'
import LetterTile from './LetterTile'
import {linearize} from '../utilities'
// import {makeBoard} from '../store/game'

class Board extends React.Component {
	componentDidMount() {

	}

	render() {
		let board = linearize(this.props.board);

		return (
			<div>
				{board && board.map((letter,i) => {
					return (
						<LetterTile letter={letter} key={i}/>
					)
				})}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		board: state.board
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

