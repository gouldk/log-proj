import React, { Component } from "react";
import EntryBox from "./entryBox";
import SubmitButton from "./submitButton";
import DeviceSelect from "./deviceSelect";
import DisplayResults from "./displayResults";
import "../custom.css";
import Dropzone from "react-dropzone";
import ExportResults from "./exportResults";
import StyleSelect from "./styleSelect";
import DisplayStreams from "./displayStreams";

// Sets the default log option
let defaultLog = "Roku"; // "Roku", "FTV"...
let defaultGroup = true; // parse by group by default?

class SubmissionPage extends Component {
	state = {
		preSubmission: true,
		groupByID: defaultGroup,
		deviceID: defaultLog,
		entryText: "",
		parsedText: [],
		parsedStreams: []
	};

	constructor(props) {
		super(props);
		this.child = React.createRef();
	}

	handleStyle = () => {
		this.setState({ groupByID: !this.state.groupByID });
	};

	// Submit button's onClick handler
	handleSubmit = () => {
		console.log("Submit requested.");
		let log = this.state.entryText;
		if (this.state.groupByID) {
			switch (this.state.deviceID) {
				case "Roku":
					this.rokuStreamParse(log);
					break;
				// case "FTV":
				// 	this.ftvLogParse(log);
				// 	break;
				default:
					break;
			}
		} else {
			switch (this.state.deviceID) {
				case "Roku":
					this.rokuLogParse(log);
					break;
				case "FTV":
					this.ftvLogParse(log);
					break;
				default:
					break;
			}
		}
		this.setState({
			preSubmission: false
		});
	};

	// Changes the method of log parsing based on device.
	handleSelect = deviceID => {
		console.log("Selection changed:", deviceID);
		this.setState({ deviceID: deviceID });
	};

	// Parse out the relevant information specific to Fire TV device logs.
	ftvLogParse = text => {};

	// Parse out the relevant information specific to Roku device logs.
	rokuLogParse = text => {
		let lineArray = text.split(/\r?\n/);
		let pubAds = lineArray.filter(line => line.includes("/ads?"));
		let streamIDs = lineArray.filter(line => line.includes("streamid"));
		let errors = lineArray.filter(line => line.includes("ERROR"));
		let appVersions = lineArray.filter(line => line.includes("app_version:"));
		let cableProvider = lineArray.filter(line =>
			line.includes("cable_provider:")
		);
		let deviceModelInfo = lineArray.filter(line =>
			line.includes("device_model_info:")
		);
		let adobeID = lineArray.filter(line => line.includes("adobe_id:"));
		let an = lineArray.filter(line => line.includes("an:"));
		let deviceInfo;

		// Check if able to create deviceInfo properly, else empty over undef to avoid err.
		if (deviceModelInfo[0] !== undefined) {
			deviceInfo = {
				provider: cableProvider[0].substring(21, cableProvider[0].length - 1),
				version: appVersions[0].substring(18, appVersions[0].length - 1),
				model: deviceModelInfo[0].substring(24, deviceModelInfo[0].length - 1),
				adobeID: adobeID[0].substring(15, adobeID[0].length - 1),
				an: an[0].substring(9, an[0].length - 1)
			};
		} else {
			deviceInfo = {
				provider: "",
				version: "",
				model: "Unable to detect...",
				adobeID: "",
				an: ""
			};
		}

		let parsedOutput = {
			pubAd: pubAds,
			streamID: streamIDs,
			deviceInfo: deviceInfo,
			error: errors
		};
		this.setState({ parsedText: parsedOutput });
		// console.log(parsedOutput);
	};

	// Parse out the relevant information specific to Roku logs, organized by stream ID
	rokuStreamParse = text => {
		let lineArray = text.split(/\r?\n/);

		function lineHasID(line) {
			return line.includes("streamid");
		}
		let arrayIndex = 0;
		let i;
		// index 0 contains info before stream start
		let streamParsed = [];

		for (i = 0; i < lineArray.length; i++) {
			// if a new streamID is seen...
			if (lineHasID(lineArray[i])) {
				console.log("Increasing ID to " + (arrayIndex + 1));
				arrayIndex++; // increase the index of array we're altering -- [[sID1] [sID2]]
				console.log(arrayIndex);
			}
			if (streamParsed[arrayIndex] === undefined) {
				streamParsed[arrayIndex] = [];
			}
			streamParsed[arrayIndex].push(lineArray[i]);
		}

		let parsed = [];
		for (i = 0; i < streamParsed.length; i++) {
			parsed[i] = this.formatAsset(streamParsed[i]);
		}

		this.setState({ parsedStreams: parsed });
	};

