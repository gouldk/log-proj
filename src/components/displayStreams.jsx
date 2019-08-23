import React, { Component } from "react";
import DeviceInfoCard from "./deviceInfoCard";
import AssetInfoCard from "./assetInfoCard";

class DisplayStreams extends Component {
	state = {};

	createCard = data => {};

	createCards = () => {
		let assets = this.props.tableData;
		let num = assets.length;
		let cardArray = [];
		let i;
		for (i = 1; i < num; i++) {
			let asset = assets[i];
			// console.log(asset);
			// console.log(asset.streamID);
			// console.log(asset.streamID.toString());
			// console.log(
			// 	asset.streamID.toString().substring(1, asset.streamID.length - 1)
			// );
			let formattedAsset = {
				streamID: asset.streamID
					.toString()
					.substring(1, asset.streamID.toString().length - 1),
				background: asset.background
					.toString()
					.substring(25, asset.background.toString().length - 1),
				assetID: asset.assetID
					.toString()
					.substring(1, asset.assetID.toString().length - 1),
				title: asset.title
					.toString()
					.substring(20, asset.title.toString().length - 1),
				show: asset.show
					.toString()
					.substring(14, asset.show.toString().length - 1),
				category: asset.category
					.toString()
					.substring(1, asset.category.toString().length - 1)
			};
			return <AssetInfoCard data={formattedAsset} />;
		}
	};

	render() {
		return <div>{this.createCards()}</div>;
	}
}

export default DisplayStreams;
