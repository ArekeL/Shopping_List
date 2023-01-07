import React, { Component } from "react";
import "./App.css";
import AddToList from "./AddToList";
import ListItems from "./ListItems";

class App extends Component {
	state = {
		items: [
			{
				id: 0,
				text: "3kg marchewki",
				active: true,
			},
			{
				id: 1,
				text: "2 wody gazowane",
				active: true,
			},
			{
				id: 2,
				text: "Drukarka",
				active: true,
			},
			{
				id: 3,
				text: "Opał na zimę",
				active: true,
			},
		],
	};

	handleChangeItemStatus = () => {
		console.log("item bought");
	};
	handleClearAll = () => {
		console.log("Clear all items");
	};
	handleClearDone = () => {
		console.log("Clear done items");
	};
	render() {
		return (
			<div className='App'>
				<h1>Shopping List</h1>
				<AddToList />
				<ListItems
					items={this.state.items}
					chengeItemStatus={this.handleChangeItemStatus}
					clearAll={this.handleClearAll}
					clearDone={this.handleClearDone}
				/>
			</div>
		);
	}
}

export default App;
