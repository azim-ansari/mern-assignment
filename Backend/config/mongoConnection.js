/** @format */
const mongoose = require('mongoose')
require('dotenv').config()
//connecting database
const mongoInit = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Connected to Database yeah !! ✌️')
	} catch (e) {
		console.log(e.message)
	}
}

module.exports = mongoInit
