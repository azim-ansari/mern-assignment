/** @format */

import { SET_USER } from './ActionType'
import axios from 'axios'
import Swal from 'sweetalert2'

const API = 'http://localhost:4000/api/user/login'
export const loginUser = (data) => (dispatch) => {
	try {
		axios
			.post(API, data)
			.then((res) => {
				dispatch({
					type: SET_USER,
					payload: res?.data,
				})
				Swal.fire({
					title: 'Login Successfully',
					icon: 'success',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				})

				sessionStorage.setItem('loged_In_auth', res.data.data.token)
				sessionStorage.setItem('ucs-userId', res.data.data._id)
				sessionStorage.setItem('loged_In', true)

				window.location.href = '/'
			})
			.catch((err) => {
				Swal.fire({
					title: err?.response?.data?.response?.message
						? err?.response?.data?.response?.message
						: 'Network Erorr Please Try again!!',
					icon: 'error',
					imageUrl: './assets/images/favicon/android-chrome-192x192.png',
					imageHeight: 100,
					text: '',
					type: 'success',
					confirmButtonColor: '#3ab1f7',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Ok',
				})
			})
	} catch (err) {
		console.log('err ???', err)
		Swal.fire('Incorrect Credentials', '', 'error')
	}
}
