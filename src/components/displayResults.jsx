import React, { Component } from "react";

class DisplayResults extends Component {
	state = {
		parsable: ""
	};

	render() {
		return (
			<table class="table">
				<thead class="thead-light">
					<tr>
						<th>#</th>
						<th>First Name</th>
						<th>Last Name</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
					</tr>
				</tbody>
			</table>
		);
	}
}

export default DisplayResults;
