import React, { Component } from "react";
import "./AddToList.css";

class AddToList extends Component {
	state = {};
	handleAddToList = () => {
		console.log("add item to the list");
	};
	render() {
		return (
			<>
				<input type='text' placeholder='Add a product to list' />
				<button className='btnAdd' onClick={this.handleAddToList}>
					Add
				</button>
			</>
		);
	}
}

export default AddToList;
