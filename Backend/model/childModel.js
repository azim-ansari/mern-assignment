/** @format */

const mongoose = require('mongoose')

const childSchema = mongoose.Schema({
	district_id: {
		type: mongoose.Types.ObjectId,
		ref: 'District',
	},
	name: {
		type: String,
	},
	sex: {
		type: String,
		enum: ['Male', 'Female', 'Transgende'],
	},
	father_name: {
		type: String,
	},
	mother_name: {
		type: String,
	},
	photo: {
		type: String,
		default: '',
	},
})

module.exports = mongoose.model('Child', childSchema)
