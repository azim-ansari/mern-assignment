/** @format */

import React from 'react'
import './login.css'
import { loginUser } from '../../redux/Action'
import { useDispatch } from 'react-redux'

const Login = () => {
	const dispatch = useDispatch()
	const submitData = () => {
		// console.log('Azim>>>>>')
		const data = {
			userName: 'azimpanjwar',
			password: '123456',
		}
		dispatch(loginUser(data))
	}
	return (
		<div>
			{/* <form className="box mt-5">
				<img
					className="card-img-top mt-5"
					src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/33/97.jpg"
					alt="Logo"
					style={{ borderRadius: '50%', width: '50%', height: '50%' }}
				/>
				<h1 className="mt-5">Login</h1>
				<input type="text" name="" placeholder="Username" />
				<input type="password" name="" placeholder="Password" />
			</form> */}
			<button onClick={submitData}>Send </button>
		</div>
	)
}

export default Login
