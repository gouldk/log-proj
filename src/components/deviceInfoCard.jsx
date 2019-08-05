import React, { Component } from "react";
import "../custom.css";

class DeviceInfoCard extends Component {
	state = {};
	render() {
		return (
			<div className="card alert-success mb-2">
				<div className="card-body">
					<h4 className="card-title">{this.props.model}</h4>
					<h6 className="card-subtitle mb-2 text-muted">
						{this.props.version}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						{this.props.provider}
					</h6>
					<h6 className="card-subtitle mb-2 text-muted">{this.props.an}</h6>
					<h6 className="card-subtitle mb-2 text-muted">
						{this.props.adobeID}
					</h6>
				</div>
			</div>
		);
	}
}

export default DeviceInfoCard;
