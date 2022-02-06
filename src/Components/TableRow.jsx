import React from "react";

const TableRow = ({
	rank,
	user_address,
	expected_price,
	imageLink,
	vamount_value,
}) => {
	return (
		<>
			<tr className="table_data_row">
				<td>{rank}</td>
				<td>{user_address}</td>
				<td>
					{imageLink ? <img className="row_img" src={imageLink} /> : ""}
					{vamount_value}
				</td>
				<td>{expected_price}</td>
			</tr>
			<tr className="table_empty_row">
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
		</>
	);
};

export default TableRow;
