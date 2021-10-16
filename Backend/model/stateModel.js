/** @format */

const mongoose = require('mongoose')

const stateSchema = mongoose.Schema({
	state_id: {
		type: mongoose.Types.ObjectId,
		ref: 'District',
	},
	state_name: {
		type: String,
	},
})

module.exports = mongoose.model('State', stateSchema)
