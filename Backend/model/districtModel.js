/** @format */

const mongoose = require('mongoose')

const districtModel = mongoose.Schema({
	state_id: {
		type: mongoose.Types.ObjectId,
		ref: 'State',
	},
	district_id: {
		type: String,
	},
	district_name: {
		type: String,
	},
})

module.exports = mongoose.model('District', districtModel)
