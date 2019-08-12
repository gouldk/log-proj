import React, { Component } from "react";
import "../custom.css";

class SubmitButton extends Component {
	state = {};
	render() {
		return (
			<div>
				<button
					type="button"
					className="btn btn-outline-primary m-2 w-50"
					// className="button"
					disabled={false}
					onClick={this.props.onSubmit}
				>
					{" "}
					Submit{" "}
					<span role="img" aria-label="send">
						✍🏼
					</span>
				</button>
			</div>
		);
	}
}

export default SubmitButton;
