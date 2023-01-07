import React, { Component } from "react";
import "./App.css";
import AddToList from "./AddToList";
import ListItems from "./ListItems";
import { confirmAlert } from "react-confirm-alert"; // Import

class App extends Component {
	counter = 4; // we have 4 itemse in state
	state = {
		items: [
			{
				id: 0,
				text: "5kg pomidorów malinowych twardych",
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

	handleChangeItemStatus = (id) => {
		const items = [...this.state.items];
		items.forEach((item) => {
			if (item.id === id) {
				item.active = false;
			}
		});
		this.setState({
			items,
		});
	};
	handleClearAll = () => {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='custom-ui'>
						<h1>Are you sure?</h1>
						<p>You want to clear this list?</p>
						<button onClick={onClose}>No</button>
						<button
							onClick={() => {
								this.setState({
									items: [],
								});
								onClose();
							}}>
							Yes, Delete it!
						</button>
					</div>
				);
			},
		});
	};
	handleClearDone = () => {
		let items = [...this.state.items];
		items = items.filter((item) => item.active === true);

		this.setState({
			items,
		});
	};
	addItem = (text) => {
		const item = {
			id: this.counter,
			text, // text form imnput
			active: true,
		};
		this.counter++;

		this.setState((prevState) => ({
			items: [...prevState.items, item],
		}));
		return true;
	};
	render() {
		return (
			<div className='App'>
				<h1>Shopping List</h1>
				<AddToList addItem={this.addItem} />
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
