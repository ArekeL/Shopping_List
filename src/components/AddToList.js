import React, { Component } from "react";

class AddToList extends Component {
	state = {};
	handleAddToList = () => {
		console.log("add item to the list");
	};
	render() {
		return (
			<>
				<input type='text' />
				<button onClick={this.handleAddToList}>Add</button>
			</>
		);
	}
}

export default AddToList;
