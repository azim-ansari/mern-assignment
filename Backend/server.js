/** @format */

const express = require('express')
const app = express()
const mongoInit = require('./config/mongoConnection')
const indexRouter = require('./routes/index')
require('dotenv').config()
mongoInit()

const port = process.env.PORT || 4000

app.use(express.json({ urlEncoded: false }))
app.use('/api', indexRouter)

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`)
})
