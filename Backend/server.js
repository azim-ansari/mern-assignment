/** @format */

const express = require('express')
const cors = require('cors')
const app = express()
const mongoInit = require('./config/mongoConnection')
const indexRouter = require('./routes/index')
require('dotenv').config()
mongoInit()

const port = process.env.PORT || 4000

app.use(express.json({ urlEncoded: false }))
app.use('/api', indexRouter)
app.use(cors())
//cors
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key')
	if (req.method == 'OPTIONS') {
		res.status(200).end()
	} else {
		next()
	}
})
app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
