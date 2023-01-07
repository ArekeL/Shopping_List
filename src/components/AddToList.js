import React, { Component } from "react";
import "./AddToList.css";

class AddToList extends Component {
	state = {
		text: "",
		active: true,
	};

	handleText = (e) => {
		this.setState({
			text: e.target.value,
		});
	};

	handleAddToList = () => {
		const { text } = this.state;
		if (text.length > 2) {
			const addItem = this.props.addItem(text);

			if (addItem) {
				console.log("trele morele");
				this.setState({
					text: "",
				});
			}
		}
	};

	render() {
		return (
			<>
				<input
					type='text'
					placeholder='Add a product to list'
					value={this.state.text}
					onChange={this.handleText}
				/>
				<button className='btnAdd' onClick={this.handleAddToList}>
					Add
				</button>
			</>
		);
	}
}

export default AddToList;
