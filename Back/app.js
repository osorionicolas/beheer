'use strict'

const express	= require("express")
const cors		= require('cors')
const app		= express()

const hostname	= '127.0.0.1'
const port		= 5000

app.use(cors())

app.use('/', [
	require('./routes/student-routes'),
	require('./routes/course-routes'),
])

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});

