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

	renderDeviceData = idx => {
		return this.props.tableData[idx].map((dataPoint, index) => {
			return (
				<tr key={index}>
					<td />
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
							<th>
								Device Info{"  "}
								<span className="badge badge-info">
									{this.props.tableData[2].length}
								</span>
							</th>
						</tr>
					</thead>
					<tbody>{this.renderTableData(2)}</tbody>
				</table>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>
								Pub Ads{"  "}
								<span className="badge badge-info">
									{this.props.tableData[0].length}
								</span>
							</th>
						</tr>
					</thead>
					<tbody>{this.renderTableData(0)}</tbody>
				</table>
				<table className="table">
					<thead className="thead-light">
						<tr>
							<th>
								Stream IDs{"  "}
								<span className="badge badge-info">
									{this.props.tableData[1].length}
								</span>
							</th>
						</tr>
					</thead>
					<tbody>{this.renderTableData(1)}</tbody>
				</table>
			</div>
		);
	}
}

export default DisplayResults;
