import React, { Component } from "react";
import "./App.css";
import AddToList from "./AddToList";
import List from "./List";

class App extends Component {
	state = {};
	render() {
		return (
			<div className='App'>
				<h1>Shopping List</h1>
				<AddToList />
				<List />
			</div>
		);
	}
}

export default App;
