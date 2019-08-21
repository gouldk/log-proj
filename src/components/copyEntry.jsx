import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

class CopyEntry extends Component {
	state = {};

	render() {
		return (
			// <CopyToClipboard options={{ message: "Whoa!" }} text={this.props.rowText}>
			<button className="text-secondary">✂️ Copy</button>
			// </CopyToClipboard>
		);
	}
}

export default CopyEntry;
