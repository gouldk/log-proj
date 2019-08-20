import React, { Component } from "react";
import "../custom.css";

class DeviceInfoCard extends Component {
	state = {};
	render() {
		return (
			<div className="card alert-success mb-2">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10">
							<div className="card-body">
								<h4 className="card-title">device: {this.props.model}</h4>
								<h6 className="card-subtitle mb-2 text-muted">
									app: {this.props.an}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									version: {this.props.version}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									cable provider: {this.props.provider}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									adobe ID: {this.props.adobeID}
								</h6>
							</div>
						</div>
						<div className="col-2">
							<img
								className="img-fluid m-2"
								src="https://i.imgur.com/AAt5SUh.png"
								alt="Roku device"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default DeviceInfoCard;
