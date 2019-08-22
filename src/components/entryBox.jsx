import React, { Component } from "react";
import "../custom.css";

class EntryBox extends Component {
	render() {
		return (
			<div className="shadow-sm p-3 mb-5 bg-light rounded">
				<textarea
					rows="12"
					className="form-control"
					placeholder="Drag & drop // copy & paste your log here..."
					type="text"
					value={this.props.displayText}
					onChange={this.props.onChange}
				/>
			</div>
		);
	}
}

export default EntryBox;
