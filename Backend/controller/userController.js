/** @format */
const Helper = require('../config/helper')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { signUpUser, login, findUserByUserName } = require('../services/userServices')

module.exports = {
	signUpUser: async (req, res) => {
		try {
			const { userName, name, organization, designation, password } = req.body
			if (!userName || !name || !password) {
				return Helper.response(res, 421, 'please enter correct name, username and password')
			}
			const hashedPassword = await bcrypt.hashSync(password, 10)
			const newUser = await signUpUser(userName, name, organization, designation, hashedPassword)
			const result = { data: newUser }
			return Helper.response(res, 201, 'User registered sucessFully', result)
		} catch (error) {
			console.log('error:::', error)
			return Helper.response(res, 500, 'Server Error')
		}
	},

	login: async (req, res) => {
		try {
			const { userName, password } = req.body
			const userData = await findUserByUserName(userName)
			if (userData) {
				const checkPassword = await bcrypt.compareSync(password, userData.password)
				if (checkPassword) {
					const token = await jwt.sign({ user: { id: userData.id } }, process.env.JWT_SECRET, {
						expiresIn: '10 min',
					})
					const loginData = await login(userData._id, token)
					const result = { data: loginData }
					return Helper.response(res, 200, 'User loggedIn successFully', result)
				} else {
					return Helper.response(res, 400, 'Invalid credential !!')
				}
			} else {
				return Helper.response(res, 404, 'User not registered Please Register First')
			}
		} catch (error) {
			console.log('error:::', error)
			return Helper.response(res, 500, 'Server Error')
		}
	},
}
