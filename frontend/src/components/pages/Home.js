/** @format */

import React from 'react'
const Home = () => {
	return (
		<>
			<div className="mt-5">
				<div className="card border-success mt-5 ml-5 mr-5">
					<div className="row">
						<div className="col-sm-4">
							<div className="mb-3" style={{ maxWidth: '18rem' }}>
								<div className="card-body text-success">
									<h5 className="card-title">Name: Azim Ansari</h5>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="mb-3" style={{ maxWidth: '18rem' }}>
								<div className="card-body text-success">
									<h5 className="card-title">Occupation: Student</h5>
								</div>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="mb-3" style={{ maxWidth: '18rem' }}>
								<div className="card-body text-success">
									<h5 className="card-title">Designation: Full Stack web Developer</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="card border-success mt-5 ml-5 mr-5">
						<div className="card">
							<img
								className="card-top"
								src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
								alt="Card cap"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
