import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "../custom.css";

class DeviceSelect extends Component {
	state = {
		id: this.props.id
	};

	render() {
		return (
			<select
				className="custom-select"
				onChange={e => this.props.onSelect(e.target.value)}
				value={this.state.id}
			>
				<option value="Roku">Roku</option>
				<option value="FTV">Fire TV</option>
			</select>
		);
	}
}

export default DeviceSelect;
