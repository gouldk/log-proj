import React, { Component } from "react";
class AssetInfoCard extends Component {
	state = {};

	render() {
		return (
			<div className="card mb-2">
				<div className="container-fluid">
					<div className="card-body">
						<h4 className="card-title">{this.props.data.title}</h4>
						<div className="row">
							<div className="col-8">
								<h6 className="card-subtitle mb-2 text-muted">
									{"Show: " + this.props.data.show}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Stream ID: " + this.props.data.streamID}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Category: " + this.props.data.category}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Asset ID: " + this.props.data.assetID}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Video ID: " + this.props.data.videoID}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"PID: " + this.props.data.pid}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Post-Type: " + this.props.data.postType}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Post-Auth state: " + this.props.data.postAuthState}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Post-Auth tag: " + this.props.data.postAuthTag}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"Relative URL: " + this.props.data.relativeURL}
								</h6>
								<a href="#!" className="card-link">
									Show logs...
								</a>
							</div>
							<div className="col-4">
								<img
									className="img-fluid m-2"
									alt="Asset banner"
									src={this.props.data.background}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AssetInfoCard;
