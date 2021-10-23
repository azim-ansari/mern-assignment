/** @format */

import React from 'react'

const Child = () => {
	return (
		<table class="table caption-top">
			<caption>List of users</caption>
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Sex</th>
					<th scope="col">Date of Birth</th>
					<th scope="col">Father's Name</th>
					<th scope="col">Mother's Name</th>
					<th scope="col">State</th>
					<th scope="col">District</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Azim</td>
					<td>Male</td>
					<td>15/08/1997</td>
					<td>Shahabuddin Ansari</td>
					<td>Nabihan Begam</td>
					<td>Bihar</td>
					<td>Siwan</td>
					<td>
						<button className="btn btn-success">View</button>
					</td>
				</tr>
				<tr>
					<td>Azim</td>
					<td>Male</td>
					<td>15/08/1997</td>
					<td>Shahabuddin Ansari</td>
					<td>Nabihan Begam</td>
					<td>Bihar</td>
					<td>Siwan</td>
					<td>
						<button className="btn btn-success">View</button>
					</td>
				</tr>
			</tbody>
		</table>
	)
}

export default Child
