import React from 'react'

const LetterTile = props => {
	let styles = {
		width:'50px',
		height:'50px',
		border:'1px solid #000',
		display: 'inline-block'
	}
	// console.log(props);
	return (
		<div style={styles}>
			{props.letter.value} {props.letter.points}
		</div>
	)
}

export default LetterTile