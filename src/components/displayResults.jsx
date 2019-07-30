import React, { Component } from "react";

class DisplayResults extends Component {
	state = {
		parsable: ""
	};

	renderTableData = idx => {
		return this.props.tableData[idx].map((dataPoint, index) => {
			return (
				<tr key={index}>
					<td>{dataPoint}</td>
				</tr>
			);
		});
	};

	render() {
		return (
			<div>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>Pub Ads</th>
						</tr>
					</thead>
					<tbody>{this.renderTableData(0)}</tbody>
				</table>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>Stream IDs</th>
						</tr>
					</thead>
					<tbody>{this.renderTableData(1)}</tbody>
				</table>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>App Version(s)</th>
						</tr>
					</thead>
					<tbody>{this.renderTableData(2)}</tbody>
				</table>
			</div>
		);
		// return (

		// <table className="table">
		// 	<thead className="thead-light">
		// 		<tr>
		// 			<th>#</th>
		// 			<th>First Name</th>
		// 			<th>Last Name</th>
		// 		</tr>
		// 	</thead>
		// 	<tbody>
		// 		<tr>
		// 			<th scope="row">1</th>
		// 			<td>Mark</td>
		// 			<td>Otto</td>
		// 		</tr>
		// 		<tr>
		// 			<th scope="row">2</th>
		// 			<td>Jacob</td>
		// 			<td>Thornton</td>
		// 		</tr>
		// 	</tbody>
		// </table>
		// );
	}
}

export default DisplayResults;
