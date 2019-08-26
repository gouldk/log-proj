import React, { Component } from "react";
import DeviceInfoCard from "./deviceInfoCard";
import AssetInfoCard from "./assetInfoCard";

class DisplayStreams extends Component {
	state = {};

	// remove extraneous log formatting and create easily-accessible struct / component from data
	createCard = (asset, id) => {
		let formattedAsset = {
			streamID: asset.streamID
				.toString()
				.substring(15, asset.streamID.toString().length - 1),
			background: asset.background
				.toString()
				.substring(25, asset.background.toString().length - 1),
			assetID: asset.assetID
				.toString()
				.substring(14, asset.assetID.toString().length - 1),
			title: asset.title
				.toString()
				.substring(20, asset.title.toString().length - 1),
			show: asset.show
				.toString()
				.substring(14, asset.show.toString().length - 1),
			category: asset.category
				.toString()
				.substring(23, asset.category.toString().length - 1),
			videoID: asset.videoID
				.toString()
				.substring(14, asset.videoID.toString().length - 1),
			pid: asset.pid.toString().substring(10, asset.pid.toString().length - 1),
			postType: asset.postType
				.toString()
				.substring(16, asset.postType.toString().length - 1),
			postAuthState: asset.postAuthState
				.toString()
				.substring(20, asset.postAuthState.toString().length - 1),
			postAuthTag: asset.postAuthTag
				.toString()
				.substring(18, asset.postAuthTag.toString().length - 1),
			relativeURL: asset.relativeURL
				.toString()
				.substring(19, asset.relativeURL.toString().length - 1),
			pubAds: asset.pubAds,
			streamIDs: asset.streamIDs,
			errors: asset.errors,
			originalText: asset.originalText
		};
		return (
			<AssetInfoCard key={id} id={id} data={formattedAsset}></AssetInfoCard>
		);
	};

	render() {
		return (
			<div>
				<div
					className="alert alert-info alert-dismissible fade show"
					role="alert"
				>
					<button
						type="button"
						className="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
					<strong>
						Found {this.props.tableData.length - 1} streamed asset(s)
					</strong>{" "}
					in the uploaded log.
				</div>
				<DeviceInfoCard
					provider={this.props.tableData[0].provider}
					version={this.props.tableData[0].version}
					model={this.props.tableData[0].model}
					adobeID={this.props.tableData[0].adobeID}
					an={this.props.tableData[0].an}
				></DeviceInfoCard>
				{this.props.tableData
					.slice(1)
					.map((asset, id) => this.createCard(asset, id))}
			</div>
		);
	}
}

export default DisplayStreams;
