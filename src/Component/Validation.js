import React from 'react';

const validationComponent = (props) => {
	let validationMessage = 'Text too large';
	if (props.inputLenth <= 5) {
		validationMessage = 'Text too short';
	}
	return <div>{validationMessage}</div>;
};

export default validationComponent;
