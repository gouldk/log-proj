import React, { Component } from "react";
import "../custom.css";

// move button to separate component

class EntryBox extends Component {
	render() {
		// console.log(this.state.textData);

		return (
			<div className="shadow-sm p-3 mb-5 bg-light rounded">
				<textarea
					rows="12"
					className="form-control"
					placeholder="Paste your log here..."
					type="text"
					value={this.props.displayText}
					onChange={this.props.onChange}
				/>
			</div>
		);
	}
}

export default EntryBox;
