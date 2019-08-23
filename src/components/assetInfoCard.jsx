import React, { Component } from "react";
class AssetInfoCard extends Component {
	state = {};

	render() {
		return (
			<div className="card">
				<div className="container-fluid">
					<div className="card-body">
						<h4 className="card-title">{this.props.data.title}</h4>
						<h6 className="card-subtitle mb-2 text-muted">
							{this.props.data.show}}
						</h6>
						<div className="row">
							<div className="col-8">
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#!" className="card-link">
									Show logs...
								</a>
							</div>
							<div className="col-4">
								<img
									className="img-fluid m-2"
									src={this.props.data.background}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AssetInfoCard;
