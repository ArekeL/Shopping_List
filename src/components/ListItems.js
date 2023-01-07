import React from "react";
import Item from "./Item";
import "./ListItems.css";

const ListItems = (props) => {
	const active = props.items.filter((item) => item.active);
	const done = props.items.filter((item) => !item.active);

	const activeItems = active.map((item) => (
		<Item key={item.id} item={item} chengeItemStatus={props.chengeItemStatus} />
	));
	const doneItems = done.map((item) => (
		<Item key={item.id} item={item} chengeItemStatus={props.chengeItemStatus} />
	));

	return (
		<>
			<div>{activeItems}</div>
			<div className='doneItems'>{doneItems}</div>
			<div className='clearBtn'>
				<button onClick={props.clearAll}>Cleer All</button>
				<button onClick={props.clearDone}>Cleer Done</button>
			</div>
		</>
	);
};

export default ListItems;
