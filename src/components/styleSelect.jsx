import React, { Component } from "react";

class StyleSelect extends Component {
	state = {};
	render() {
		return (
			<div className="custom-control custom-checkbox">
				<input
					onChange={this.props.onChange}
					checked={this.props.active}
					type="checkbox"
					className="custom-control-input"
					id="styleCheck"
				/>
				<label className="custom-control-label" htmlFor="styleCheck">
					Group by Stream ID?
				</label>
			</div>
		);
	}
}

export default StyleSelect;
