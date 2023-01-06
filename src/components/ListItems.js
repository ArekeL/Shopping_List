import React from "react";
import Item from "./Item";

const ListItems = (props) => {
	const items = props.items.map((item) => (
		<Item key={item.id} item={item} chengeItemStatus={props.chengeItemStatus} />
	));

	return (
		<>
			{items}
			<div className='clearBtn'>
				<button onClick={props.clearAll}>Cleer All</button>
				<button onClick={props.clearDone}>Cleer Done</button>
			</div>
		</>
	);
};

export default ListItems;
