import React, { Component } from "react";

class ExportResults extends Component {
	state = {};
	render() {
		return (
			<div>
				<button
					type="button"
					className="btn btn-secondary m-2 w-10"
					// className="button"
					// disabled={false}
					onClick={this.props.handleExport}
				>
					Export
				</button>
			</div>
		);
	}
}

export default ExportResults;
