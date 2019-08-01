import React, { Component } from "react";
import "../custom.css";

class DisplayResults extends Component {
	state = {};

	renderTableData = idx => {
		return this.props.tableData[idx].map((dataPoint, index) => {
			return (
				<tr key={index}>
					<td className="mr-0">{dataPoint}</td>
				</tr>
			);
		});
	};

	// renderDeviceData = idx => {
	// 	return this.props.tableData[idx].map((dataPoint, index) => {
	// 		return (
	// 			<tr key={index}>
	// 				<td />
	// 			</tr>
	// 		);
	// 	});
	// };

	renderTable(idx, title) {
		return (
			<table className="table table-striped">
				<thead className="thead-light">
					<tr>
						<th>
							{title}{" "}
							<span className="badge badge-info">
								{this.props.tableData[idx].length}
							</span>
						</th>
					</tr>
				</thead>
				<tbody>{this.renderTableData(idx)}</tbody>
			</table>
		);
	}

	render() {
		return (
			<div>
				{this.renderTable(2, "Device Info")}
				{this.renderTable(0, "Pub Ads")}
				{this.renderTable(1, "Stream IDs")}
			</div>
		);
	}
}

export default DisplayResults;
