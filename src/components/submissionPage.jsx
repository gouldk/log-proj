import React, { Component } from "react";
import EntryBox from "./entryBox";
import SubmitButton from "./submitButton";
import DeviceSelect from "./deviceSelect";
import DisplayResults from "./displayResults";
import "../custom.css";
import Dropzone from "react-dropzone";

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

	handleSubmit = () => {
		console.log("Submit requested.");
		let log = this.state.entryText;
		this.logParser(log);
		this.setState({
			preSubmission: false //change back to false
		});
	};

	handleSelect = deviceID => {
		console.log("Selection changed:", deviceID);
		this.setState({ deviceID: deviceID });
	};

	logParser = text => {
		let lineArray = text.split(/\r?\n/);
		let pubAds = lineArray.filter(line => line.includes("/ads?"));
		let streamIDs = lineArray.filter(line => line.includes("streamid"));
		let appVersions = lineArray.filter(line => line.includes("app_version:"));
		let parsedOutput = [pubAds, streamIDs, appVersions];
		this.setState({ parsedText: parsedOutput });
		console.log(parsedOutput);
		// console.log(pubAds);
		// console.log(streamIDs);
		// console.log(appVersions);
	};

	// Flesh out with functionality & file checking
	onDrop = acceptedFiles => {
		const reader = new FileReader();
		const file = acceptedFiles[0];
		console.log(file);

		reader.onload = event => {
			var contents = event.target.result;
			this.setState({ entryText: contents });
			this.handleSubmit();
			// console.log("File contents: " + contents);
		};

		reader.readAsText(file);
	};

	handleTextChange = text => {
		this.setState({ entryText: text.target.value });
	};

	render() {
		return (
			<div>
				<h1 align="center">*</h1>
				<h6 align="center">{/* <i>where's your excuse now?</i> */}</h6>
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
					</div>
				)}
				{/* {!this.state.preSubmission && (
					<div className="spinner-border text-primary" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				)} */}
				{!this.state.preSubmission && (
					<DisplayResults tableData={this.state.parsedText} />
				)}
			</div>
		);
	}
}

export default SubmissionPage;
