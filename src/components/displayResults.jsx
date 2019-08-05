import React, { Component } from "react";
import DeviceInfoCard from "./deviceInfoCard";
import "../custom.css";

class DisplayResults extends Component {
	state = {};

	renderTableData = data => {
		return data.map((dataPoint, index) => {
			return (
				<tr key={index}>
					<td className="mr-0">{dataPoint}</td>
				</tr>
			);
		});
	};

	renderTable(data, title) {
		return (
			<table className="table table-striped">
				<thead className="thead-light">
					<tr>
						<th
							data-toggle="collapse"
							data-target={"#" + title.charAt(0)}
							className="dropdown-toggle"
						>
							{title} <span className="badge badge-info">{data.length}</span>
							{/* <span className="font-weight-light align-right">
								click to expose // hide
							</span> */}
						</th>
					</tr>
				</thead>
				<tbody id={title.charAt(0)} className="collapse">
					{this.renderTableData(data)}
				</tbody>
			</table>
		);
	}

	render() {
		return (
			<div>
				<DeviceInfoCard
					provider={this.props.tableData.deviceInfo.provider}
					version={this.props.tableData.deviceInfo.version}
					model={this.props.tableData.deviceInfo.model}
					adobeID={this.props.tableData.deviceInfo.adobeID}
				/>
				{/* {this.renderDevice(this.props.tableData.version, "Device Info")} */}
				{this.renderTable(this.props.tableData.pubAd, "Pub Ads")}
				{this.renderTable(this.props.tableData.streamID, "Stream IDs")}
			</div>
		);
	}
}

export default DisplayResults;
