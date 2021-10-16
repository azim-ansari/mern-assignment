/** @format */

const userModel = require('../model/userModel')

module.exports = {
	signUpUser: async (userName, name, organization, designation, hashedPassword) => {
		return await userModel.create({
			userName: userName,
			name: name,
			organization: organization,
			designation: designation,
			password: hashedPassword,
		})
	},
	findUserByUserName: async (userName) => {
		return await userModel.findOne({ userName: userName })
	},
	login: async (userid, token) => {
		return await userModel.findOneAndUpdate(
			{ _id: userid },
			{ $set: { token: token } },
			{ new: true },
		)
	},
	findByToken: async (token) => {
		return await userModel.findOne({ token: token })
	},
}
