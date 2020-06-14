import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Component/Validation';
import Char from './Component/CharComponent';

class App extends Component {
	state = {
		userInput: ''
	};
	inputChangeHandler = (event) => {
		this.setState({ userInput: event.target.value });
	};
	deleteCharHandler = (index) => {
		const text = this.state.userInput.split('');
		text.splice(index, 1);
		const updatedChar = text.join('');
		this.setState({ userInput: updatedChar });
	};
	render() {
		const charList = this.state.userInput.split('').map((ch, index) => {
			return <Char character={ch} key={index} clicked={() => this.deleteCharHandler(index)}/>;
		});
		return (
			<div className='App'>
				<form>
					<input type='text' onChange={this.inputChangeHandler} value={this.state.userInput} />
					<p>{this.state.userInput}</p>
					<ValidationComponent
						inputLength={this.state.userInput.length}
					/>
					{charList}
				</form>
			</div>
		);
	}
}

export default App;
