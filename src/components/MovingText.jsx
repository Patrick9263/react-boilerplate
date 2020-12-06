import React, { useState, useEffect } from 'react';

const MovingText = () => {
	const [top, settop] = useState(0);
	const [left, setleft] = useState(0);

	const styles = {
		marginTop: `${top.toString()}px`,
		marginLeft: `${left.toString()}px`,
	};

	const speed = 20;
	const handleKeyDown = e => {
		switch (e.keyCode) {
		case 87: // w key
			if (top >= speed) settop(top - speed);
			break;
		case 65: // a key
			if (left >= speed) setleft(left - speed);
			break;
		case 83: // s key
			settop(top + speed);
			break;
		case 68: // d key
			setleft(left + speed);
			break;

		default:
			break;
		}
	};

	const value = '';
	const inputStyle = {
		width: '100%',
		height: '100vh',
		border: 'none',
		color: 'transparent',
		outline: 'none',
		'input:focus': 'outline: none',
		'input.middle': 'outlineWidth: 0',
		cursor: 'default',
	};
	return (
		<React.Fragment>
			<h1 style={styles} >Movable Text</h1>
			<input type='text' onKeyDown={handleKeyDown} style={inputStyle} value={value} />
		</React.Fragment>
	);
};

export default MovingText;