	formatAsset = asset => {
		let streamID = asset.filter(line => line.includes("streamid:"));
		let background = asset.filter(line => line.includes("hdbackgroundposter:"));
		let assetID = asset.filter(line => line.includes("assetid:"));
		let title = asset.filter(line => line.includes("mpxvideotitle:"));
		let show = asset.filter(line => line.includes("mpxshow:"));
		let category = asset.filter(line => line.includes("mpxvideocategory:"));
		let videoID = asset.filter(line => line.includes("videoid:"));
		let pid = asset.filter(line => line.includes("pid:"));
		let postType = asset.filter(line => line.includes("post_type:"));
		let postAuthState = asset.filter(line => line.includes("postauthstate:"));
		let postAuthTag = asset.filter(line => line.includes("postauthtag:"));
		let relativeURL = asset.filter(line => line.includes("relative_url:"));

		let parsedOutput = {
			streamID: streamID[0],
			background: background[0],
			assetID: assetID[0],
			title: title[0],
			show: show[0],
			category: category[0],
			videoID: videoID[0],
			pid: pid[0],
			postType: postType[0],
			postAuthState: postAuthState[0],
			postAuthTag: postAuthTag[0],
			relativeURL: relativeURL[0]
		};

		return parsedOutput;
	};

	// Handles the processing of drag & drop files
	onDrop = acceptedFiles => {
		const reader = new FileReader();
		const file = acceptedFiles[0];
		console.log(file);

		reader.onload = event => {
			var contents = event.target.result;
			this.setState({ entryText: contents });
			this.handleSubmit();
		};

		reader.readAsText(file);
	};

	// Updates the point of reference used by the entry text box when new text is provided
	handleTextChange = text => {
		this.setState({ entryText: text.target.value });
	};

	// Handles export file formatting
	prepareStringExport = () => {
		let text = this.state.parsedText;
		let str =
			"------ Session Info ------\n" +
			text.deviceInfo.model +
			"\n" +
			text.deviceInfo.an +
			"\n" +
			text.deviceInfo.version +
			"\n" +
			text.deviceInfo.provider +
			"\n" +
			text.deviceInfo.adobeID +
			"\n\n------ Pub Ads ------\n" +
			text.pubAd.join("\n") +
			"\n\n------ Stream IDs ------\n" +
			text.streamID.join("\n") +
			"\n\n------ Errors ------\n" +
			text.error.join("\n");

		return str;
	};

	// Export the current parsed log to a text file (simplified log)
	handleExport = () => {
		console.log("Exporting...");
		let utc = String(
			new Date()
				.toJSON()
				.slice(0, 10)
				.replace(/-/g, "/")
		);

		let desc = this.state.parsedText.deviceInfo.model;
		let fileName = desc + " " + utc;
		console.log("Downloading " + fileName);
		let element = document.createElement("a");

		element.setAttribute(
			"href",
			"data:text/plain;charset=utf-8," +
				encodeURIComponent(this.prepareStringExport())
		);
		element.setAttribute("download", fileName);

		element.style.display = "none";
		document.body.appendChild(element);

		element.click();

		document.body.removeChild(element);
	};

	// helper to center h1 title with dynamic div columns
	titleTag = () => {
		if (this.state.preSubmission) {
			// return <h1 align="center">*</h1>;
			return (
				<img
					src="icon.png"
					alt="App"
					style={{ display: "block", margin: "10px auto" }}
					height="100vh"
				/>
			);
		} else {
			return (
				// <img
				// 	src="icon.png"
				// 	style={{ float: "right", display: "block", margin: "10px 0" }}
				// 	height="100vh"
				// />
				<br />
			);
		}
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col">{this.titleTag()}</div>
					{!this.state.preSubmission && (
						<div className="col-6">
							<span align="right">
								<ExportResults handleExport={this.handleExport} />
							</span>
						</div>
					)}
				</div>
				{this.state.preSubmission && (
					<div className="centered">
						<Dropzone onDrop={this.onDrop}>
							{({ getRootProps }) => (
								<div {...getRootProps()}>
									<EntryBox
										onChange={this.handleTextChange}
										displayText={this.state.entryText}
									/>
								</div>
							)}
						</Dropzone>

						<DeviceSelect id={this.deviceID} onSelect={this.handleSelect} />
						<SubmitButton onSubmit={this.handleSubmit} />
						<StyleSelect
							onChange={this.handleStyle}
							active={this.state.groupByID}
						/>
					</div>
				)}
				{!this.state.preSubmission && !this.state.groupByID && (
					<DisplayResults
						deviceID={this.state.deviceID}
						tableData={this.state.parsedText}
						rawData={this.state.entryText}
					/>
				)}
				{!this.state.preSubmission && this.state.groupByID && (
					<DisplayStreams tableData={this.state.parsedStreams} />
				)}
			</div>
		);
	}
}

export default SubmissionPage;
