import React, { Component } from "react";
import EpisodeLogDisplay from "./episodeLogDisplay";
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
									{"show: " + this.props.data.show}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"stream ID: " + this.props.data.streamID}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"category: " + this.props.data.category}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"asset ID: " + this.props.data.assetID}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"video ID: " + this.props.data.videoID}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"PID: " + this.props.data.pid}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"post-type: " + this.props.data.postType}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"post-auth state: " + this.props.data.postAuthState}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"post-auth tag: " + this.props.data.postAuthTag}
								</h6>
								<h6 className="card-subtitle mb-2 text-muted">
									{"relative URL: " + this.props.data.relativeURL}
								</h6>
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
				<div className="card-footer">
					{/* <a href="#!" className="card-link">
						Show logs...
					</a> */}
					<EpisodeLogDisplay
						id={this.props.id}
						data={this.props.data}
					></EpisodeLogDisplay>
				</div>
			</div>
		);
	}
}

export default AssetInfoCard;
