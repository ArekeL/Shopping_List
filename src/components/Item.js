const Item = (props) => {
	return (
		<div>
			<p>
				{props.item.text} <button onClick={props.chengeItemStatus}>X</button>
			</p>
		</div>
	);
};

export default Item;
