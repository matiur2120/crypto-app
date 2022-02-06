import React from "react";
import tableData from "../data.js";
import LineChart from "./LineChart";
import TableRow from "./TableRow";

const RankList = () => {
	return (
		<div className="container-fluid table_container">
			<div className="row">
				<div className="col-xl-4">
					<div className="table_container">
						<h4 className="mt-20">Rank List</h4>
						<table className="table">
							<thead>
								<tr>
									<th>Rank</th>
									<th>User Address</th>
									<th>V.Amount(BNB)</th>
									<th>Expected Price</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((rowData, index) => (
									<TableRow
										rank={rowData.rank}
										user_address={rowData.user_address}
										v_amount={rowData.vamount}
										expected_price={rowData.expected_price}
										imageLink={rowData.vamount[0]}
										vamount_value={rowData.vamount[1]}
										key={index}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
				<div className="col-xl-4">
					<div className="result_price_container">
						<h2>Result Prices</h2>
						<div className="result_price_top">
							<img className="pc_img" src="images/p-4-pc.png" alt="" />
							<div className="max_left">
								<img src="images/p-4-triangle.png" alt="" />
								<p className="max_text">Min</p>
								<p className="count_left">4525252523</p>
							</div>
							<div className="max_right">
								<img src="images/p-4-triangle.png" alt="" />
								<p>Max</p>
								<p className="count_right">4525252523</p>
							</div>
						</div>
						<div className="graph_container">
							<LineChart />
						</div>
					</div>
				</div>
				<div className="col-xl-4">
					<div className="table_container">
						<h4>Rank List</h4>
						<table className="table">
							<thead>
								<tr>
									<th>Rank</th>
									<th>User Address</th>
									<th>V.Amount(BNB)</th>
									<th>Expected Price</th>
								</tr>
							</thead>
							<tbody>
								{tableData.map((rowData, index) => (
									<TableRow
										rank={rowData.rank}
										user_address={rowData.user_address}
										v_amount={rowData.vamount}
										expected_price={rowData.expected_price}
										imageLink={rowData.vamount[0]}
										vamount_value={rowData.vamount[1]}
										key={index}
									/>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RankList;
