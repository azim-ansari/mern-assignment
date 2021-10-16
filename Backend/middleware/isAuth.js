/** @format */
const { findByToken } = require('../services/userServices')

module.exports = {
	verifyToken: async (req, res, next) => {
		const token = req.header('token')
		if (!token) {
			return Helper.response(res, 421, 'Please login first')
		}
		try {
			const user = await findByToken(token)
			if (!user) {
				return Helper.response(res, 400, 'user Not loggedIn')
			}
			if (user.tokenExpire < Date.now()) {
				return Helper.response(res, 400, 'user Token expired')
			}
			req.user = user
			next()
		} catch (error) {
			logger.error(error)
			return Helper.response(res, 500, 'Invalid token')
		}
	},
}
