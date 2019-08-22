import React, { Component } from "react";
import EntryBox from "./entryBox";
import SubmitButton from "./submitButton";
import DeviceSelect from "./deviceSelect";
import DisplayResults from "./displayResults";
import "../custom.css";
import Dropzone from "react-dropzone";
import ExportResults from "./exportResults";

// Sets the default log option
let defaultLog = "Roku"; // "Roku", "FTV"...

class SubmissionPage extends Component {
	state = {
		preSubmission: true,
		deviceID: defaultLog,
		entryText: "",
		parsedText: []
	};

	constructor(props) {
		super(props);
		this.child = React.createRef();
	}

	// Submit button's onClick handler
	handleSubmit = () => {
		console.log("Submit requested.");
		let log = this.state.entryText;
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
		this.setState({
			preSubmission: false //change back to false
		});
	};

	// Changes the method of log parsing based on device.
	handleSelect = deviceID => {
		console.log("Selection changed:", deviceID);
		this.setState({ deviceID: deviceID });
	};

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
		// let time = String(new Date().getDate());
		// console.log(time);
		console.log("Exporting...");
		let utc = String(
			new Date()
				.toJSON()
				.slice(0, 10)
				.replace(/-/g, "/")
		);

		let desc = this.state.parsedText.deviceInfo.model;
		console.log(desc);
		let fileName = desc + " " + utc;
		console.log(fileName);
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

	// helps to center h1 title with dynamic div columns
	titleTag = () => {
		if (this.state.preSubmission) {
			return <h1 align="center">*</h1>;
		} else {
			return <h1 align="right">*</h1>;
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
				{/* <h6 align="center"><i>where's your excuse now?</i></h6> */}
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
						<div className="custom-control custom-switch">
							<input
								type="checkbox"
								className="custom-control-input"
								id="customSwitch1"
								disabled={true}
							/>
							<label className="custom-control-label" htmlFor="customSwitch1">
								Only show critical errors
							</label>
						</div>
					</div>
				)}
				{!this.state.preSubmission && (
					<DisplayResults
						deviceID={this.state.deviceID}
						tableData={this.state.parsedText}
						rawData={this.state.entryText}
					/>
				)}
			</div>
		);
	}
}

export default SubmissionPage;
