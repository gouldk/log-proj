import React, { Component } from "react";
import EntryBox from "./entryBox";
import SubmitButton from "./submitButton";
import DeviceSelect from "./deviceSelect";
import DisplayResults from "./displayResults";
import "../custom.css";

// Sets the default log option
let defaultLog = "Roku"; // "Roku", "FTV"...

class SubmissionPage extends Component {
	state = {
		preSubmission: true,
		deviceID: defaultLog
	};

	handleSubmit = () => {
		console.log("Submit requested.");
		this.setState({ preSubmission: false });
	};

	handleSelect = deviceID => {
		console.log("Selection changed:", deviceID);
		this.setState({ deviceID: deviceID });
	};
	// Generating parsed {this.state.deviceID} log...
	render() {
		return (
			<div>
				{this.state.preSubmission && (
					<div className="centered">
						<EntryBox />
						<DeviceSelect id={this.deviceID} onSelect={this.handleSelect} />
						<SubmitButton onSubmit={this.handleSubmit} />
					</div>
				)}
				{/* {!this.state.preSubmission && (
					<div className="spinner-border text-primary" role="status">
						<span className="sr-only">Loading...</span>
					</div>
				)} */}
				{!this.state.preSubmission && <DisplayResults />}
			</div>
		);
	}
}

export default SubmissionPage;
