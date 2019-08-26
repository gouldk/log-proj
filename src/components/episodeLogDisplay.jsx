import React, { Component } from "react";
import CodeContext from "./codeContext";
import CopyToClipboard from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";

class EpisodeLogDisplay extends Component {
	state = {};

	renderTableData = data => {
		// adding a simple hashcode function for use on string (for purposes of ID'ing the modals)
		String.prototype.hashCode = function() {
			var hash = 0;
			if (this.length === 0) {
				return hash;
			}
			for (var i = 0; i < this.length; i++) {
				var char = this.charCodeAt(i);
				hash = (hash << 5) - hash + char;
				hash = hash & hash; // Convert to 32bit integer
			}
			return hash;
		};

		return data.map((dataPoint, index) => {
			return (
				<tr key={index}>
					<td className="mr-0">{dataPoint}</td>
					<td className="mr-0">
						<div
							className="btn-group-vertical-sm"
							role="group"
							aria-label="tools"
						>
							<a data-tip data-for="peek">
								<CodeContext
									log={this.props.data.originalText}
									text={dataPoint}
									id={(dataPoint + index).hashCode()}
								/>
							</a>

							<ReactTooltip place="left" effect="solid" type="info" id="peek">
								Peek in log
							</ReactTooltip>

							<a data-tip data-for="copy">
								{" "}
								<CopyToClipboard text={dataPoint}>
									<button className="btn btn-sm btn-outline-link">
										<span role="img" aria-label="Scissor">
											✂️
										</span>
									</button>
								</CopyToClipboard>
							</a>

							<ReactTooltip place="left" effect="solid" type="info" id="copy">
								Copy
							</ReactTooltip>
						</div>
					</td>
				</tr>
			);
		});
	};

	// Render a table with the provided data array & title
	renderTable(data, title) {
		return (
			<table className="table table-striped">
				<thead className="thead-light">
					<tr>
						<th
							data-toggle="collapse"
							data-target={"#" + title.charAt(0) + this.props.id}
							className="dropdown-toggle"
							style={{ width: "95%" }}
						>
							{title}{" "}
							<span className="badge badge-info m-1">{data.length}</span>
							{/* <span className="font-weight-light align-right">
								click to expose // hide
							</span> */}
						</th>
						<th className="thead-light" style={{ width: "5%" }} />
					</tr>
				</thead>
				<tbody
					id={title.charAt(0) + this.props.id}
					className="collapse animated slideInRight faster"
				>
					{this.renderTableData(data)}
				</tbody>
			</table>
		);
	}

	render() {
		return (
			<div>
				{this.renderTable(this.props.data.pubAds, "Pub Ads")}
				{/* {this.renderTable(this.props.data.streamIDs, "Stream IDs")} */}
				{this.renderTable(this.props.data.errors, "Errors")}
			</div>
		);
	}
}

export default EpisodeLogDisplay;
