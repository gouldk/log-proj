import React, { Component } from "react";
import "../custom.css";

// move button to separate component

class EntryBox extends Component {
	state = {
		textData: ""
	};

	constructor() {
		super();
		this.updateText = this.updateText.bind(this);
	}

	updateText(event) {
		this.setState({ textData: event.target.value });
	}

	render() {
		// console.log(this.state.textData);

		return (
			<div className="shadow-sm p-3 mb-5 bg-light rounded">
				<textarea
					className="form-control"
					placeholder="Paste your log here..."
					type="text"
					value={this.state.textData}
					onChange={this.updateText}
				/>
			</div>
		);
	}
}

export default EntryBox;
