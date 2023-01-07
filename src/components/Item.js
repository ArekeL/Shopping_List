import "./Item.css";

const Item = (props) => {
	return (
		<div className='itemTable'>
			<table>
				<tbody>
					<tr>
						<td className='textTable'>
							<p>{props.item.text}</p>
						</td>
						<td>
							<button
								className='btnDone'
								onClick={() => props.chengeItemStatus(props.item.id)}>
								X
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Item;
