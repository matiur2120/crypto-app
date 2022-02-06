import React from "react";
import { Line } from "react-chartjs-2";
const LineChart = () => {
	return (
		<div className="graph_container">
			<Line
				style={{
					backgroundColor: "gray",
				}}
				data={{
					labels: [
						"00:00",
						"01:00",
						"01:00",
						"01:00",
						"01:00",
						"01:00",
						"01:00",
						"01:00",
						"01:00",
						"01:00",
						"01:00",
					],
					datasets: [
						{
							label: "24 hours price graph",

							data: [76, 2, 44, 5, 66, 90, 45, 34, 23, 90, 65],
							borderWidth: 1,
							backgroundColor: "#42A4E6",
							pointStyle: "rect",
							showLine: "false",
						},
					],
				}}
				height={300}
				width={600}
				// showLines="true"
				// spanGaps="true"
				options={{ maintainAspectRatio: false }}
				options={{
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
				}}
			/>
		</div>
	);
};

export default LineChart;
