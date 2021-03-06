/** @format */

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo01"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li>
							<Link className="navbar-brand" to="/">
								Logo
							</Link>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/login">
								Login
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/state">
								State
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/district">
								District
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/child">
								Child
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
