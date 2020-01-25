import React from 'react'
import {connect} from 'react-redux'

class LetterTile extends React.Component {
	constructor() {
		super()
		this.select = this.select.bind(this)
		this.setMouseDown = this.setMouseDown.bind(this)
	}

	componentDidMount() {

	}

	setMouseDown(event) {
		console.log(this.props.letter)
	}

	select(event) {
		if(this.props.mouseIsDown) console.log(this.props.letter)
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
	return {}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(LetterTile)