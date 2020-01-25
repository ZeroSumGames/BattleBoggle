import React from 'react'
import {connect} from 'react-redux'
import {addLetter} from '../store/game'

class LetterTile extends React.Component {
	constructor() {
		super()
		this.select = this.select.bind(this)
		this.setMouseDown = this.setMouseDown.bind(this)
	}

	componentDidMount() {

	}

	setMouseDown(event) {
		this.props.addLetter({letter: this.props.letter, row: this.props.row, col: this.props.col})
		// console.log(this.props.word)
	}

	select(event) {
		if(this.props.mouseIsDown) this.props.addLetter({letter: this.props.letter, row: this.props.row, col: this.props.col})
		// console.log(this.props.word)
	}

	render() {
		let styles = {
			width:'50px',
			height:'50px',
			border:'1px solid #000',
			display: 'inline-block'
		}

		return (
			<div style={styles} onMouseOver={(event) => this.select(event)} onMouseDown={(event) => this.setMouseDown(event)}>
				{this.props.letter.value} {this.props.letter.points}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		word: state.word
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addLetter: letter => dispatch(addLetter(letter))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterTile)