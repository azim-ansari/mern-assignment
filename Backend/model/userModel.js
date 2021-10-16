/** @format */

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
	userName: {
		type: String,
		required: true,
	},
	name: {
		type: String,
	},
	organization: {
		type: String,
	},
	designation: {
		type: String,
	},
	password: {
		type: String,
		required: true,
	},
	token: {
		type: String,
	},
})

module.exports = mongoose.model('User', userSchema)
