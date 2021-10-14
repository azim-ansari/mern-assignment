/** @format */

const express = require('express')
const app = express()
const mongoInit = require('./config/mongoConnection')
require('dotenv').config()
mongoInit()

const port = process.env.PORT || 4000

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
