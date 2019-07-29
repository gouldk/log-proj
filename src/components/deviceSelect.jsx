import React, { Component } from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "../custom.css";

class DeviceSelect extends Component {
	state = {
		id: this.props.id
	};

	render() {
		return (
			<div className="padded">
				<select
					className="custom-select"
					onChange={e => this.props.onSelect(e.target.value)}
					value={this.state.id}
				>
					<option value="Roku">Roku</option>
					<option value="FTV">Fire TV</option>
					<option value="temp">Temp</option>
				</select>
			</div>
		);
	}
}

export default DeviceSelect;
